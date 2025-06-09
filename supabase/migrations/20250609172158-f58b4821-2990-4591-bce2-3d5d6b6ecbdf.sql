
-- Fix critical RLS security issues

-- First, let's create proper RLS policies for the customers table
-- Remove the dangerous policy that allows anyone to view customer registrations
DROP POLICY IF EXISTS "Anyone can view customer registrations" ON public.customers;

-- Create secure policies for customers table
CREATE POLICY "Only authenticated users can view customers" 
  ON public.customers 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can insert customers" 
  ON public.customers 
  FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update customers" 
  ON public.customers 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can delete customers" 
  ON public.customers 
  FOR DELETE 
  USING (auth.role() = 'authenticated');

-- Fix company_settings table policies
-- Remove dangerous update policy
DROP POLICY IF EXISTS "Anyone can update company settings" ON public.company_settings;

-- Create secure policies for company_settings
CREATE POLICY "Only authenticated users can view company settings" 
  ON public.company_settings 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Only authenticated users can update company settings" 
  ON public.company_settings 
  FOR UPDATE 
  USING (auth.role() = 'authenticated');

-- Create storage bucket for customer photos with proper security (only if it doesn't exist)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
SELECT 'customer-photos', 'customer-photos', false, 10485760, ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
WHERE NOT EXISTS (SELECT 1 FROM storage.buckets WHERE id = 'customer-photos');

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Authenticated users can upload photos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can view photos" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete photos" ON storage.objects;

-- Create secure storage policies
CREATE POLICY "Authenticated users can upload photos"
  ON storage.objects FOR INSERT 
  WITH CHECK (
    bucket_id = 'customer-photos' AND 
    auth.role() = 'authenticated'
  );

CREATE POLICY "Authenticated users can view photos"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'customer-photos' AND 
    auth.role() = 'authenticated'
  );

CREATE POLICY "Authenticated users can delete photos"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'customer-photos' AND 
    auth.role() = 'authenticated'
  );

-- Create user roles system for admin access (only if it doesn't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
        CREATE TYPE public.app_role AS ENUM ('admin', 'user');
    END IF;
END $$;

-- Create user_roles table (only if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS app_role
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT role FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1
$$;

-- Update customers table policies to be more restrictive for admin access
DROP POLICY IF EXISTS "Only authenticated users can view customers" ON public.customers;
DROP POLICY IF EXISTS "Only authenticated users can update customers" ON public.customers;
DROP POLICY IF EXISTS "Only authenticated users can delete customers" ON public.customers;
DROP POLICY IF EXISTS "Allow public customer form submissions" ON public.customers;

-- Only admins can view/manage customer data
CREATE POLICY "Only admins can view customers" 
  ON public.customers 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update customers" 
  ON public.customers 
  FOR UPDATE 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete customers" 
  ON public.customers 
  FOR DELETE 
  USING (public.has_role(auth.uid(), 'admin'));

-- Allow public form submissions (but not viewing)
CREATE POLICY "Allow public customer form submissions" 
  ON public.customers 
  FOR INSERT 
  WITH CHECK (true);

-- Update company_settings policies for admin-only access
DROP POLICY IF EXISTS "Only authenticated users can view company settings" ON public.company_settings;
DROP POLICY IF EXISTS "Only authenticated users can update company settings" ON public.company_settings;

CREATE POLICY "Only admins can view company settings" 
  ON public.company_settings 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update company settings" 
  ON public.company_settings 
  FOR UPDATE 
  USING (public.has_role(auth.uid(), 'admin'));

-- Create policies for user_roles table
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Only admins can manage user roles" ON public.user_roles;

CREATE POLICY "Users can view their own roles" 
  ON public.user_roles 
  FOR SELECT 
  USING (user_id = auth.uid());

CREATE POLICY "Only admins can manage user roles" 
  ON public.user_roles 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));
