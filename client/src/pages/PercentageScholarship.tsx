import { Card } from '@/components/ui/card';
import { Award, Check, CheckCircle, TrendingUp } from 'lucide-react';

export default function PercentageScholarship() {
  const scholarshipTiers = [
    {
      percentage: '90% - 100%',
      scholarship: '100% Fee Waiver',
      description: 'Full scholarship covering all fees',
      benefits: ['Complete fee waiver', 'Monthly stipend ₹5,000', 'Hostel accommodation free', 'Laptop/Tablet provided', 'Mentorship program'],
      color: 'from-yellow-500 to-yellow-600',
      icon: '🏆',
    },
    {
      percentage: '80% - 89%',
      scholarship: '75% Scholarship',
      description: 'Three-fourth scholarship with benefits',
      benefits: ['75% fee waiver', 'Monthly stipend ₹3,000', 'Hostel accommodation 50% off', 'Books and materials provided', 'Coaching support'],
      color: 'from-orange-500 to-orange-600',
      icon: '⭐',
    },
    {
      percentage: '70% - 79%',
      scholarship: '50% Scholarship',
      description: 'Half scholarship with support',
      benefits: ['50% fee waiver', 'Monthly stipend ₹1,500', 'Hostel accommodation 25% off', 'Library access premium', 'Counseling support'],
      color: 'from-red-500 to-red-600',
      icon: '✨',
    },
    {
      percentage: '60% - 69%',
      scholarship: '25% Scholarship',
      description: 'Partial scholarship assistance',
      benefits: ['25% fee waiver', 'Priority admission', 'Flexible payment options', 'Exam preparation support', 'Career guidance'],
      color: 'from-pink-500 to-pink-600',
      icon: '🎯',
    },
  ];

  const eligibilityCriteria = [
    { title: 'Academic Excellence', description: 'Minimum 60% marks in previous examination' },
    { title: 'Financial Need', description: 'Annual family income below ₹10 lakhs' },
    { title: 'Character Certificate', description: 'No disciplinary action in previous school' },
    { title: 'Entrance Exam', description: 'Performance in school entrance examination' },
    { title: 'Interview', description: 'Personal interview with selection committee' },
    { title: 'Documentation', description: 'Complete submission of required documents' },
  ];

  const applicationProcess = [
    { step: 1, title: 'Registration', description: 'Fill online scholarship registration form' },
    { step: 2, title: 'Document Submission', description: 'Upload academic records and income proof' },
    { step: 3, title: 'Entrance Exam', description: 'Appear for school entrance examination' },
    { step: 4, title: 'Merit List', description: 'Merit list released based on exam performance' },
    { step: 5, title: 'Interview', description: 'Selected candidates called for personal interview' },
    { step: 6, title: 'Final Selection', description: 'Final scholarship awards announced' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="mx-auto mb-6" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Percentage-Based Scholarship</h1>
            <p className="text-xl text-purple-100">
              Merit-based scholarships for deserving students with excellent academic performance
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Tiers */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Scholarship Tiers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {scholarshipTiers.map((tier, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition">
                <div className={`bg-gradient-to-r ${tier.color} text-white p-8`}>
                  <div className="text-5xl mb-4">{tier.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{tier.percentage}</h3>
                  <p className="text-lg font-semibold">{tier.scholarship}</p>
                  <p className="text-sm opacity-90 mt-2">{tier.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-4">Benefits Include:</h4>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-3">
                        <Check className="text-green-600 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-purple-600 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{criteria.title}</h3>
                <p className="text-gray-600">{criteria.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {applicationProcess.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {idx < applicationProcess.length - 1 && (
                    <div className="absolute left-6 top-20 h-12 w-1 bg-purple-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-purple-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Important Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Key Dates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Application Opens:</strong> January 15, 2026</li>
                  <li><strong>Application Closes:</strong> March 31, 2026</li>
                  <li><strong>Entrance Exam:</strong> April 20, 2026</li>
                  <li><strong>Merit List:</strong> May 10, 2026</li>
                  <li><strong>Interviews:</strong> May 15-25, 2026</li>
                  <li><strong>Final Results:</strong> June 5, 2026</li>
                </ul>
              </Card>

              <Card className="bg-white p-6 border-l-4 border-indigo-600">
                <h3 className="text-xl font-bold text-indigo-600 mb-4">Required Documents</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Previous academic records</li>
                  <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Income certificate</li>
                  <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Aadhar/ID proof</li>
                  <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Passport size photos</li>
                  <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Character certificate</li>
                  <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Medical certificate</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <TrendingUp className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-8 text-purple-100">
              Don't miss this opportunity to get merit-based scholarship support for your education
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Start Application Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
