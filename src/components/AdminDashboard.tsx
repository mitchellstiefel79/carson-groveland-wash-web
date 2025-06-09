
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Users, Settings, Video } from "lucide-react";
import AdminVideoSync from "./AdminVideoSync";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  photos: string[];
  created_at: string;
}

interface AdminDashboardProps {
  onSignOut: () => void;
}

const AdminDashboard = ({ onSignOut }: AdminDashboardProps) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const { data, error } = await supabase
        .from('customers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCustomers(data || []);
    } catch (error: any) {
      console.error('Error fetching customers:', error);
      toast({
        title: "Error",
        description: "Failed to load customer data. Please check your admin permissions.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Signed out",
        description: "You've been signed out successfully.",
      });
      
      onSignOut();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <Button onClick={handleSignOut} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{customers.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Inquiries</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {customers.filter(c => {
                  const created = new Date(c.created_at);
                  const weekAgo = new Date();
                  weekAgo.setDate(weekAgo.getDate() - 7);
                  return created > weekAgo;
                }).length}
              </div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </CardContent>
          </Card>

          <div className="lg:col-span-1">
            <AdminVideoSync />
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer Inquiries</CardTitle>
            <CardDescription>
              Manage customer contact form submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {customers.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No customer inquiries yet.</p>
            ) : (
              <div className="space-y-4">
                {customers.map((customer) => (
                  <div key={customer.id} className="border rounded-lg p-4 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{customer.name}</h3>
                        <p className="text-sm text-gray-600">{customer.email}</p>
                        <p className="text-sm text-gray-600">{customer.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Service:</p>
                        <p className="text-sm">{customer.service}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(customer.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        {customer.photos && customer.photos.length > 0 && (
                          <p className="text-sm text-blue-600">
                            📷 {customer.photos.length} photo(s) attached
                          </p>
                        )}
                      </div>
                    </div>
                    {customer.message && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-sm font-medium text-gray-700">Message:</p>
                        <p className="text-sm mt-1">{customer.message}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
