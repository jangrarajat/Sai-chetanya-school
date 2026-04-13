import { Card } from '@/components/ui/card';
import { useLocation } from 'wouter';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';

export default function Results() {
  const [, navigate] = useLocation();

  const resultCategories = [
    {
      id: 'navodaya',
      title: 'Navodaya Result',
      description: 'Navodaya School entrance examination results',
      icon: Trophy,
      color: 'from-blue-600 to-blue-400',
      path: '/results/navodaya'
    },
    {
      id: 'military',
      title: 'Military School Result',
      description: 'Military School entrance examination results',
      icon: Award,
      color: 'from-red-600 to-red-400',
      path: '/results/military'
    },
    {
      id: 'sainik',
      title: 'Sainik School Result',
      description: 'Sainik School entrance examination results',
      icon: Users,
      color: 'from-green-600 to-green-400',
      path: '/results/sainik'
    },
    {
      id: 'class5',
      title: 'Class 5 Board Result',
      description: 'Class 5 board examination results',
      icon: BookOpen,
      color: 'from-purple-600 to-purple-400',
      path: '/results/class-5'
    },
    {
      id: 'class8',
      title: 'Class 8 Board Result',
      description: 'Class 8 board examination results',
      icon: BookOpen,
      color: 'from-orange-600 to-orange-400',
      path: '/results/class-8'
    },
    {
      id: 'class10',
      title: 'Class 10 Board Result',
      description: 'Class 10 board examination results (CBSE)',
      icon: Award,
      color: 'from-pink-600 to-pink-400',
      path: '/results/class-10'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Results</h1>
            <p className="text-xl text-indigo-100">
              View examination results for all our programs and board exams
            </p>
          </div>
        </div>
      </section>

      {/* Results Categories */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16 text-center">Select Result Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resultCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className="bg-white rounded-xl border border-gray-200 hover:shadow-xl transition cursor-pointer overflow-hidden"
                  onClick={() => navigate(category.path)}
                >
                  {/* Color Header */}
                  <div className={`bg-gradient-to-r ${category.color} h-32 flex items-center justify-center`}>
                    <Icon className="text-white" size={48} />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-6">{category.description}</p>
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition">
                      View Results
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Check Your Results</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Select Category</h3>
                    <p className="text-gray-700">Choose the examination result category you want to view from the options above.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Enter Roll Number</h3>
                    <p className="text-gray-700">Enter your roll number or name to search for your results in the database.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-indigo-200">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">View & Download</h3>
                    <p className="text-gray-700">View your detailed results and download your result card for records.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-yellow-50 border-l-4 border-yellow-600 p-8 rounded">
            <h3 className="text-2xl font-bold text-yellow-800 mb-4">Important Notice</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Results are published within 15-20 days after the examination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Please keep your roll number handy for quick access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>For any discrepancies, contact the administration office</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>Result cards can be downloaded and printed for records</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
