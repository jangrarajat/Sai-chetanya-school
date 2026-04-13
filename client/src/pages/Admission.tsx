import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Admission() {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    gender: '',
    class: '',
    previousSchool: '',
    address: '',
    mobileNumber: '',
    email: '',
    fatherOccupation: '',
    motherOccupation: '',
    annualIncome: '',
    photoUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [admissionNumber, setAdmissionNumber] = useState('');

  const createAdmissionMutation = trpc.admission?.create?.useMutation?.() || {
    mutate: () => toast.error('Admission service not available'),
    isPending: false,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setFormData(prev => ({ ...prev, photoUrl: base64 }));
        toast.success('Photo uploaded successfully');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.studentName || !formData.fatherName || !formData.motherName || !formData.dateOfBirth || 
        !formData.gender || !formData.class || !formData.previousSchool || !formData.address || 
        !formData.mobileNumber || !formData.email) {
      toast.error('Please fill all required fields');
      return;
    }

    // Prepare payload with undefined for empty optional fields
    const payload = {
      studentName: formData.studentName,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      class: formData.class,
      previousSchool: formData.previousSchool,
      address: formData.address,
      mobileNumber: formData.mobileNumber,
      email: formData.email,
      fatherOccupation: formData.fatherOccupation || undefined,
      motherOccupation: formData.motherOccupation || undefined,
      annualIncome: formData.annualIncome || undefined,
      photoUrl: formData.photoUrl || undefined,
    };

    createAdmissionMutation.mutate(payload, {
      onSuccess: (data: any) => {
        setAdmissionNumber(data.admissionNumber);
        setSubmitted(true);
        toast.success('Admission form submitted successfully!');
        setFormData({
          studentName: '',
          fatherName: '',
          motherName: '',
          dateOfBirth: '',
          gender: '',
          class: '',
          previousSchool: '',
          address: '',
          mobileNumber: '',
          email: '',
          fatherOccupation: '',
          motherOccupation: '',
          annualIncome: '',
          photoUrl: '',
        });
      },
      onError: () => {
        toast.error('Failed to submit admission form');
      },
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <CheckCircle className="mx-auto mb-6" size={64} />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Application Submitted!</h1>
              <p className="text-xl text-green-100 mb-8">
                Your admission form has been successfully submitted
              </p>
              
              <Card className="bg-white text-gray-800 p-8 mb-8">
                <p className="text-lg mb-4">Your Admission Number:</p>
                <p className="text-4xl font-bold text-green-600 mb-4">{admissionNumber}</p>
                <p className="text-gray-600 mb-6">
                  Please save this number for future reference and communication
                </p>
              </Card>

              <div className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Next Steps:</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">1️⃣</span>
                    <span>Our admission team will review your application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">2️⃣</span>
                    <span>You will receive a call/email within 2-3 working days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">3️⃣</span>
                    <span>Attend the entrance examination on scheduled date</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">4️⃣</span>
                    <span>Final admission confirmation after merit assessment</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => setSubmitted(false)}
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="mx-auto mb-6" size={48} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Online Admission Form</h1>
            <p className="text-xl text-indigo-100">
              Complete your admission application for the academic year 2026-2027
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-b-2 border-yellow-200">
        <div className="container">
          <div className="flex items-start gap-4 max-w-3xl mx-auto">
            <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important Instructions</h3>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• All fields marked with * are mandatory</li>
                <li>• Upload a clear passport-size photo (JPG/PNG, max 2MB)</li>
                <li>• Ensure all information is accurate before submission</li>
                <li>• You will receive an admission number after successful submission</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Student Information */}
              <Card className="p-8 border-l-4 border-indigo-600">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter student's full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Class Applying For *
                    </label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                    >
                      <option value="">Select Class</option>
                      <option value="UKG">UKG</option>
                      <option value="1">Class 1</option>
                      <option value="2">Class 2</option>
                      <option value="3">Class 3</option>
                      <option value="4">Class 4</option>
                      <option value="5">Class 5</option>
                      <option value="6">Class 6</option>
                      <option value="7">Class 7</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Previous School Name *
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter previous school name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Passport Size Photo *
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                    />
                    {formData.photoUrl && (
                      <p className="text-sm text-green-600 mt-2"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /> Photo uploaded</p>
                    )}
                  </div>
                </div>
              </Card>

              {/* Parent Information */}
              <Card className="p-8 border-l-4 border-purple-600">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Parent/Guardian Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter father's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Mother's Name *
                    </label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter mother's name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Father's Occupation
                    </label>
                    <input
                      type="text"
                      name="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter occupation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Mother's Occupation
                    </label>
                    <input
                      type="text"
                      name="motherOccupation"
                      value={formData.motherOccupation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter occupation"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Annual Family Income
                    </label>
                    <input
                      type="text"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter annual income (e.g., ₹5,00,000)"
                    />
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-8 border-l-4 border-pink-600">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter 10-digit mobile number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Residential Address *
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                      placeholder="Enter complete residential address"
                    ></textarea>
                  </div>
                </div>
              </Card>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={createAdmissionMutation.isPending}
                  className="flex-1 bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition disabled:opacity-50"
                >
                  {createAdmissionMutation.isPending ? 'Submitting...' : 'Submit Application'}
                </button>
                <button
                  type="reset"
                  className="flex-1 bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-400 transition"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
