import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/_core/hooks/useAuth';
import { useLocation } from 'wouter';
import { Eye, Download, CheckCircle, XCircle } from 'lucide-react';

export default function Admin() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const [selectedTab, setSelectedTab] = useState<'registrations' | 'enquiries'>('registrations');

  const registrationsQuery = trpc.scholarship.getAllRegistrations.useQuery(undefined, {
    enabled: user?.role === 'admin'
  });

  const enquiriesQuery = trpc.enquiry.getAll.useQuery(undefined, {
    enabled: user?.role === 'admin'
  });

  const statusMutation = trpc.scholarship.updateStatus.useMutation({
    onSuccess: () => {
      registrationsQuery.refetch();
    }
  });

  // Redirect if not admin
  if (user && user.role !== 'admin') {
    setLocation('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage scholarship registrations and enquiries</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setSelectedTab('registrations')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedTab === 'registrations'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-200'
            }`}
          >
            Scholarship Registrations
          </button>
          <button
            onClick={() => setSelectedTab('enquiries')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedTab === 'enquiries'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                : 'bg-white text-gray-700 border-2 border-gray-200'
            }`}
          >
            Enquiries
          </button>
        </div>

        {/* Registrations Tab */}
        {selectedTab === 'registrations' && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Scholarship Registrations</h2>
            {registrationsQuery.isLoading ? (
              <p className="text-gray-600">Loading...</p>
            ) : registrationsQuery.data && registrationsQuery.data.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Admit Card #</th>
                      <th className="px-4 py-3 text-left font-semibold">Student Name</th>
                      <th className="px-4 py-3 text-left font-semibold">Class</th>
                      <th className="px-4 py-3 text-left font-semibold">Mobile</th>
                      <th className="px-4 py-3 text-left font-semibold">Status</th>
                      <th className="px-4 py-3 text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrationsQuery.data.map((reg: any) => (
                      <tr key={reg.id} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-mono text-sm">{reg.admitCardNumber}</td>
                        <td className="px-4 py-3">{reg.studentName}</td>
                        <td className="px-4 py-3">{reg.class}</td>
                        <td className="px-4 py-3">{reg.mobileNumber}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            reg.status === 'admitted'
                              ? 'bg-green-100 text-green-800'
                              : reg.status === 'rejected'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {reg.status.charAt(0).toUpperCase() + reg.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <button
                              onClick={() => statusMutation.mutate({ id: reg.id, status: 'admitted' })}
                              className="p-2 text-green-600 hover:bg-green-50 rounded"
                              title="Approve"
                            >
                              <CheckCircle size={20} />
                            </button>
                            <button
                              onClick={() => statusMutation.mutate({ id: reg.id, status: 'rejected' })}
                              className="p-2 text-red-600 hover:bg-red-50 rounded"
                              title="Reject"
                            >
                              <XCircle size={20} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-600">No registrations found</p>
            )}
          </Card>
        )}

        {/* Enquiries Tab */}
        {selectedTab === 'enquiries' && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Enquiries</h2>
            {enquiriesQuery.isLoading ? (
              <p className="text-gray-600">Loading...</p>
            ) : enquiriesQuery.data && enquiriesQuery.data.length > 0 ? (
              <div className="space-y-4">
                {enquiriesQuery.data.map((enquiry: any) => (
                  <Card key={enquiry.id} className="p-4 border-l-4 border-purple-600">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-800">{enquiry.subject}</h3>
                        <p className="text-sm text-gray-600">From: {enquiry.name} ({enquiry.email})</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        enquiry.status === 'resolved'
                          ? 'bg-green-100 text-green-800'
                          : enquiry.status === 'read'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {enquiry.status.charAt(0).toUpperCase() + enquiry.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{enquiry.message}</p>
                    <p className="text-sm text-gray-600">Phone: {enquiry.phone}</p>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No enquiries found</p>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
