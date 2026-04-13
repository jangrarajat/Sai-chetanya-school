import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Search, Download, BookOpen } from 'lucide-react';

export default function ResultClass5() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'roll' | 'name'>('roll');

  // Sample results data
  const sampleResults = [
    { rollNo: '301', name: 'Aditya Sharma', marks: 425, totalMarks: 500, percentage: 85, status: 'Pass', grade: 'A' },
    { rollNo: '302', name: 'Zara Khan', marks: 440, totalMarks: 500, percentage: 88, status: 'Pass', grade: 'A' },
    { rollNo: '303', name: 'Rohan Patel', marks: 395, totalMarks: 500, percentage: 79, status: 'Pass', grade: 'B' },
    { rollNo: '304', name: 'Anaya Singh', marks: 410, totalMarks: 500, percentage: 82, status: 'Pass', grade: 'A' },
    { rollNo: '305', name: 'Vihaan Gupta', marks: 375, totalMarks: 500, percentage: 75, status: 'Pass', grade: 'B' },
  ];

  const filteredResults = sampleResults.filter(result => {
    if (searchType === 'roll') {
      return result.rollNo.includes(searchQuery);
    } else {
      return result.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="mx-auto mb-6" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Class 5 Board Result</h1>
            <p className="text-xl text-purple-100">
              Class 5 board examination results
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Search Your Result</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
              {/* Search Type Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSearchType('roll')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    searchType === 'roll'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-purple-200'
                  }`}
                >
                  Search by Roll No
                </button>
                <button
                  onClick={() => setSearchType('name')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    searchType === 'name'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-purple-200'
                  }`}
                >
                  Search by Name
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder={searchType === 'roll' ? 'Enter roll number...' : 'Enter student name...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-600 text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Display */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          {filteredResults.length > 0 ? (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Found {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
              </h3>
              <div className="space-y-6">
                {filteredResults.map((result, idx) => (
                  <Card key={idx} className="bg-white p-6 rounded-lg border border-purple-200 hover:shadow-lg transition">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Side - Student Info */}
                      <div>
                        <div className="mb-4">
                          <p className="text-gray-600 text-sm">Roll Number</p>
                          <p className="text-2xl font-bold text-purple-600">{result.rollNo}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Student Name</p>
                          <p className="text-xl font-semibold text-gray-800">{result.name}</p>
                        </div>
                      </div>

                      {/* Right Side - Marks & Status */}
                      <div>
                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg mb-4">
                          <p className="text-gray-600 text-sm mb-2">Marks Obtained</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-purple-600">{result.marks}</span>
                            <span className="text-gray-600">/ {result.totalMarks}</span>
                          </div>
                          <p className="text-lg font-semibold text-purple-600 mt-2">{result.percentage}%</p>
                        </div>
                        <div className="flex gap-4">
                          <div className="flex-1">
                            <p className="text-gray-600 text-sm">Status</p>
                            <p className="text-lg font-bold text-green-600">{result.status}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-600 text-sm">Grade</p>
                            <p className="text-lg font-bold text-purple-600">{result.grade}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
                        <Download size={20} />
                        Download Result Card
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ) : searchQuery ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-2xl font-bold text-gray-800 mb-2">No Results Found</p>
                <p className="text-gray-600">
                  No student found with the {searchType === 'roll' ? 'roll number' : 'name'} "{searchQuery}". Please check and try again.
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-xl text-gray-600">
                  Enter a {searchType === 'roll' ? 'roll number' : 'name'} to search for results
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Result Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Exam Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Exam Date: March 10-15, 2026</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Total Marks: 500</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Subjects: 5</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Passing Marks: 200 (40%)</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-bold text-purple-600 mb-4">Grading System</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Grade A: 80% and above</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Grade B: 60-79%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Grade C: 40-59%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>Promotion to Class 6: Grade C and above</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
