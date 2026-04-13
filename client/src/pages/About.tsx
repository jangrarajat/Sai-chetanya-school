import { Award, Target, Users, BookOpen, Globe, Heart, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to highest standards of education and personal development'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Dedicated approach to achieving academic and personal goals'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building strong relationships and fostering collaborative learning'
    },
    {
      icon: BookOpen,
      title: 'Knowledge',
      description: 'Continuous learning and intellectual growth for all'
    },
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'Preparing students for success in a global context'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Nurturing holistic development and well-being of every student'
    }
  ];

  const achievements = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '5000+', label: 'Alumni Success Stories' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Faculty Members' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our School</h1>
            <p className="text-xl text-purple-100">
              A legacy of excellence, innovation, and commitment to student success
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200">
              <h3 className="text-3xl font-bold text-purple-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide world-class education that nurtures intellectual growth, character development, and holistic well-being. We are committed to empowering students with knowledge, skills, and values necessary to excel in their academic pursuits and become responsible global citizens.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-200">
              <h3 className="text-3xl font-bold text-indigo-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a leading educational institution recognized for academic excellence, innovative teaching methods, and the development of well-rounded individuals who contribute positively to society. We envision a school where every student discovers their potential and achieves their dreams.
              </p>
            </div>
          </div>

          {/* History */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-8 md:p-12 rounded-xl">
            <h3 className="text-3xl font-bold mb-6">Our History</h3>
            <p className="text-lg leading-relaxed mb-4">
              Founded in 2010, Excellence Academy has established itself as a beacon of quality education in the region. What began as a small institution with a handful of students has grown into a thriving educational community with over 5,000 alumni who have gone on to achieve remarkable success in various fields.
            </p>
            <p className="text-lg leading-relaxed">
              Over the years, we have maintained our commitment to academic excellence while continuously evolving our curriculum and teaching methodologies to meet the changing needs of students. Our faculty comprises highly qualified educators who are passionate about making a difference in students' lives.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-2">
                  {achievement.number}
                </div>
                <p className="text-gray-600 font-semibold text-lg">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These values guide everything we do and shape the character of our institution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition">
                  <div className="mb-4 p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit">
                    <Icon className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">World-Class Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Academic Infrastructure</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Modern classrooms with smart boards and interactive learning tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Well-equipped science and computer laboratories</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive library with extensive collection of books and digital resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>Dedicated coaching centers for competitive exams</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Sports & Recreation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Professional sports facilities and training grounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Indoor and outdoor sports courts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Gymnasium with modern equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Hostel facilities for residential students</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Be part of a legacy of excellence and success. Discover how our school can help you achieve your dreams.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
