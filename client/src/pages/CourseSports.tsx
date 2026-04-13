import { Award, BookOpen, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CourseSports() {
  const sports = [
    'Cricket - Batting, bowling, and fielding techniques',
    'Football - Ball control, tactics, and team play',
    'Badminton - Footwork, strokes, and competitive play',
    'Volleyball - Serving, spiking, and defensive skills',
    'Basketball - Dribbling, shooting, and court awareness',
    'Athletics - Running, jumping, and throwing events'
  ];

  const features = [
    { icon: Users, title: 'Professional Coaches', description: 'Certified sports professionals' },
    { icon: BookOpen, title: 'Modern Facilities', description: 'State-of-the-art training grounds' },
    { icon: Clock, title: 'Flexible Timings', description: 'Morning and evening batches' },
    { icon: Award, title: 'Tournament Participation', description: 'Regular competitions and events' }
  ];

  const feeStructure = [
    { duration: 'Monthly', amount: '₹3,000', description: 'Single sport' },
    { duration: '3 Months', amount: '₹8,000', description: 'Multi-sport package' },
    { duration: '1 Year', amount: '₹28,000', description: 'Premium membership' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sports Training</h1>
            <p className="text-xl text-yellow-100 mb-8">
              Professional coaching for multiple sports disciplines
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Our Sports Training program offers professional coaching in multiple sports disciplines. Whether you're a beginner or an aspiring athlete, our experienced coaches help you develop skills, build fitness, and achieve your sporting goals.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We provide comprehensive training covering technique, tactics, physical fitness, and mental preparation. Our facilities are equipped with modern equipment and our coaches are certified professionals with national and international experience.
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
                <Card key={idx} className="bg-white p-6 rounded-xl border border-yellow-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-yellow-100 rounded-lg w-fit">
                    <Icon className="text-yellow-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sports Offered */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Sports Offered</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {sports.map((sport, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                  <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 font-medium">{sport}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Details */}
      <section className="py-20 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Training Details</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-8 rounded-xl border border-yellow-200">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">Age Groups</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">Under 10 - Beginners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">10-14 - Intermediate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">14+ - Advanced</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">Adults - All levels</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-yellow-200">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">Training Schedule</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">Morning: 6:00 AM - 8:00 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">Evening: 4:00 PM - 6:00 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">Weekend: 9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-gray-700">Flexible batch options available</span>
                </li>
              </ul>
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
              <Card key={idx} className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border border-yellow-200 text-center hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">{fee.duration}</h3>
                <div className="text-4xl font-bold text-gray-800 mb-4">{fee.amount}</div>
                <p className="text-gray-600">{fee.description}</p>
              </Card>
            ))}
          </div>
          <div className="max-w-2xl mx-auto mt-12 bg-yellow-100 border-l-4 border-yellow-600 p-6 rounded">
            <p className="text-gray-700 font-semibold">
              <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Includes: Professional coaching, access to facilities, training materials, and certificate
            </p>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Achievement</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <p className="text-yellow-100">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-yellow-100">State Level Athletes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-yellow-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-yellow-100">Professional Coaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Training Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-600 mb-6">Sports Infrastructure</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Outdoor cricket ground</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Indoor sports complex</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Gymnasium with modern equipment</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Professional-grade sports equipment</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">Support Services</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Sports nutrition guidance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Injury prevention training</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Tournament participation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Performance tracking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Become a Champion?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Develop your athletic skills with professional coaches. Start your sports journey today!
          </p>
          <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Enroll Today
          </button>
        </div>
      </section>
    </div>
  );
}
