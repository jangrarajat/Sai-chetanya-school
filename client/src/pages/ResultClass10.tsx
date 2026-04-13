import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { Search, Download, BookOpen } from 'lucide-react';

export default function ResultClass10() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'roll' | 'name'>('roll');

  // Sample results data
  const sampleResults = [
    { rollNo: '501', name: 'Rahul Sharma', marks: 485, totalMarks: 500, percentage: 97, status: 'Pass', grade: 'A1', cgpa: '9.8' },
    { rollNo: '502', name: 'Priya Singh', marks: 470, totalMarks: 500, percentage: 94, status: 'Pass', grade: 'A1', cgpa: '9.4' },
    { rollNo: '503', name: 'Akshay Patel', marks: 445, totalMarks: 500, percentage: 89, status: 'Pass', grade: 'A2', cgpa: '8.9' },
    { rollNo: '504', name: 'Anushka Verma', marks: 430, totalMarks: 500, percentage: 86, status: 'Pass', grade: 'A2', cgpa: '8.6' },
    { rollNo: '505', name: 'Vikram Kumar', marks: 410, totalMarks: 500, percentage: 82, status: 'Pass', grade: 'B1', cgpa: '8.2' },
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
      <section className="bg-gradient-to-r from-pink-600 to-pink-400 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="mx-auto mb-6" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Class 10 Board Result</h1>
            <p className="text-xl text-pink-100">
              Class 10 CBSE board examination results
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Search Your Result</h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-8 rounded-xl border border-pink-200">
              {/* Search Type Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setSearchType('roll')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    searchType === 'roll'
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-gray-700 border border-pink-200'
                  }`}
                >
                  Search by Roll No
                </button>
                <button
                  onClick={() => setSearchType('name')}
                  className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                    searchType === 'name'
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-gray-700 border border-pink-200'
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
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-600 text-gray-800"
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
                  <Card key={idx} className="bg-white p-6 rounded-lg border border-pink-200 hover:shadow-lg transition">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Left Side - Student Info */}
                      <div>
                        <div className="mb-4">
                          <p className="text-gray-600 text-sm">Roll Number</p>
                          <p className="text-2xl font-bold text-pink-600">{result.rollNo}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Student Name</p>
                          <p className="text-xl font-semibold text-gray-800">{result.name}</p>
                        </div>
                      </div>

                      {/* Right Side - Marks & Status */}
                      <div>
                        <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-4 rounded-lg mb-4">
                          <p className="text-gray-600 text-sm mb-2">Marks Obtained</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-pink-600">{result.marks}</span>
                            <span className="text-gray-600">/ {result.totalMarks}</span>
                          </div>
                          <p className="text-lg font-semibold text-pink-600 mt-2">{result.percentage}%</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div>
                            <p className="text-gray-600 text-xs">Status</p>
                            <p className="text-sm font-bold text-green-600">{result.status}</p>
                          </div>
                          <div>
                            <p className="text-gray-600 text-xs">Grade</p>
                            <p className="text-sm font-bold text-pink-600">{result.grade}</p>
                          </div>
                          <div>
                            <p className="text-gray-600 text-xs">CGPA</p>
                            <p className="text-sm font-bold text-blue-600">{result.cgpa}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Download Button */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700 transition">
                        <Download size={20} />
                        Download Marksheet
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
              <Card className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-pink-600 mb-4">Exam Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Exam Date: March 15-April 5, 2026</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Total Marks: 500</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Subjects: 5 (CBSE Board)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Passing Marks: 200 (40%)</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-xl font-bold text-pink-600 mb-4">Grading System</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Grade A1: 91-100% (CGPA 9.0-10.0)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Grade A2: 81-90% (CGPA 8.0-8.9)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Grade B1: 71-80% (CGPA 7.0-7.9)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-600 font-bold">•</span>
                    <span>Promotion to Class 11: Grade B1 and above</span>
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
