import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export default function Faculty() {
  const [selectedCategory, setSelectedCategory] = useState<string>('school');

  // Sample faculty data - in production, this would come from the database
  const facultyData = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      designation: 'Principal',
      category: 'school',
      qualification: 'Ph.D. in Education',
      experience: '20+ years',
      email: 'rajesh@school.edu',
      phone: '+91 98765 43210',
      image: 'https://via.placeholder.com/300x300?text=Dr.+Rajesh'
    },
    {
      id: 2,
      name: 'Mrs. Priya Singh',
      designation: 'Mathematics Teacher',
      category: 'school',
      qualification: 'M.Sc. Mathematics',
      experience: '15 years',
      email: 'priya@school.edu',
      phone: '+91 98765 43211',
      image: 'https://via.placeholder.com/300x300?text=Mrs.+Priya'
    },
    {
      id: 3,
      name: 'Mr. Amit Patel',
      designation: 'Science Teacher',
      category: 'school',
      qualification: 'M.Sc. Physics',
      experience: '12 years',
      email: 'amit@school.edu',
      phone: '+91 98765 43212',
      image: 'https://via.placeholder.com/300x300?text=Mr.+Amit'
    },
    {
      id: 4,
      name: 'Ms. Neha Sharma',
      designation: 'English Teacher',
      category: 'school',
      qualification: 'M.A. English',
      experience: '10 years',
      email: 'neha@school.edu',
      phone: '+91 98765 43213',
      image: 'https://via.placeholder.com/300x300?text=Ms.+Neha'
    },
    {
      id: 5,
      name: 'Mr. Vikram Singh',
      designation: 'Hostel Warden',
      category: 'hostel',
      qualification: 'B.A.',
      experience: '8 years',
      email: 'vikram@school.edu',
      phone: '+91 98765 43214',
      image: 'https://via.placeholder.com/300x300?text=Mr.+Vikram'
    },
    {
      id: 6,
      name: 'Mrs. Anjali Gupta',
      designation: 'Hostel Matron',
      category: 'hostel',
      qualification: 'B.Sc.',
      experience: '6 years',
      email: 'anjali@school.edu',
      phone: '+91 98765 43215',
      image: 'https://via.placeholder.com/300x300?text=Mrs.+Anjali'
    },
    {
      id: 7,
      name: 'Coach Arjun Reddy',
      designation: 'Cricket Coach',
      category: 'coaching',
      qualification: 'Sports Diploma',
      experience: '12 years',
      email: 'arjun@school.edu',
      phone: '+91 98765 43216',
      image: 'https://via.placeholder.com/300x300?text=Coach+Arjun'
    },
    {
      id: 8,
      name: 'Coach Priya Verma',
      designation: 'Badminton Coach',
      category: 'coaching',
      qualification: 'Sports Diploma',
      experience: '8 years',
      email: 'priya.verma@school.edu',
      phone: '+91 98765 43217',
      image: 'https://via.placeholder.com/300x300?text=Coach+Priya'
    },
  ];

  const categories = [
    { value: 'school', label: 'School Faculty' },
    { value: 'hostel', label: 'Hostel Staff' },
    { value: 'coaching', label: 'Coaching Staff' },
  ];

  const filteredFaculty = facultyData.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-gray-600 text-lg">Meet our experienced and dedicated team members</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.designation}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <p><span className="font-semibold">Qualification:</span> {member.qualification}</p>
                  <p><span className="font-semibold">Experience:</span> {member.experience}</p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
                  >
                    <Mail size={16} />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
                  >
                    <Phone size={16} />
                    <span className="text-sm">{member.phone}</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
