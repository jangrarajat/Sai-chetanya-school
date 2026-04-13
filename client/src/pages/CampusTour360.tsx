import { Card } from '@/components/ui/card';
import { BookOpen, Camera, CheckCircle, MapPin, Palette, Play } from 'lucide-react';
import { useState } from 'react';

export default function CampusTour360() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const tourLocations = [
    {
      id: 'entrance',
      name: 'Main Entrance',
      description: 'Welcome to our prestigious school campus with modern architecture',
      icon: '🏫',
    },
    {
      id: 'courtyard',
      name: 'Central Courtyard',
      description: 'Beautiful open space for student gatherings and events',
      icon: '🌳',
    },
    {
      id: 'classrooms',
      name: 'Smart Classrooms',
      description: 'State-of-the-art classrooms with interactive learning technology',
      icon: '<BookOpen size={20} />',
    },
    {
      id: 'library',
      name: 'Central Library',
      description: 'Comprehensive library with 50,000+ books and digital resources',
      icon: '<BookOpen size={20} />',
    },
    {
      id: 'lab',
      name: 'Science Laboratories',
      description: 'Well-equipped labs for Physics, Chemistry, and Biology',
      icon: '🔬',
    },
    {
      id: 'computer',
      name: 'Computer Lab',
      description: 'Modern computer lab with latest technology and software',
      icon: '💻',
    },
    {
      id: 'sports',
      name: 'Sports Complex',
      description: 'Indoor and outdoor sports facilities for various activities',
      icon: '⚽',
    },
    {
      id: 'hostel',
      name: 'Hostel Facilities',
      description: 'Comfortable and secure hostel accommodations for students',
      icon: '🏨',
    },
    {
      id: 'cafeteria',
      name: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious meals',
      icon: '🍽️',
    },
    {
      id: 'auditorium',
      name: 'Auditorium',
      description: 'Modern auditorium for seminars, events, and performances',
      icon: '<Palette size={20} />',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Camera className="mx-auto mb-6" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">360° Campus Tour</h1>
            <p className="text-xl text-blue-100">
              Explore our world-class campus facilities and infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Main 360 Viewer */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {selectedTour ? (
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 aspect-video flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {tourLocations.find(t => t.id === selectedTour)?.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tourLocations.find(t => t.id === selectedTour)?.name}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {tourLocations.find(t => t.id === selectedTour)?.description}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg">
                      <Play size={20} />
                      <span>360° View Loading...</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-4">
                      Use your mouse or touch to rotate and explore the 360° view
                    </p>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="overflow-hidden">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="mx-auto mb-4 text-blue-600" size={64} />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Select a Location</h3>
                    <p className="text-gray-600">
                      Choose a location from below to start the 360° campus tour
                    </p>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Tour Locations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Campus Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {tourLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedTour(location.id)}
                className={`p-4 rounded-lg text-center transition transform hover:scale-105 ${
                  selectedTour === location.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 hover:shadow-lg border-2 border-gray-200'
                }`}
              >
                <div className="text-3xl mb-2">{location.icon}</div>
                <h4 className="font-bold text-sm mb-1">{location.name}</h4>
                <p className={`text-xs ${selectedTour === location.id ? 'text-blue-100' : 'text-gray-600'}`}>
                  {location.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Highlights */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Campus Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                State-of-the-art facilities including smart classrooms, advanced laboratories, and digital learning centers.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> 50+ Classrooms with smart boards</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> 5 Science laboratories</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> 2 Computer labs with 100+ systems</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Digital library with e-resources</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-cyan-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sports & Recreation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive sports facilities for physical development and competitive excellence.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Indoor sports complex</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Olympic-size swimming pool</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Cricket ground and courts</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Gymnasium with modern equipment</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-teal-600">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Residential Facilities</h3>
              <p className="text-gray-600 mb-4">
                Safe and comfortable hostel accommodations with all modern amenities for boarders.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Separate boys and girls hostels</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> 24/7 security and supervision</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Nutritious meal plans</li>
                <li><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Recreation and study areas</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Virtual Tour Info */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <MapPin className="mx-auto mb-4 text-blue-600" size={40} />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience Our Campus</h2>
            <p className="text-gray-600 mb-6">
              Our 360° virtual tour gives you a complete view of our campus facilities. Navigate through different locations to explore classrooms, laboratories, sports facilities, and hostel accommodations. Get a real feel of the school environment before visiting us in person.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
              Schedule Physical Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
