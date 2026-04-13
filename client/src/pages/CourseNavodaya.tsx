import { Award, BookOpen, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CourseNavodaya() {
  const curriculum = [
    'Mathematics - Advanced problem-solving and reasoning',
    'English - Comprehension, grammar, and communication skills',
    'Science - Physics, Chemistry, and Biology fundamentals',
    'Social Studies - History, Geography, and Civics',
    'Mental Ability - Logical reasoning and analytical skills',
    'General Knowledge - Current affairs and general awareness'
  ];

  const features = [
    { icon: Users, title: 'Expert Mentors', description: 'Experienced faculty with proven track record' },
    { icon: BookOpen, title: 'Comprehensive Material', description: 'Updated study materials and resources' },
    { icon: Clock, title: 'Flexible Schedule', description: 'Classes at convenient timings' },
    { icon: Award, title: 'Mock Tests', description: 'Regular assessments and practice tests' }
  ];

  const feeStructure = [
    { duration: '3 Months', amount: '₹15,000', description: 'Intensive preparation' },
    { duration: '6 Months', amount: '₹25,000', description: 'Comprehensive course' },
    { duration: '1 Year', amount: '₹40,000', description: 'Extended preparation' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Navodaya School Preparation</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive coaching for Navodaya Vidyalaya entrance examination
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Our Navodaya School Preparation program is designed to help students crack the highly competitive Navodaya Vidyalaya entrance examination. With a success rate of 85%+, our program combines rigorous academics with strategic exam preparation.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                The course covers all subjects in the entrance exam with emphasis on problem-solving, reasoning, and time management. Our experienced faculty guides students through each topic with real exam-style questions and practice tests.
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
                <Card key={idx} className="bg-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-blue-100 rounded-lg w-fit">
                    <Icon className="text-blue-600" size={28} />
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
                <div key={idx} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Details */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Admission Details</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Class 6 passed students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Age: 10-12 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">No minimum marks requirement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="text-gray-700">Indian citizens only</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Admission Process</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span className="text-gray-700">Fill admission form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span className="text-gray-700">Submit required documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span className="text-gray-700">Pay course fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span className="text-gray-700">Start classes immediately</span>
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
              <Card key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 text-center hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">{fee.duration}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-4">{fee.amount}</div>
                <p className="text-gray-600">{fee.description}</p>
              </Card>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-12 bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
            <p className="text-gray-700 font-semibold">
              <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Includes: Study materials, mock tests, doubt clearing sessions, and certificate
            </p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Success</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">85%+</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Students Selected</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <p className="text-blue-100">Expert Faculty</p>
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
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Learning Resources</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Comprehensive study materials</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Online and offline classes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Regular mock tests</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Doubt clearing sessions</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-600 mb-6">Support Services</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">One-on-one mentoring</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Performance tracking</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Career guidance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Certificate upon completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Crack Navodaya Entrance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our proven program and become part of our success story. Limited seats available!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Enroll Today
          </button>
        </div>
      </section>
    </div>
  );
}
