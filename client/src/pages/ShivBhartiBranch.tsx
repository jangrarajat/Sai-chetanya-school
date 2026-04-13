import { Award, BookOpen, CheckCircle, Mail, MapPin, Phone, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ShivBhartiBranch() {
  const facilities = [
    { icon: BookOpen, title: 'Digital Learning', description: 'Online and offline integrated learning platform' },
    { icon: Zap, title: 'Tech Infrastructure', description: 'Latest technology and digital tools' },
    { icon: Users, title: 'Mentorship Program', description: 'One-on-one guidance from experienced mentors' },
    { icon: Award, title: 'Excellence Track Record', description: 'Proven success in academics and sports' }
  ];

  const programs = [
    { name: 'Navodaya School Preparation', description: 'Intensive coaching and preparation' },
    { name: 'Sainik School Preparation', description: 'Specialized military school entrance training' },
    { name: 'Military School Preparation', description: 'Comprehensive military school coaching' },
    { name: 'Regular Classes (UKG to 10th)', description: 'CBSE curriculum with modern teaching methods' },
    { name: 'Sports Training', description: 'Multi-sport development programs' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Shiv Bharti Senior Secondary School</h1>
            <p className="text-xl text-indigo-100">
              Nurturing Excellence Through Innovation and Tradition
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600 flex-shrink-0" size={32} />
              <div>
                <p className="text-sm text-gray-600 font-semibold">Location</p>
                <p className="text-lg font-bold text-gray-800">456 Heritage Road, North District</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600 flex-shrink-0" size={32} />
              <div>
                <p className="text-sm text-gray-600 font-semibold">Phone</p>
                <p className="text-lg font-bold text-gray-800">+91 9876543211</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600 flex-shrink-0" size={32} />
              <div>
                <p className="text-sm text-gray-600 font-semibold">Email</p>
                <p className="text-lg font-bold text-gray-800">shivbharti@school.edu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">About Shiv Bharti Senior Secondary School</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Shiv Bharti Senior Secondary School is a premier educational institution dedicated to blending traditional values with modern education. Our school has established itself as a leader in academic excellence and character development over the years.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                We pride ourselves on our holistic approach to education, combining rigorous academics with comprehensive skill development, sports training, and cultural enrichment. Our faculty comprises highly qualified professionals committed to bringing out the best in every student.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                With a strong emphasis on values and ethics, we prepare students not just for exams, but for life. Our alumni have excelled in various fields, contributing significantly to society and achieving remarkable success in their respective domains.
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
                <Card key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg w-fit">
                    <Icon className="text-indigo-600" size={28} />
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
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Programs Offered</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programs.map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-l-4 border-indigo-600">
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
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">800+</div>
              <p className="text-gray-700 font-semibold">Students Enrolled</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">97%</div>
              <p className="text-gray-700 font-semibold">Success Rate</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">45+</div>
              <p className="text-gray-700 font-semibold">Faculty Members</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">15+</div>
              <p className="text-gray-700 font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">State-of-the-Art Infrastructure</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-indigo-600 mb-6">Academic Excellence</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Modern classrooms with interactive boards and technology</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Well-equipped science laboratories with latest equipment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Computer center with high-speed internet and modern software</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Digital library with e-books and online resources</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Dedicated coaching centers for competitive exams</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-purple-600 mb-6">Holistic Development</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Expansive sports grounds and indoor sports complex</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Professional coaching in multiple sports disciplines</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Auditorium for cultural programs and events</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Art and music studios for creative development</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
                  <span className="text-gray-700">Residential hostel facilities for outstation students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Shiv Bharti?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Values-Based Education</h3>
              <p className="text-gray-700 leading-relaxed">
                We combine academic excellence with strong values and ethics, preparing students to be responsible citizens and leaders.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Experienced Faculty</h3>
              <p className="text-gray-700 leading-relaxed">
                Our teachers are not just educators but mentors who guide students through their academic and personal journey.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Proven Track Record</h3>
              <p className="text-gray-700 leading-relaxed">
                With 97%+ success rate and thousands of successful alumni, we have consistently delivered excellence for over 15 years.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Join Shiv Bharti Senior Secondary School</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Experience a blend of tradition and innovation in education. Be part of our growing community of achievers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
