import { Phone, MessageSquare, X, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';
import { useState } from 'react';

export default function FloatingButtons() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Hello! How can I help you today?' },
    { role: 'assistant', content: 'Ask me about courses, admissions, scholarships, or any other information about our school.' }
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const enquiryMutation = trpc.enquiry.submit.useMutation({
    onSuccess: () => {
      toast.success('Enquiry submitted successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setEnquiryOpen(false);
    },
    onError: () => {
      toast.error('Failed to submit enquiry. Please try again.');
    }
  });

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enquiryMutation.mutate(formData);
  };

  const handleChatSend = () => {
    if (!chatMessage.trim()) return;
    
    // Add user message
    setChatMessages(prev => [...prev, { role: 'user', content: chatMessage }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'Thank you for your question! Our admission team will be happy to help you.',
        'We offer courses in Navodaya, Sainik, Military, Sports Training, and Regular Classes.',
        'Scholarships are available based on merit and financial need. Visit our scholarship page for more details.',
        'You can visit our campus anytime. Please contact us to schedule a visit.',
        'Our faculty is highly qualified and experienced in their respective fields.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
    }, 500);
    
    setChatMessage('');
  };

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        {/* Call Button */}
        <a
          href="tel:+919876543210"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse"
          title="Call Us"
        >
          <Phone size={24} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919876543210?text=Sir%2C%20I%20want%20to%20know%20more%20about%20school%2C%20courses%2C%20and%20system."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="WhatsApp Us"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.536.925-2.603 2.477-2.603 4.139 0 1.141.292 2.27.843 3.256L1.752 19.098l4.783-1.386c.955.554 2.056.847 3.235.847 1.123 0 2.2-.276 3.226-.799 1.524-.92 2.604-2.477 2.604-4.14.004-1.106-.213-2.113-.923-2.972-1.537-2.36-4.288-3.575-6.323-3.575z"/>
          </svg>
        </a>

        {/* AI Chat Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="AI Chat"
        >
          <MessageSquare size={24} />
        </button>

        {/* Enquiry Button */}
        <button
          onClick={() => setEnquiryOpen(true)}
          className="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 font-bold text-lg"
          title="Enquiry Now"
        >
          ?
        </button>
      </div>

      {/* Enquiry Form Dialog */}
      <Dialog open={enquiryOpen} onOpenChange={setEnquiryOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Enquiry Form</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEnquirySubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={4}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              disabled={enquiryMutation.isPending}
            >
              {enquiryMutation.isPending ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* AI Chat Dialog */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Chat with AI Assistant</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 h-64 overflow-y-auto space-y-3">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-lg p-3 max-w-xs text-sm ${
                      msg.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-800'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                className="flex-1"
              />
              <Button
                size="icon"
                onClick={handleChatSend}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
