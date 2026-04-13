import { Award, BookOpen, CheckCircle, Clock, DollarSign, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function CourseRegular() {
  const classes = [
    { level: 'UKG - KG', subjects: 'Play-based learning, basic skills' },
    { level: 'Class 1-2', subjects: 'English, Mathematics, EVS, Art' },
    { level: 'Class 3-5', subjects: 'English, Hindi, Mathematics, Science, Social Studies' },
    { level: 'Class 6-8', subjects: 'All core subjects with advanced concepts' },
    { level: 'Class 9-10', subjects: 'CBSE curriculum with board exam preparation' }
  ];

  const features = [
    { icon: Users, title: 'Small Class Size', description: 'Personalized attention for each student' },
    { icon: BookOpen, title: 'Modern Curriculum', description: 'CBSE aligned with skill development' },
    { icon: Clock, title: 'Flexible Hours', description: 'Morning and afternoon sessions' },
    { icon: Award, title: 'Holistic Development', description: 'Sports, arts, and academics' }
  ];

  const feeStructure = [
    { class: 'UKG - KG', amount: '₹2,500/month', description: 'Play-based learning' },
    { class: 'Class 1-2', amount: '₹3,000/month', description: 'Foundation building' },
    { class: 'Class 3-5', amount: '₹3,500/month', description: 'Core academics' },
    { class: 'Class 6-8', amount: '₹4,000/month', description: 'Advanced concepts' },
    { class: 'Class 9-10', amount: '₹5,000/month', description: 'Board preparation' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Regular Classes</h1>
            <p className="text-xl text-teal-100 mb-8">
              Quality education from UKG to 10th with holistic development
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Download Prospectus
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
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-200">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Our Regular Classes program provides comprehensive education from UKG to 10th following the CBSE curriculum. We combine rigorous academics with sports, arts, and character development to create well-rounded individuals.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                With experienced faculty, modern teaching methods, and state-of-the-art facilities, we ensure every student receives quality education and personal attention. Our focus is on developing critical thinking, creativity, and confidence alongside academic excellence.
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
                <Card key={idx} className="bg-white p-6 rounded-xl border border-teal-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-teal-100 rounded-lg w-fit">
                    <Icon className="text-teal-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Classes Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Classes & Curriculum</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {classes.map((cls, idx) => (
              <div key={idx} className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border border-teal-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-600 mb-2">{cls.level}</h3>
                    <p className="text-gray-700">{cls.subjects}</p>
                  </div>
                  <CheckCircle className="text-teal-600 flex-shrink-0" size={28} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Curriculum Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-8 rounded-xl border border-teal-200">
              <h3 className="text-2xl font-bold text-teal-600 mb-6">Academic Focus</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">CBSE aligned curriculum</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Conceptual learning approach</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Regular assessments and feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Board exam preparation (Class 10)</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-teal-200">
              <h3 className="text-2xl font-bold text-cyan-600 mb-6">Holistic Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Sports and physical education</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Arts, music, and cultural activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Life skills and values education</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Personality development programs</span>
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
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-teal-100">
                  <th className="px-6 py-4 text-left font-bold text-teal-600">Class</th>
                  <th className="px-6 py-4 text-left font-bold text-teal-600">Monthly Fee</th>
                  <th className="px-6 py-4 text-left font-bold text-teal-600">Description</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-teal-50'}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{fee.class}</td>
                    <td className="px-6 py-4 font-bold text-teal-600 text-lg">{fee.amount}</td>
                    <td className="px-6 py-4 text-gray-700">{fee.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-2xl mx-auto mt-12 bg-teal-100 border-l-4 border-teal-600 p-6 rounded">
            <p className="text-gray-700 font-semibold mb-2">
              <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Fees include: Tuition, study materials, sports, arts, and extracurricular activities
            </p>
            <p className="text-gray-700 text-sm">
              Annual fees can be paid in quarterly installments. Scholarships available for meritorious and economically weaker students.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Details */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Admission Process</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white p-8 rounded-xl border border-teal-200">
              <h3 className="text-2xl font-bold text-teal-600 mb-6">Eligibility</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">UKG: Age 3-4 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">KG: Age 4-5 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Class 1+: Previous class passed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">•</span>
                  <span className="text-gray-700">Transfer students: Eligible</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-teal-200">
              <h3 className="text-2xl font-bold text-teal-600 mb-6">Admission Steps</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">1.</span>
                  <span className="text-gray-700">Fill admission form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">2.</span>
                  <span className="text-gray-700">Entrance test (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">3.</span>
                  <span className="text-gray-700">Parent-teacher interaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold">4.</span>
                  <span className="text-gray-700">Admission confirmation</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Statistics */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Achievement</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2000+</div>
              <p className="text-teal-100">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-teal-100">Board Pass Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-teal-100">Faculty Members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <p className="text-teal-100">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">School Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-teal-600 mb-6">Academic Facilities</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Well-equipped classrooms</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Science and computer labs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Digital library</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Play area for younger classes</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-cyan-600 mb-6">Co-curricular</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Sports ground and gymnasium</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Music and art studios</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Auditorium for events</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Cafeteria with nutritious meals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Enroll Your Child?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Give your child the best education with our comprehensive program. Limited seats available!
          </p>
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}
