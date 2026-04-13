import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Phone, MessageCircle, CheckCircle, Trash, Download, Loader2 } from 'lucide-react';
import { useLocation } from 'wouter';
import { AdminLayout } from '@/components/AdminLayout';
import { toast } from 'sonner';
import { trpc } from '@/lib/trpc';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Admin Admissions Page
export function AdminAdmissions() {
  const [, navigate] = useLocation();
  const { data: admissions = [], isLoading, refetch } = trpc.admin.getAdmissions.useQuery();
  const [selectedAdmission, setSelectedAdmission] = useState<any>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const deleteAdmissionMutation = trpc.admin.deleteAdmission.useMutation();
  const approveAdmissionMutation = trpc.admin.updateAdmissionStatus.useMutation();

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this admission?')) {
      deleteAdmissionMutation.mutate({ id }, {
        onSuccess: () => {
          toast.success('Admission deleted successfully');
          refetch();
        },
        onError: () => {
          toast.error('Failed to delete admission');
        },
      });
    }
  };

  const handleApprove = (id: number) => {
    approveAdmissionMutation.mutate({ id, status: 'approved' }, {
      onSuccess: () => {
        toast.success('Admission approved successfully');
        refetch();
      },
      onError: () => {
        toast.error('Failed to approve admission');
      },
    });
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
    toast.success('Initiating call...');
  };

  const handleWhatsApp = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Opening WhatsApp...');
  };

  const handleView = (admission: any) => {
    setSelectedAdmission(admission);
    setViewModalOpen(true);
  };

  return (
    <AdminLayout title="Admissions">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={() => navigate('/admin/dashboard')}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft size={20} /> Back
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
            <Download size={20} /> Export Data
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : admissions.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No admissions yet. Admissions will appear here when students submit forms.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b dark:border-gray-600">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Photo</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Name</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Father</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Class</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Mobile</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Status</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admissions.map((admission: any) => (
                  <tr key={admission.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-4">
                      {admission.photoUrl ? (
                        <img src={admission.photoUrl} alt={admission.studentName} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">No Photo</div>
                      )}
                    </td>
                    <td className="px-4 py-4 text-gray-800 dark:text-gray-200 font-medium">{admission.studentName}</td>
                    <td className="px-4 py-4 text-gray-700 dark:text-gray-300">{admission.fatherName}</td>
                    <td className="px-4 py-4 text-gray-800 dark:text-gray-200">{admission.class}</td>
                    <td className="px-4 py-4 text-gray-800 dark:text-gray-200">{admission.mobileNumber}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold ${
                          admission.status === 'approved'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}
                      >
                        {admission.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 flex gap-1">
                      <button
                        onClick={() => handleView(admission)}
                        className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition"
                        title="View Details"
                      >
                        <Eye size={18} className="text-blue-600 dark:text-blue-400" />
                      </button>
                      <button
                        onClick={() => handleCall(admission.mobileNumber)}
                        className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition"
                        title="Call Parent"
                      >
                        <Phone size={18} className="text-green-600 dark:text-green-400" />
                      </button>
                      <button
                        onClick={() => handleWhatsApp(admission.mobileNumber)}
                        className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition"
                        title="WhatsApp Parent"
                      >
                        <MessageCircle size={18} className="text-green-600 dark:text-green-400" />
                      </button>
                      {admission.status !== 'approved' && (
                        <button
                          onClick={() => handleApprove(admission.id)}
                          className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition"
                          title="Approve"
                        >
                          <CheckCircle size={18} className="text-green-600 dark:text-green-400" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(admission.id)}
                        className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash size={18} className="text-red-600 dark:text-red-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* View Details Modal */}
        <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-gray-800 dark:text-gray-200">Student Admission Details</DialogTitle>
            </DialogHeader>
            {selectedAdmission && (
              <div className="space-y-6">
                <div className="flex gap-6">
                  {selectedAdmission.photoUrl ? (
                    <img
                      src={selectedAdmission.photoUrl}
                      alt={selectedAdmission.studentName}
                      className="w-32 h-32 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-lg bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400">No Photo</div>
                  )}
                  <div className="flex-1 space-y-3">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Student Name</p>
                      <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{selectedAdmission.studentName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Class</p>
                      <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{selectedAdmission.class}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Date of Birth</p>
                      <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{selectedAdmission.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Gender</p>
                      <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{selectedAdmission.gender}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Father's Name</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mother's Name</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.motherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Father's Occupation</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.fatherOccupation || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mother's Occupation</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.motherOccupation || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Annual Income</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.annualIncome || 'N/A'}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Previous School</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.previousSchool}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Address</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Mobile Number</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.mobileNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Admission Number</p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200">{selectedAdmission.admissionNumber || 'Pending'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${
                        selectedAdmission.status === 'approved'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}
                    >
                      {selectedAdmission.status}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={() => handleCall(selectedAdmission.mobileNumber)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2"
                  >
                    <Phone size={18} /> Call
                  </Button>
                  <Button
                    onClick={() => handleWhatsApp(selectedAdmission.mobileNumber)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2"
                  >
                    <MessageCircle size={18} /> WhatsApp
                  </Button>
                  {selectedAdmission.status !== 'approved' && (
                    <Button
                      onClick={() => {
                        handleApprove(selectedAdmission.id);
                        setViewModalOpen(false);
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white gap-2"
                    >
                      <CheckCircle size={18} /> Approve
                    </Button>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}

// Admin Enquiries Page
export function AdminEnquiries() {
  const [, navigate] = useLocation();
  const { data: enquiries = [], isLoading, refetch } = trpc.admin.getEnquiries.useQuery();
  const [selectedEnquiry, setSelectedEnquiry] = useState<any>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const deleteEnquiryMutation = trpc.admin.deleteEnquiry.useMutation();

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Opening WhatsApp...');
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      deleteEnquiryMutation.mutate({ id }, {
        onSuccess: () => {
          toast.success('Enquiry deleted successfully');
          refetch();
        },
        onError: () => {
          toast.error('Failed to delete enquiry');
        },
      });
    }
  };

  return (
    <AdminLayout title="Enquiries">
      <div className="space-y-6">
        <Button
          onClick={() => navigate('/admin/dashboard')}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft size={20} /> Back
        </Button>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : enquiries.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No enquiries yet.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b dark:border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Name</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Phone</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Email</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Message</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry: any) => (
                  <tr key={enquiry.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{enquiry.name}</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{enquiry.phone}</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{enquiry.email}</td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{enquiry.message?.substring(0, 40)}...</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button onClick={() => { setSelectedEnquiry(enquiry); setViewModalOpen(true); }} className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition" title="View"><Eye size={18} className="text-blue-600 dark:text-blue-400" /></button>
                      <button onClick={() => handleCall(enquiry.phone)} className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition" title="Call"><Phone size={18} className="text-green-600 dark:text-green-400" /></button>
                      <button onClick={() => handleWhatsApp(enquiry.phone)} className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition" title="WhatsApp"><MessageCircle size={18} className="text-green-600 dark:text-green-400" /></button>
                      <button onClick={() => handleDelete(enquiry.id)} className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition" title="Delete"><Trash size={18} className="text-red-600 dark:text-red-400" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
          <DialogContent className="max-w-2xl bg-white dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-gray-800 dark:text-gray-200">Enquiry Details</DialogTitle>
            </DialogHeader>
            {selectedEnquiry && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-sm text-gray-600 dark:text-gray-400">Name</p><p className="font-semibold text-gray-800 dark:text-gray-200">{selectedEnquiry.name}</p></div>
                  <div><p className="text-sm text-gray-600 dark:text-gray-400">Phone</p><p className="font-semibold text-gray-800 dark:text-gray-200">{selectedEnquiry.phone}</p></div>
                  <div><p className="text-sm text-gray-600 dark:text-gray-400">Email</p><p className="font-semibold text-gray-800 dark:text-gray-200">{selectedEnquiry.email}</p></div>
                  <div><p className="text-sm text-gray-600 dark:text-gray-400">Date</p><p className="font-semibold text-gray-800 dark:text-gray-200">{new Date(selectedEnquiry.createdAt).toLocaleDateString()}</p></div>
                </div>
                <div><p className="text-sm text-gray-600 dark:text-gray-400">Message</p><p className="font-semibold text-gray-800 dark:text-gray-200 mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">{selectedEnquiry.message}</p></div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}

// Admin Contacts Page
export function AdminContacts() {
  const [, navigate] = useLocation();
  const { data: contacts = [], isLoading } = trpc.admin.getContacts.useQuery();

  const handleReplyWhatsApp = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Opening WhatsApp...');
  };

  return (
    <AdminLayout title="Contacts">
      <div className="space-y-6">
        <Button
          onClick={() => navigate('/admin/dashboard')}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft size={20} /> Back
        </Button>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : contacts.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No contacts yet.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b dark:border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Name</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Email</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Phone</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Message</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact: any) => (
                  <tr key={contact.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{contact.name}</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{contact.email}</td>
                    <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{contact.phone}</td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{contact.message?.substring(0, 50)}...</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleReplyWhatsApp(contact.phone)}
                        className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition"
                      >
                        <MessageCircle size={18} className="text-green-600 dark:text-green-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

// Admin Scholarships Page
export function AdminScholarships() {
  const [, navigate] = useLocation();
  const { data: scholarships = [], isLoading, refetch } = trpc.admin.getScholarships.useQuery();
  const [selectedScholarship, setSelectedScholarship] = useState<any>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const deleteScholarshipMutation = trpc.admin.deleteScholarship.useMutation();

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone: string) => {
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Opening WhatsApp...');
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this scholarship?')) {
      deleteScholarshipMutation.mutate({ id }, {
        onSuccess: () => {
          toast.success('Scholarship deleted successfully');
          refetch();
        },
        onError: () => {
          toast.error('Failed to delete scholarship');
        },
      });
    }
  };

  return (
    <AdminLayout title="Scholarships">
      <div className="space-y-6">
        <Button
          onClick={() => navigate('/admin/dashboard')}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft size={20} /> Back
        </Button>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : scholarships.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No scholarship registrations yet.</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700 border-b dark:border-gray-600">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Photo</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Name</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Father</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Class</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Mobile</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Status</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-800 dark:text-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((scholarship: any) => (
                  <tr key={scholarship.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-4">{scholarship.photoUrl ? <img src={scholarship.photoUrl} alt="Photo" className="w-10 h-10 rounded-full object-cover" /> : <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600"></div>}</td>
                    <td className="px-4 py-4 text-gray-800 dark:text-gray-200">{scholarship.studentName}</td>
                    <td className="px-4 py-4 text-gray-800 dark:text-gray-200">{scholarship.fatherName}</td>
                    <td className="px-4 py-4 text-gray-800 dark:text-gray-200">{scholarship.class}</td>
                    <td className="px-4 py-4 text-gray-800 dark:text-gray-200">{scholarship.mobileNumber}</td>
                    <td className="px-4 py-4"><span className={`px-3 py-1 rounded-full text-sm font-bold ${scholarship.status === 'admitted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'}`}>{scholarship.status}</span></td>
                    <td className="px-4 py-4 flex gap-2"><button onClick={() => { setSelectedScholarship(scholarship); setViewModalOpen(true); }} className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition" title="View"><Eye size={18} className="text-blue-600 dark:text-blue-400" /></button><button onClick={() => handleCall(scholarship.mobileNumber)} className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition" title="Call"><Phone size={18} className="text-green-600 dark:text-green-400" /></button><button onClick={() => handleWhatsApp(scholarship.mobileNumber)} className="p-2 hover:bg-green-100 dark:hover:bg-green-900 rounded-lg transition" title="WhatsApp"><MessageCircle size={18} className="text-green-600 dark:text-green-400" /></button><button onClick={() => handleDelete(scholarship.id)} className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition" title="Delete"><Trash size={18} className="text-red-600 dark:text-red-400" /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

// Admin Gallery Page
export function AdminGallery() {
  const [, navigate] = useLocation();
  const { data: images = [], isLoading } = trpc.admin.getGalleryImages.useQuery();

  return (
    <AdminLayout title="Gallery">
      <div className="space-y-6">
        <Button
          onClick={() => navigate('/admin/dashboard')}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft size={20} /> Back
        </Button>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : images.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No gallery images yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image: any) => (
              <div key={image.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={image.imageUrl} alt={image.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">{image.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

// Admin Courses Page
export function AdminCourses() {
  const [, navigate] = useLocation();
  const { data: courses = [], isLoading } = trpc.admin.getCourses.useQuery();

  return (
    <AdminLayout title="Courses">
      <div className="space-y-6">
        <Button
          onClick={() => navigate('/admin/dashboard')}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft size={20} /> Back
        </Button>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : courses.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No courses yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course: any) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{course.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{course.shortDescription}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2"><strong>Category:</strong> {course.category}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Duration:</strong> {course.duration}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

// Admin Branches Page
export function AdminBranches() {
  const [, navigate] = useLocation();
  const { data: branches = [], isLoading } = trpc.admin.getBranches.useQuery();

  return (
    <AdminLayout title="Branches">
      <div className="space-y-6">
        <Button
          onClick={() => navigate('/admin/dashboard')}
          variant="outline"
          className="gap-2"
        >
          <ArrowLeft size={20} /> Back
        </Button>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : branches.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No branches yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {branches.map((branch: any) => (
              <div key={branch.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{branch.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{branch.address}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2"><strong>Phone:</strong> {branch.phone}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Email:</strong> {branch.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}


// Enhanced Admin Gallery Page with Upload
export function AdminGalleryEnhanced() {
  const [, navigate] = useLocation();
  const { data: images = [], isLoading, refetch } = trpc.admin.getGalleryImages.useQuery();
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', category: 'Campus', imageUrl: '' });
  const createGalleryMutation = trpc.admin.createGalleryImage.useMutation();
  const deleteGalleryMutation = trpc.admin.deleteGalleryImage.useMutation();

  const handleAddImage = () => {
    if (!formData.title || !formData.imageUrl) {
      toast.error('Please fill in all required fields');
      return;
    }
    createGalleryMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('Image added successfully');
        setFormData({ title: '', description: '', category: 'Campus', imageUrl: '' });
        setShowAddModal(false);
        refetch();
      },
      onError: () => {
        toast.error('Failed to add image');
      },
    });
  };

  const handleDeleteImage = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      deleteGalleryMutation.mutate({ id }, {
        onSuccess: () => {
          toast.success('Image deleted successfully');
          refetch();
        },
        onError: () => {
          toast.error('Failed to delete image');
        },
      });
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, imageUrl: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AdminLayout title="Gallery Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={() => navigate('/admin/dashboard')}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft size={20} /> Back
          </Button>
          <Button
            onClick={() => setShowAddModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
          >
            <Download size={20} /> Add Image
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : images.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No gallery images yet. Add your first image!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image: any) => (
              <div key={image.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={image.imageUrl} alt={image.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">{image.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{image.category}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{image.description}</p>
                  <button
                    onClick={() => handleDeleteImage(image.id)}
                    className="mt-4 w-full p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                  >
                    <Trash size={18} className="inline mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add Image Modal */}
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogContent className="max-w-md bg-white dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-gray-800 dark:text-gray-200">Add Gallery Image</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Image title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  <option>Campus</option>
                  <option>Classroom</option>
                  <option>Hostel</option>
                  <option>Sports</option>
                  <option>Faculty</option>
                  <option>Events</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Image description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>
              <Button
                onClick={handleAddImage}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Add Image
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}

// Enhanced Admin Courses Page with Add/Edit/Delete
export function AdminCoursesEnhanced() {
  const [, navigate] = useLocation();
  const { data: courses = [], isLoading, refetch } = trpc.admin.getCourses.useQuery();
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', shortDescription: '', category: '', duration: '' });
  const createCourseMutation = trpc.admin.createCourse.useMutation();
  const deleteCourseMutation = trpc.admin.deleteCourse.useMutation();

  const handleAddCourse = () => {
    if (!formData.name || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }
    createCourseMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('Course added successfully');
        setFormData({ name: '', shortDescription: '', category: '', duration: '' });
        setShowAddModal(false);
        refetch();
      },
      onError: () => {
        toast.error('Failed to add course');
      },
    });
  };

  const handleDeleteCourse = (id: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      deleteCourseMutation.mutate({ id }, {
        onSuccess: () => {
          toast.success('Course deleted successfully');
          refetch();
        },
        onError: () => {
          toast.error('Failed to delete course');
        },
      });
    }
  };

  return (
    <AdminLayout title="Courses Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={() => navigate('/admin/dashboard')}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft size={20} /> Back
          </Button>
          <Button
            onClick={() => setShowAddModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
          >
            <Download size={20} /> Add Course
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : courses.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No courses yet. Add your first course!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course: any) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{course.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{course.shortDescription}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2"><strong>Category:</strong> {course.category}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Duration:</strong> {course.duration}</p>
                <button
                  onClick={() => handleDeleteCourse(course.id)}
                  className="mt-4 w-full p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                >
                  <Trash size={18} className="inline mr-2" /> Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add Course Modal */}
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogContent className="max-w-md bg-white dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-gray-800 dark:text-gray-200">Add Course</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Course Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Course name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="e.g., Navodaya, Sainik, Military, Sports, Regular"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="e.g., 1 year, 2 years"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                <textarea
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Course description"
                  rows={3}
                />
              </div>
              <Button
                onClick={handleAddCourse}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Add Course
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}

// Enhanced Admin Branches Page with Add/Edit/Delete
export function AdminBranchesEnhanced() {
  const [, navigate] = useLocation();
  const { data: branches = [], isLoading, refetch } = trpc.admin.getBranches.useQuery();
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', phone: '', email: '' });
  const createBranchMutation = trpc.admin.createBranch.useMutation();
  const deleteBranchMutation = trpc.admin.deleteBranch.useMutation();

  const handleAddBranch = () => {
    if (!formData.name || !formData.address) {
      toast.error('Please fill in all required fields');
      return;
    }
    createBranchMutation.mutate(formData, {
      onSuccess: () => {
        toast.success('Branch added successfully');
        setFormData({ name: '', address: '', phone: '', email: '' });
        setShowAddModal(false);
        refetch();
      },
      onError: () => {
        toast.error('Failed to add branch');
      },
    });
  };

  const handleDeleteBranch = (id: number) => {
    if (confirm('Are you sure you want to delete this branch?')) {
      deleteBranchMutation.mutate({ id }, {
        onSuccess: () => {
          toast.success('Branch deleted successfully');
          refetch();
        },
        onError: () => {
          toast.error('Failed to delete branch');
        },
      });
    }
  };

  return (
    <AdminLayout title="Branches Management">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={() => navigate('/admin/dashboard')}
            variant="outline"
            className="gap-2"
          >
            <ArrowLeft size={20} /> Back
          </Button>
          <Button
            onClick={() => setShowAddModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white gap-2"
          >
            <Download size={20} /> Add Branch
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="animate-spin text-purple-600" size={32} />
          </div>
        ) : branches.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No branches yet. Add your first branch!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {branches.map((branch: any) => (
              <div key={branch.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">{branch.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{branch.address}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2"><strong>Phone:</strong> {branch.phone}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Email:</strong> {branch.email}</p>
                <button
                  onClick={() => handleDeleteBranch(branch.id)}
                  className="mt-4 w-full p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
                >
                  <Trash size={18} className="inline mr-2" /> Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add Branch Modal */}
        <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
          <DialogContent className="max-w-md bg-white dark:bg-gray-800">
            <DialogHeader>
              <DialogTitle className="text-gray-800 dark:text-gray-200">Add Branch</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Branch Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Branch name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Branch address"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  placeholder="Email address"
                />
              </div>
              <Button
                onClick={handleAddBranch}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              >
                Add Branch
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}