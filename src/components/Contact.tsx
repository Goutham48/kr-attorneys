import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '27671660795'; // WhatsApp number (067 166 0795 in international format)
    const message = encodeURIComponent('Hello, I would like to inquire about your legal services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const email = 'info@kr-attorneys.co.za';
    const subject = encodeURIComponent('Legal Services Inquiry');
    const body = encodeURIComponent('Hello,\n\nI would like to inquire about your legal services.\n\nBest regards,');
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="pt-25 pb-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Contact Us Today
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your legal matter? Get in touch with our experienced team
            for a free consultation. We're here to help you navigate your legal challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-2 rounded-full">
                    <Phone className="h-6 w-6 text-red-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600">(010) 035 2774</p>
                    <p className="text-sm text-slate-500">Emergency: 067 166 0795</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-100 to-red-100 p-2 rounded-full">
                    <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600">koma@kr-attorneys.co.za</p>
                    <p className="text-slate-600">info@kr-attorneys.co.za</p>
                    <p className="text-sm text-slate-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-2 rounded-full">
                    <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Address</h4>
                    <p className="text-slate-600">
                      96 Rivonia Road, TBE Offices<br />
                      4th Floor, Dennehof<br />
                      Sandton, Johannesburg
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-100 to-red-100 p-2 rounded-full">
                    <Clock className="h-6 w-6 text-yellow-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Office Hours</h4>
                    <p className="text-slate-600">
                      Monday - Friday: 08:30 - 16:30<br />
                      After Hours, Weekends & Holidays:<br />
                      Contact: 067 166 0795
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg h-64 overflow-hidden border-2 border-yellow-300 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.0234567890123!2d28.0586!3d-26.1086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0b6e4b1%3A0x8b5a5c5d5e5f5g5h!2s96%20Rivonia%20Rd%2C%20Sandton%2C%202196%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Koma Ramontja Attorneys Inc Office Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg p-8 border-2 border-yellow-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Us</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-yellow-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-yellow-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-yellow-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Legal Matter *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-yellow-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  >
                    <option value="">Select a practice area</option>
                    <option value="wills-estates">Wills & Deceased Estates</option>
                    <option value="family-law">Family Law</option>
                    <option value="employment-law">Employment Law</option>
                    <option value="dispute-resolution">Dispute Resolution</option>
                    <option value="labour-law">Labour Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Please describe your legal situation..."
                ></textarea>
              </div>

              <div className="text-sm text-slate-600">
                <p>
                  * Required fields. By submitting this form, you agree to our privacy policy
                  and understand that this does not create an attorney-client relationship.
                </p>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 pt-6 border-t-2 border-yellow-300">
                <h4 className="text-lg font-semibold text-slate-700 mb-4 text-center">
                  Contact Us Directly
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border border-yellow-500"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border border-yellow-500"
                  >
                    <Mail className="h-5 w-5" />
                    <span>Email Us</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;