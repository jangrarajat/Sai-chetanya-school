import { Award, BookOpen, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CourseMilitary() {
  const curriculum = [
    'Mathematics - Advanced concepts and problem-solving',
    'English - Comprehension, writing, and communication',
    'Science - Physics, Chemistry, and Biology in depth',
    'Social Studies - History, Geography, and civics',
    'Military Knowledge - Basic military concepts',
    'Physical Training - Fitness and endurance'
  ];

  const features = [
    { icon: Users, title: 'Military Mentors', description: 'Guidance from military professionals' },
    { icon: BookOpen, title: 'Advanced Curriculum', description: 'Military school specific content' },
    { icon: Clock, title: 'Rigorous Training', description: 'Intensive preparation program' },
    { icon: Award, title: 'High Success Rate', description: '88%+ selection rate' }
  ];

  const feeStructure = [
    { duration: '5 Months', amount: '₹20,000', description: 'Accelerated program' },
    { duration: '10 Months', amount: '₹35,000', description: 'Standard program' },
    { duration: '1.5 Years', amount: '₹55,000', description: 'Extended program' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Military School Preparation</h1>
            <p className="text-xl text-red-100 mb-8">
              Expert guidance for Military School entrance examination
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Our Military School Preparation program is designed for students aiming to join India's premier military schools. With an 88%+ selection rate, our program combines rigorous academics with military discipline and physical excellence.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We provide comprehensive training covering all entrance exam subjects, military knowledge, physical fitness standards, and personality development. Our faculty includes retired military officers and experienced educators who understand military school requirements.
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
                <Card key={idx} className="bg-white p-6 rounded-xl border border-red-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-red-100 rounded-lg w-fit">
                    <Icon className="text-red-600" size={28} />
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
                <div key={idx} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                  <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Details */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Admission Details</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Class 6 passed students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Age: 10-12 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Excellent physical fitness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Indian citizens only</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-red-200">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Admission Process</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">1.</span>
                  <span className="text-gray-700">Complete admission form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">2.</span>
                  <span className="text-gray-700">Physical fitness assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">3.</span>
                  <span className="text-gray-700">Pay program fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">4.</span>
                  <span className="text-gray-700">Commence intensive training</span>
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
              <Card key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200 text-center hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-red-600 mb-4">{fee.duration}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-4">{fee.amount}</div>
                <p className="text-gray-600">{fee.description}</p>
              </Card>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-12 bg-red-100 border-l-4 border-red-600 p-6 rounded">
            <p className="text-gray-700 font-semibold">
              <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Includes: Study materials, military training, physical fitness program, mock tests, interview prep, and certificate
            </p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Success</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">88%+</div>
              <p className="text-red-100">Selection Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">700+</div>
              <p className="text-red-100">Students Selected</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">18+</div>
              <p className="text-red-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-red-100">Expert Faculty</p>
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
              <h3 className="text-2xl font-bold text-red-600 mb-6">Academic Excellence</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Advanced study materials</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Regular mock tests</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Personalized coaching</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Online and offline classes</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-600 mb-6">Military Training</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Physical fitness training</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Military ethos and discipline</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Leadership development</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Interview and SSB preparation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Serve the Nation?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Build a strong foundation for a military career. Join our elite program today!
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Enroll Today
          </button>
        </div>
      </section>
    </div>
  );
}
