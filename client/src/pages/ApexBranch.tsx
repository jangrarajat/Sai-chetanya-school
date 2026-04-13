import { Award, BookOpen, CheckCircle, Mail, MapPin, Phone, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ApexBranch() {
  const facilities = [
    { icon: BookOpen, title: 'Modern Classrooms', description: 'Smart boards and interactive learning environment' },
    { icon: Zap, title: 'Advanced Labs', description: 'State-of-the-art science and computer laboratories' },
    { icon: Users, title: 'Expert Faculty', description: 'Highly qualified and experienced educators' },
    { icon: Award, title: 'Achievements', description: 'Consistent academic excellence and awards' }
  ];

  const programs = [
    { name: 'Navodaya School Preparation', description: 'Comprehensive coaching for entrance exams' },
    { name: 'Sainik School Preparation', description: 'Specialized training and guidance' },
    { name: 'Military School Preparation', description: 'Expert preparation for military school entrance' },
    { name: 'Regular Classes (UKG to 10th)', description: 'Quality education with modern curriculum' },
    { name: 'Sports Training', description: 'Professional coaching in various sports' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Apex Public School</h1>
            <p className="text-xl text-purple-100">
              Excellence in Education - Shaping Future Leaders
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-purple-600 flex-shrink-0" size={32} />
              <div>
                <p className="text-sm text-gray-600 font-semibold">Location</p>
                <p className="text-lg font-bold text-gray-800">123 Education Lane, City Center</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-purple-600 flex-shrink-0" size={32} />
              <div>
                <p className="text-sm text-gray-600 font-semibold">Phone</p>
                <p className="text-lg font-bold text-gray-800">+91 9876543210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-purple-600 flex-shrink-0" size={32} />
              <div>
                <p className="text-sm text-gray-600 font-semibold">Email</p>
                <p className="text-lg font-bold text-gray-800">apex@school.edu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">About Apex Public School</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Apex Public School stands as a beacon of educational excellence in the region. Established with a vision to provide world-class education, our school has consistently delivered outstanding results and nurtured generations of successful students.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                With a dedicated team of experienced educators and state-of-the-art facilities, we create an environment where students can thrive academically and personally. Our commitment to excellence is reflected in our 95%+ success rate in competitive exams and board examinations.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We believe in holistic development, combining rigorous academics with sports, arts, and character-building activities to shape well-rounded individuals prepared for success in the modern world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <Card key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit">
                    <Icon className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Programs Offered</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Students Enrolled</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-700 font-semibold">Success Rate</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">30+</div>
              <p className="text-gray-700 font-semibold">Faculty Members</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">10+</div>
              <p className="text-gray-700 font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">World-Class Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Academic Facilities</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Spacious and well-equipped classrooms with smart boards</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Advanced science laboratories with modern equipment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Computer lab with high-speed internet connectivity</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Comprehensive library with digital resources</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Dedicated coaching centers for competitive exams</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">Sports & Recreation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Outdoor sports grounds and courts</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Indoor gymnasium with modern equipment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Professional sports coaching staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Auditorium for cultural activities and events</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Cafeteria with nutritious food options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Apex Public School?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Experience excellence in education and be part of our thriving community of achievers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
