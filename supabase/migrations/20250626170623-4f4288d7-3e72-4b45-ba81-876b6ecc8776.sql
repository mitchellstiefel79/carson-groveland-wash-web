
-- Phase 1: Fix Admin Access - Assign current authenticated user as admin
-- First, ensure the current user gets admin role
INSERT INTO public.user_roles (user_id, role)
SELECT auth.uid(), 'admin'::app_role
WHERE auth.uid() IS NOT NULL
ON CONFLICT (user_id, role) DO NOTHING;

-- Phase 2: Storage Security - Fix customer-photos bucket security
-- Remove public access and set bucket to private
UPDATE storage.buckets 
SET public = false 
WHERE id = 'customer-photos';

-- Clean up conflicting storage policies
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Give users access to own folder" ON storage.objects;

-- Ensure only authenticated users can access customer photos
CREATE POLICY "Admin access to customer photos"
  ON storage.objects FOR ALL
  USING (
    bucket_id = 'customer-photos' AND 
    public.has_role(auth.uid(), 'admin')
  );

-- Phase 4: Database Policy Cleanup - Remove conflicting policies
DROP POLICY IF EXISTS "Anyone can view customer registrations" ON public.customers;
DROP POLICY IF EXISTS "Anyone can update company settings" ON public.company_settings;

-- Ensure clean, non-conflicting policies
DROP POLICY IF EXISTS "Allow public customer form submissions" ON public.customers;
CREATE POLICY "Allow public customer form submissions" 
  ON public.customers 
  FOR INSERT 
  WITH CHECK (true);

-- Add security audit logging table
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  action text NOT NULL,
  table_name text,
  record_id uuid,
  details jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on audit log
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Only admins can view audit logs" 
  ON public.security_audit_log 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

-- System can insert audit logs
CREATE POLICY "System can insert audit logs" 
  ON public.security_audit_log 
  FOR INSERT 
  WITH CHECK (true);
