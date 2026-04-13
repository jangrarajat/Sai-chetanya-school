import { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Award, MessageSquare, Phone, Loader2 } from 'lucide-react';
import { AdminLayout } from '@/components/AdminLayout';
import { trpc } from '@/lib/trpc';

export default function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      window.location.href = '/admin/login';
      return;
    }
    setIsAdmin(true);
  }, []);

  // Fetch live data from database
  const { data: admissions = [], isLoading: admissionsLoading } = trpc.admin.getAdmissions.useQuery();
  const { data: scholarships = [], isLoading: scholarshipsLoading } = trpc.admin.getScholarships.useQuery();
  const { data: enquiries = [], isLoading: enquiriesLoading } = trpc.admin.getEnquiries.useQuery();
  const { data: contacts = [], isLoading: contactsLoading } = trpc.admin.getContacts.useQuery();

  if (!isAdmin) {
    return <div>Loading...</div>;
  }

  const isLoading = admissionsLoading || scholarshipsLoading || enquiriesLoading || contactsLoading;

  const stats = [
    { label: 'Total Admissions', value: admissions.length.toString(), icon: Users, color: 'bg-blue-500' },
    { label: 'Scholarship Registrations', value: scholarships.length.toString(), icon: Award, color: 'bg-green-500' },
    { label: 'Enquiries', value: enquiries.length.toString(), icon: MessageSquare, color: 'bg-purple-500' },
    { label: 'Contact Forms', value: contacts.length.toString(), icon: Phone, color: 'bg-orange-500' },
  ];

  // Generate mock trend data based on actual data
  const admissionData = [
    { month: 'Jan', admissions: 0, enquiries: 0 },
    { month: 'Feb', admissions: 0, enquiries: 0 },
    { month: 'Mar', admissions: 0, enquiries: 0 },
    { month: 'Apr', admissions: 0, enquiries: 0 },
    { month: 'May', admissions: 0, enquiries: 0 },
    { month: 'Jun', admissions: 0, enquiries: 0 },
  ];

  // Calculate course distribution from actual admissions data
  const courseDistribution: { [key: string]: number } = {
    'Navodaya': 0,
    'Sainik': 0,
    'Military': 0,
    'Sports': 0,
    'Regular': 0,
  };

  admissions.forEach((admission: any) => {
    const courseClass = admission.class || 'Regular';
    if (courseClass.includes('Navodaya')) courseDistribution['Navodaya']++;
    else if (courseClass.includes('Sainik')) courseDistribution['Sainik']++;
    else if (courseClass.includes('Military')) courseDistribution['Military']++;
    else if (courseClass.includes('Sports')) courseDistribution['Sports']++;
    else courseDistribution['Regular']++;
  });

  const courseData = Object.entries(courseDistribution).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ['#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#3b82f6'];

  if (isLoading) {
    return (
      <AdminLayout title="Dashboard">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="animate-spin text-purple-600" size={32} />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} className="text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Admissions & Enquiries Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={admissionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="admissions" stroke="#8b5cf6" strokeWidth={2} />
                <Line type="monotone" dataKey="enquiries" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Course Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {courseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Monthly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={admissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="admissions" fill="#8b5cf6" />
              <Bar dataKey="enquiries" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AdminLayout>
  );
}
