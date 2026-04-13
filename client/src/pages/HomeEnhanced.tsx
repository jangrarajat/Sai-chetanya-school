import { useState } from 'react';
import { BookOpen, ChevronDown, GraduationCap, Lightbulb, Star, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import ImageCarousel from '@/components/ImageCarousel';
import { Link } from 'wouter';

export default function HomeEnhanced() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const courses = [
    { name: 'Navodaya School Preparation', icon: '<GraduationCap size={18} className="text-purple-300" />', students: '500+', success: '95%' },
    { name: 'Sainik School Preparation', icon: '⚔️', students: '400+', success: '92%' },
    { name: 'Military School Preparation', icon: '🪖', students: '350+', success: '94%' },
    { name: 'Sports Training', icon: '⚽', students: '300+', success: '90%' },
    { name: 'Regular Classes (UKG-10th)', icon: '<BookOpen size={20} />', students: '2000+', success: '96%' },
  ];

  const testimonials = [
    {
      name: 'Aarav Kumar',
      class: 'Class 10',
      text: 'The faculty here is exceptional. They made complex concepts easy to understand. I scored 95% in my board exams!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      class: 'Navodaya Aspirant',
      text: 'Best coaching institute for Navodaya preparation. The mock tests and personalized guidance helped me crack the exam.',
      rating: 5,
    },
    {
      name: 'Rohan Singh',
      class: 'Class 8',
      text: 'Amazing teaching methods and supportive environment. I improved from 70% to 92% in just one year.',
      rating: 5,
    },
  ];

  const results = [
    { title: 'Navodaya Result 2024', selected: '145', total: '200' },
    { title: 'Military School Result 2024', selected: '89', total: '120' },
    { title: 'Sainik School Result 2024', selected: '76', total: '100' },
    { title: 'Class 10 Board Result 2024', average: '92.5%', toppers: '15' },
  ];

  const faqs = [
    {
      question: 'What is the admission process?',
      answer: 'We have a simple admission process. Students need to fill out the admission form, attend an entrance test, and an interview. Admissions are merit-based.',
    },
    {
      question: 'Do you provide hostel facilities?',
      answer: 'Yes, we provide well-maintained hostel facilities with 24/7 security, nutritious meals, and modern amenities.',
    },
    {
      question: 'What is the fee structure?',
      answer: 'Our fees are competitive and vary based on the course and class. Scholarships are available for meritorious students.',
    },
    {
      question: 'Are there any scholarship opportunities?',
      answer: 'Yes, we offer merit-based scholarships, percentage-based scholarships, and financial aid for deserving students.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Image Carousel Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our School</h2>
          <p className="text-xl">Excellence in Education</p>
        </div>
      </section>

      {/* Key to Success Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">KEY TO SUCCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <Lightbulb className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Motivation</h3>
              <p className="text-gray-600">We inspire students to achieve their dreams through personalized guidance and mentorship.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <Star className="w-16 h-16 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Inspiration</h3>
              <p className="text-gray-600">Our success stories and role models inspire students to push their limits and excel.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <Trophy className="w-16 h-16 mx-auto text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Celebration</h3>
              <p className="text-gray-600">We celebrate every achievement, big or small, to build confidence and motivation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">OUR COURSES</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive preparation programs designed to help students achieve their academic and competitive goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {courses.map((course, idx) => (
              <Link key={idx} href={`/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition cursor-pointer border border-purple-200">
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-3">{course.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>👥 {course.students} Students</p>
                    <p>✅ {course.success} Success Rate</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Achievers Say Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">WHAT ACHIEVERS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-purple-600">{testimonial.class}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outstanding Results Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">OUTSTANDING RESULTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, idx) => (
              <Link key={idx} href="/results">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border-l-4 border-purple-600">
                  <h3 className="font-bold text-gray-800 mb-4">{result.title}</h3>
                  <div className="space-y-2 text-sm">
                    {'selected' in result && (
                      <>
                        <p className="text-gray-600">Selected: <span className="font-bold text-purple-600">{(result as any).selected}/{(result as any).total}</span></p>
                        <p className="text-gray-600">Success Rate: <span className="font-bold text-green-600">{Math.round((parseInt((result as any).selected) / parseInt((result as any).total)) * 100)}%</span></p>
                      </>
                    )}
                    {'average' in result && (
                      <>
                        <p className="text-gray-600">Average: <span className="font-bold text-purple-600">{result.average}</span></p>
                        <p className="text-gray-600">Toppers: <span className="font-bold text-green-600">{result.toppers}</span></p>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">OUR FACULTY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/faculty">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-purple-200">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">School Faculty</h3>
                <p className="text-gray-600 mb-4">Highly qualified and experienced educators dedicated to excellence.</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white">View Faculty</Button>
              </div>
            </Link>
            <Link href="/faculty">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-indigo-200">
                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Hostel Staff</h3>
                <p className="text-gray-600 mb-4">Caring and professional staff ensuring student safety and comfort.</p>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white">View Staff</Button>
              </div>
            </Link>
            <Link href="/faculty">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer border border-blue-200">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Coaching Staff</h3>
                <p className="text-gray-600 mb-4">Expert coaches specializing in competitive exam preparation.</p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white">View Coaches</Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between hover:bg-purple-50 transition"
                >
                  <h3 className="font-bold text-gray-800 text-left">{faq.question}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-purple-600 transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFAQ === idx && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-purple-100 mb-8">Join thousands of successful students who have achieved their dreams with us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admission">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-purple-800 text-white hover:bg-purple-900 px-8 py-3 text-lg font-bold border-2 border-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
