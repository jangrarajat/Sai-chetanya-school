import { Card } from '@/components/ui/card';
import { CheckCircle, Quote } from 'lucide-react';

export default function DirectorMessage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Message from the Director</h1>
            <p className="text-xl text-purple-100">
              Insights and vision for the future of education
            </p>
          </div>
        </div>
      </section>

      {/* Director Profile & Message Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Director Image & Profile */}
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  DR
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Dr. Rajesh Kumar</h2>
                <p className="text-purple-600 font-semibold text-lg mb-4">Director & Founder</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Qualification:</strong> Ph.D. in Education</p>
                  <p><strong>Experience:</strong> 25+ Years</p>
                  <p><strong>Specialization:</strong> Curriculum Development</p>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="text-purple-600 flex-shrink-0" size={40} />
                  <p className="text-2xl font-bold text-gray-800 italic">
                    Education is not just about acquiring knowledge; it's about developing the character and capabilities to make a positive difference in the world.
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Welcome to Excellence Academy. It is with great pride and satisfaction that I address you today as the Director of this esteemed institution. Over the past fifteen years, we have built a school that stands as a testament to our unwavering commitment to educational excellence and holistic development.
                </p>

                <p>
                  At Excellence Academy, we believe that education extends far beyond textbooks and examinations. We are dedicated to nurturing young minds, fostering critical thinking, and instilling values that will serve our students throughout their lives. Our mission is to create an environment where every student feels empowered to explore their potential and pursue their dreams with confidence.
                </p>

                <p>
                  Our success is measured not just by academic achievements, but by the character and integrity of our students. We take pride in the accomplishments of our alumni who have gone on to excel in various fields – be it academics, sports, arts, or professional careers. Their success is a reflection of the foundation we have provided them.
                </p>

                <p>
                  I am deeply grateful to our exceptional faculty members who work tirelessly to create engaging learning experiences. Their passion for teaching and genuine care for students' well-being form the backbone of our institution. I also extend my appreciation to our parents and guardians for entrusting us with the education and development of your children.
                </p>

                <p>
                  As we move forward, we are committed to continuous innovation and improvement. We are embracing modern teaching methodologies, incorporating technology in education, and ensuring that our curriculum remains relevant and competitive. We are also expanding our focus on skill development, environmental awareness, and social responsibility.
                </p>

                <p>
                  To our students: You are the future leaders and change-makers of our society. Make the most of every opportunity provided to you. Challenge yourself, ask questions, and never stop learning. Remember that success is not just about grades; it's about developing into well-rounded individuals who can contribute meaningfully to society.
                </p>

                <p className="text-lg font-semibold text-purple-600">
                  I invite you to join us on this journey of excellence and transformation. Together, we can create a brighter future.
                </p>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="font-bold text-lg text-gray-800">Dr. Rajesh Kumar</p>
                  <p className="text-purple-600 font-semibold">Director, Excellence Academy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">Our Key Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-8 rounded-xl border border-purple-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Digital Learning Integration</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are actively integrating technology into our classrooms to enhance the learning experience. From interactive smart boards to online learning platforms, we ensure students are prepared for the digital age.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Smart classroom technology</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Online learning management system</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Digital resource library</li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-indigo-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Skill Development Programs</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond academics, we focus on developing essential life skills and competencies that will help students succeed in their careers and personal lives.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Communication and leadership skills</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Critical thinking workshops</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Career guidance programs</li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-purple-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Environmental Awareness</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to fostering environmental consciousness among our students and implementing sustainable practices throughout our campus.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Green campus initiatives</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Environmental science projects</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Community outreach programs</li>
              </ul>
            </Card>

            <Card className="bg-white p-8 rounded-xl border border-indigo-200 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Holistic Development</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe in nurturing the complete personality of each student through sports, arts, culture, and character-building activities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Sports excellence programs</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Cultural and arts activities</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Character development workshops</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision for Future */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-12 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-lg leading-relaxed mb-6">
              As we look to the future, we are excited about the possibilities and opportunities that lie ahead. We are committed to expanding our facilities, enhancing our curriculum, and reaching out to more students who aspire for excellence. We will continue to adapt to the changing educational landscape while staying true to our core values and mission.
            </p>
            <p className="text-lg leading-relaxed">
              Our goal is to create a school that not only produces academically successful students but also responsible, compassionate, and innovative individuals who will lead positive change in society. We invite you to be part of this transformative journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 text-lg mb-8">
            Have questions or want to learn more about our school? We'd love to hear from you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
              Schedule a Visit
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
