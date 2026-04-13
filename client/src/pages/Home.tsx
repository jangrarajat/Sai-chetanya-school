import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Award, BookOpen, ChevronLeft, ChevronRight, GraduationCap, HelpCircle, Star, Trophy, Users } from 'lucide-react';
import { Link } from 'wouter';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [meritScrollPosition, setMeritScrollPosition] = useState(0);

  const carouselImages = [
    {
      id: 1,
      url: 'https://res.cloudinary.com/dobxire9c/image/upload/q_auto/f_auto/v1776091111/s2_hrm8co.png',
      title: 'World-Class Campus',
      description: 'State-of-the-art facilities designed for holistic development'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/dobxire9c/image/upload/q_auto/f_auto/v1776091111/s5_dwukog.jpg',
      title: 'Expert Faculty',
      description: 'Highly qualified educators committed to excellence'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/dobxire9c/image/upload/q_auto/f_auto/v1776091111/s1.jpg_jotrcf.jpg',
      title: 'Modern Learning',
      description: 'Innovative teaching methods and advanced technology'
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/dobxire9c/image/upload/q_auto/f_auto/v1776091111/s3_iyepoj.png',
      title: 'Sports Excellence',
      description: 'Comprehensive sports training and athletic development'
    },
  
  ];

  const highlights = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Top-ranked institution with consistent academic excellence and achievements'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced educators dedicated to student success'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Courses',
      description: 'Specialized preparation for Navodaya, Sainik, Military, and regular classes'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: '95%+ success rate with 500+ successful selections in competitive exams'
    }
  ];

  const reviews = [
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      text: 'Excellent education quality and dedicated faculty. My son improved significantly in studies.',
      rating: 5,
      image: 'https://via.placeholder.com/80'
    },
    {
      name: 'Priya Sharma',
      role: 'Student',
      text: 'The teachers are very supportive and the learning environment is amazing!',
      rating: 5,
      image: 'https://via.placeholder.com/80'
    },
    {
      name: 'Arjun Singh',
      role: 'Parent',
      text: 'Best school in the city. Highly recommended for competitive exam preparation.',
      rating: 5,
      image: 'https://via.placeholder.com/80'
    },
    {
      name: 'Neha Patel',
      role: 'Student',
      text: 'Great infrastructure and experienced teachers. Very happy with my progress.',
      rating: 5,
      image: 'https://via.placeholder.com/80'
    },
  ];

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'Students need to pass an entrance exam and submit required documents. Merit-based scholarships are available.'
    },
    {
      question: 'What courses are offered?',
      answer: 'We offer Navodaya, Sainik, Military, Sports Training, and Regular Classes (UKG to 10th).'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fees vary by course. Please contact our admission office for detailed fee information.'
    },
    {
      question: 'Are scholarships available?',
      answer: 'Yes, we offer merit-based and percentage-based scholarships. Check our scholarship page for details.'
    },
    {
      question: 'What are the school timings?',
      answer: 'School operates from 8:00 AM to 4:00 PM, Monday to Friday.'
    },
  ];

  const whyChooseUs = [
    {
      icon: '🏆',
      title: 'Excellence in Education',
      description: 'Proven track record with 95%+ success rate in competitive exams'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers dedicated to student success'
    },
    {
      icon: '🏫',
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities including labs, library, and sports grounds'
    },
    {
      icon: '💡',
      title: 'Holistic Development',
      description: 'Focus on academics, sports, and personality development'
    },
    {
      icon: <GraduationCap size={18} className="text-purple-300" />,
      title: 'Competitive Exam Prep',
      description: 'Specialized coaching for Navodaya, Sainik, and Military schools'
    },
    {
      icon: '🤝',
      title: 'Personalized Attention',
      description: 'Small class sizes ensuring individual attention to every student'
    },
  ];

  const meritStudents = [
    { name: 'Aarav Kumar', achievement: 'Navodaya Selection', image: 'https://via.placeholder.com/150' },
    { name: 'Priya Sharma', achievement: 'Sainik School Selection', image: 'https://via.placeholder.com/150' },
    { name: 'Rohan Singh', achievement: 'Military School Selection', image: 'https://via.placeholder.com/150' },
    { name: 'Neha Patel', achievement: 'Class 10 Topper', image: 'https://via.placeholder.com/150' },
    { name: 'Vikram Reddy', achievement: 'Sports Excellence', image: 'https://via.placeholder.com/150' },
    { name: 'Anjali Verma', achievement: 'National Scholarship', image: 'https://via.placeholder.com/150' },
    { name: 'Karan Patel', achievement: 'Science Olympiad', image: 'https://via.placeholder.com/150' },
    { name: 'Disha Singh', achievement: 'Mathematics Champion', image: 'https://via.placeholder.com/150' },
    { name: 'Arjun Kumar', achievement: 'Debate Champion', image: 'https://via.placeholder.com/150' },
    { name: 'Pooja Sharma', achievement: 'Cultural Excellence', image: 'https://via.placeholder.com/150' },
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-0">
      {/* Image Carousel */}
      <ImageCarousel images={carouselImages} />

      {/* Highlights Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition">
                  <Icon className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
            <p className="text-lg text-gray-600">Comprehensive preparation programs for success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link href="/courses/navodaya">
              <Card className="p-6 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4"><GraduationCap size={18} className="text-purple-300" /></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Navodaya</h3>
                <p className="text-sm text-gray-600">Specialized preparation for Navodaya entrance exam</p>
              </Card>
            </Link>
            <Link href="/courses/sainik">
              <Card className="p-6 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sainik School</h3>
                <p className="text-sm text-gray-600">Expert coaching for Sainik School selection</p>
              </Card>
            </Link>
            <Link href="/courses/military">
              <Card className="p-6 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4">🎖️</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Military School</h3>
                <p className="text-sm text-gray-600">Comprehensive military school preparation</p>
              </Card>
            </Link>
            <Link href="/courses/sports">
              <Card className="p-6 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4">⚽</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sports Training</h3>
                <p className="text-sm text-gray-600">Professional sports coaching and development</p>
              </Card>
            </Link>
            <Link href="/courses/regular">
              <Card className="p-6 hover:shadow-lg transition cursor-pointer h-full">
                <div className="text-4xl mb-4"><BookOpen size={20} /></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Regular Classes</h3>
                <p className="text-sm text-gray-600">UKG to 10th standard regular curriculum</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* What Achievers Say - Reviews Carousel */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Achievers Say</h2>
            <p className="text-lg text-gray-600">Success stories from our students and parents</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={reviews[currentReviewIndex].image}
                  alt={reviews[currentReviewIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{reviews[currentReviewIndex].name}</h3>
                  <p className="text-gray-600">{reviews[currentReviewIndex].role}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg italic">"{reviews[currentReviewIndex].text}"</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentReviewIndex ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outstanding Results */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Outstanding Results</h2>
            <p className="text-lg opacity-90">Proven excellence in competitive exams</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <p className="text-lg">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Selections</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">20+</div>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Rise Academy */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Rise Academy?</h2>
            <p className="text-lg text-gray-600">Excellence in education and holistic development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Merit Students - Horizontal Scroll */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Top Merit Students</h2>
            <p className="text-lg text-gray-600">Celebrating our achievers</p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-6 min-w-min px-4">
                {meritStudents.map((student, index) => (
                  <div key={index} className="flex-shrink-0 w-40 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-gray-800 mb-2 text-sm">{student.name}</h3>
                      <p className="text-xs text-purple-600 font-semibold">{student.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY TO SUCCESS Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">KEY TO SUCCESS</h2>
            <p className="text-lg opacity-90">Our formula for student excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-2xl font-bold mb-3">Motivation</h3>
              <p className="text-lg">We inspire and motivate students to achieve their dreams and reach their full potential.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Inspiration</h3>
              <p className="text-lg">Our dedicated faculty provides guidance and inspiration to help students excel in all areas.</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold mb-3">Celebration</h3>
              <p className="text-lg">We celebrate every achievement, big or small, to build confidence and encourage growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Find answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={24} className="text-purple-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-gray-800 text-left">{faq.question}</h3>
                  </div>
                  <span className={`text-2xl transition ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
