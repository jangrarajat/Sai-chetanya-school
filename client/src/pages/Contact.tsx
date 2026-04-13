import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { trpc } from '@/lib/trpc';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const enquiryMutation = trpc.enquiry.submit.useMutation({
    onSuccess: () => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    },
    onError: () => {
      toast.error('Failed to send message. Please try again.');
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enquiryMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 School Road, Education City, State 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@school.edu',
      link: 'mailto:info@school.edu'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 8:00 AM - 4:00 PM',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">We would love to hear from you. Get in touch with us today.</p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <a
                key={idx}
                href={info.link}
                target={info.link.startsWith('http') && !info.link.startsWith('mailto') && !info.link.startsWith('tel') ? '_blank' : undefined}
                rel={info.link.startsWith('http') && !info.link.startsWith('mailto') && !info.link.startsWith('tel') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <Card className="p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="mb-4 p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit mx-auto">
                    <Icon className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                rows={5}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 text-lg font-semibold"
                disabled={enquiryMutation.isPending}
              >
                {enquiryMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          {/* Map and Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="p-0 overflow-hidden h-80 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Google Map Integration</p>
                <p className="text-sm">Map will be displayed here</p>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Info</h3>
              <div className="space-y-3 text-gray-600">
                <p><span className="font-semibold text-gray-800">School Name:</span> Excellence Academy</p>
                <p><span className="font-semibold text-gray-800">Established:</span> 2010</p>
                <p><span className="font-semibold text-gray-800">Students:</span> 1000+</p>
                <p><span className="font-semibold text-gray-800">Faculty:</span> 50+</p>
                <p><span className="font-semibold text-gray-800">Affiliation:</span> CBSE/ICSE</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
