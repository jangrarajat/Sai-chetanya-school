import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { CheckCircle, Download } from 'lucide-react';

export default function Scholarship() {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [admitCardNumber, setAdmitCardNumber] = useState('');
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    class: '',
    previousSchool: '',
    address: '',
    mobileNumber: '',
    photoUrl: '',
  });

  const uploadMutation = trpc.upload.photo.useMutation();
  const registerMutation = trpc.scholarship.register.useMutation({
    onSuccess: (data) => {
      setAdmitCardNumber(data.admitCardNumber);
      setStep('success');
      toast.success('Registration successful! Your admit card has been generated.');
    },
    onError: () => {
      toast.error('Registration failed. Please try again.');
    }
  });

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload photo
    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      const base64 = fileReader.result as string;
      const base64Data = base64.split(',')[1];
      
      try {
        const result = await uploadMutation.mutateAsync({
          fileName: file.name,
          fileData: base64Data,
        });
        setFormData({ ...formData, photoUrl: result.url });
        toast.success('Photo uploaded successfully!');
      } catch (error) {
        toast.error('Failed to upload photo');
      }
    };
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.photoUrl) {
      toast.error('Please upload a photo');
      return;
    }
    registerMutation.mutate(formData);
  };

  const downloadAdmitCard = () => {
    // Open print dialog for admit card
    const element = document.getElementById('admit-card');
    if (!element) return;

    const printWindow = window.open('', '', 'height=600,width=800');
    if (!printWindow) return;
    
    printWindow.document.write('<html><head><title>Admit Card</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('body { font-family: Arial, sans-serif; margin: 20px; }');
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(element.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container max-w-2xl">
          <Card className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl"><CheckCircle size={20} className="text-purple-600 flex-shrink-0 mt-0.5" /></span>
              </div>
              <h1 className="text-4xl font-bold text-green-600 mb-2">Registration Successful!</h1>
              <p className="text-gray-600 text-lg">Your scholarship registration has been confirmed.</p>
            </div>

            <div id="admit-card" className="bg-white border-4 border-purple-600 p-8 rounded-lg my-8 text-left">
              <div className="text-center mb-6 pb-6 border-b-2 border-purple-600">
                <h2 className="text-2xl font-bold text-purple-600">ADMIT CARD</h2>
                <p className="text-sm text-gray-600">Scholarship Examination 2026</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs text-gray-600 font-semibold">ADMIT CARD NUMBER</p>
                  <p className="text-lg font-bold text-purple-600">{admitCardNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">STUDENT NAME</p>
                  <p className="text-lg font-bold">{formData.studentName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">DATE OF BIRTH</p>
                  <p className="text-lg font-bold">{formData.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">CLASS</p>
                  <p className="text-lg font-bold">{formData.class}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">FATHER'S NAME</p>
                  <p className="text-lg font-bold">{formData.fatherName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold">MOBILE NUMBER</p>
                  <p className="text-lg font-bold">{formData.mobileNumber}</p>
                </div>
              </div>

              <div className="border-t-2 border-purple-600 pt-4 text-center text-xs text-gray-600">
                <p>Please bring this admit card on the day of examination</p>
                <p>Generated on: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={downloadAdmitCard}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Print/Download Admit Card
              </Button>
              <Button
                onClick={() => window.print()}
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                Print Admit Card
              </Button>
            </div>

            <p className="text-gray-600 mt-6">
              A confirmation email has been sent to your registered email address.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarship Registration</h1>
          <p className="text-gray-600 text-lg">Fill out the form below to register for our scholarship program</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-bold text-purple-600 mb-4">Student Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Student Name *"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  required
                />
                <Input
                  type="date"
                  placeholder="Date of Birth *"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  required
                />
                <Input
                  placeholder="Class *"
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  required
                />
                <Input
                  placeholder="Previous School Name *"
                  value={formData.previousSchool}
                  onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Parent Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-bold text-purple-600 mb-4">Parent Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Father's Name *"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  required
                />
                <Input
                  placeholder="Mother's Name *"
                  value={formData.motherName}
                  onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-bold text-purple-600 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <Input
                  type="tel"
                  placeholder="Mobile Number *"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Address *"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  rows={3}
                />
              </div>
            </div>

            {/* Photo Upload */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-bold text-purple-600 mb-4">Passport Size Photo</h2>
              <div className="flex items-center gap-4">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-32 h-40 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-50 transition"
                >
                  {photoPreview ? (
                    <img src={photoPreview} alt="Preview" className="w-full h-full object-cover rounded" />
                  ) : (
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Click to upload</p>
                      <p className="text-xs text-gray-500">JPG, PNG</p>
                    </div>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-2">Requirements:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Size: 4x6 cm</li>
                    <li>Format: JPG or PNG</li>
                    <li>Max size: 2 MB</li>
                    <li>Recent photo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 text-lg font-semibold"
              disabled={registerMutation.isPending || uploadMutation.isPending}
            >
              {registerMutation.isPending ? 'Processing...' : 'Submit Registration & Generate Admit Card'}
            </Button>

            <p className="text-xs text-gray-600 text-center">
              By submitting this form, you agree to our terms and conditions.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
