import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample gallery data - in production, this would come from the database
  const galleryImages = [
    { id: 1, title: 'Main Campus Building', category: 'campus', image: 'https://via.placeholder.com/400x300?text=Campus+1' },
    { id: 2, title: 'Classroom Setup', category: 'classroom', image: 'https://via.placeholder.com/400x300?text=Classroom+1' },
    { id: 3, title: 'Hostel Facility', category: 'hostel', image: 'https://via.placeholder.com/400x300?text=Hostel+1' },
    { id: 4, title: 'Sports Ground', category: 'sports', image: 'https://via.placeholder.com/400x300?text=Sports+1' },
    { id: 5, title: 'Faculty Team', category: 'faculty', image: 'https://via.placeholder.com/400x300?text=Faculty+1' },
    { id: 6, title: 'Campus View', category: 'campus', image: 'https://via.placeholder.com/400x300?text=Campus+2' },
    { id: 7, title: 'Modern Classroom', category: 'classroom', image: 'https://via.placeholder.com/400x300?text=Classroom+2' },
    { id: 8, title: 'Hostel Room', category: 'hostel', image: 'https://via.placeholder.com/400x300?text=Hostel+2' },
    { id: 9, title: 'Cricket Field', category: 'sports', image: 'https://via.placeholder.com/400x300?text=Sports+2' },
    { id: 10, title: 'Faculty Meeting', category: 'faculty', image: 'https://via.placeholder.com/400x300?text=Faculty+2' },
    { id: 11, title: 'Library', category: 'campus', image: 'https://via.placeholder.com/400x300?text=Campus+3' },
    { id: 12, title: 'Smart Class', category: 'classroom', image: 'https://via.placeholder.com/400x300?text=Classroom+3' },
  ];

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'campus', label: 'Campus' },
    { value: 'classroom', label: 'Classroom' },
    { value: 'hostel', label: 'Hostel' },
    { value: 'sports', label: 'Sports' },
    { value: 'faculty', label: 'Faculty' },
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-600 text-lg">Explore our campus, facilities, and student life</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCategory(cat.value);
                setSelectedImage(null);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(idx)}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center">
                    <p className="text-lg font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl">
              <div className="relative">
                <img
                  src={filteredImages[selectedImage].image}
                  alt={filteredImages[selectedImage].title}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-center mt-4 text-lg font-semibold text-gray-800">
                  {filteredImages[selectedImage].title}
                </p>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handlePrev}
                    disabled={selectedImage === 0}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={20} />
                    Previous
                  </button>
                  <span className="text-gray-600 font-semibold">
                    {selectedImage + 1} / {filteredImages.length}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={selectedImage === filteredImages.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
}
