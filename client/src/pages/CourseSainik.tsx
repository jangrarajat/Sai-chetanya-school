import { Award, BookOpen, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CourseSainik() {
  const curriculum = [
    'Mathematics - Algebra, geometry, and advanced problem-solving',
    'English - Reading comprehension and communication',
    'Science - Physics, Chemistry, and Biology',
    'Social Studies - History, Geography, and General Knowledge',
    'Reasoning - Logical and analytical thinking',
    'Physical Fitness - Basic fitness standards'
  ];

  const features = [
    { icon: Users, title: 'Military Training', description: 'Discipline and military ethos' },
    { icon: BookOpen, title: 'Specialized Coaching', description: 'Sainik school specific curriculum' },
    { icon: Clock, title: 'Intensive Program', description: 'Focused preparation' },
    { icon: Award, title: 'Proven Success', description: '90%+ selection rate' }
  ];

  const feeStructure = [
    { duration: '4 Months', amount: '₹18,000', description: 'Standard program' },
    { duration: '8 Months', amount: '₹32,000', description: 'Comprehensive program' },
    { duration: '1 Year', amount: '₹50,000', description: 'Premium program' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sainik School Preparation</h1>
            <p className="text-xl text-green-100 mb-8">
              Specialized coaching for Sainik School entrance examination
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Course Overview</h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Our Sainik School Preparation program is specifically designed for students aspiring to join prestigious Sainik Schools across India. With a 90%+ selection rate, our program combines academic excellence with military discipline and physical training.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                The curriculum covers all entrance exam subjects along with personality development, leadership qualities, and physical fitness standards required by Sainik Schools. Our faculty includes former military personnel and experienced educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Our Program?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-green-100 rounded-lg w-fit">
                    <Icon className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Curriculum</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((subject, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Details */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Admission Details</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Class 6 passed students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Age: 10-12 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Good physical fitness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Indian citizens only</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-green-200">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Admission Process</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">1.</span>
                  <span className="text-gray-700">Fill admission form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">2.</span>
                  <span className="text-gray-700">Physical fitness test</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">3.</span>
                  <span className="text-gray-700">Pay course fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">4.</span>
                  <span className="text-gray-700">Begin training program</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Fee Structure</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {feeStructure.map((fee, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200 text-center hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-green-600 mb-4">{fee.duration}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-4">{fee.amount}</div>
                <p className="text-gray-600">{fee.description}</p>
              </Card>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-12 bg-green-100 border-l-4 border-green-600 p-6 rounded">
            <p className="text-gray-700 font-semibold">
              <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Includes: Study materials, physical training, mock tests, personality development, and certificate
            </p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Success</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">90%+</div>
              <p className="text-green-100">Selection Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">600+</div>
              <p className="text-green-100">Students Selected</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">12+</div>
              <p className="text-green-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25+</div>
              <p className="text-green-100">Expert Faculty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Course Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-600 mb-6">Academic Training</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Comprehensive study materials</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Regular mock tests</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Doubt clearing sessions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Online and offline classes</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6">Physical & Personality</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Physical fitness training</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Personality development</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Leadership training</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Interview preparation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join a Sainik School?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Develop discipline, leadership, and excellence. Start your journey with us today!
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Enroll Today
          </button>
        </div>
      </section>
    </div>
  );
}
