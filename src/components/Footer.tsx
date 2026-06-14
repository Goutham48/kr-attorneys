import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-50 to-red-50 text-slate-900 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center space-x-3">
                <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-2 rounded-full">
                  <Scale className="h-8 w-8 text-red-600" />
                </div>
                <div>
                <h3 className="text-2xl font-bold text-slate-900">Koma Ramontja Attorneys Inc</h3>
                <p className="text-red-600 font-semibold">Professional Legal Services</p>
                </div>
              </div>
              <p className="text-slate-600 mb-6 max-w-md">
                A forward-thinking boutique law firm providing efficient, practical, and robust 
                legal solutions for both public and private sector clients.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-6">Practice Areas</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                    Wills & Deceased Estates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                    Family Law
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                    Employment Law
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                    Dispute Resolution
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors">
                    Labour Law
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-600 mt-1" />
                  <div>
                    <p className="text-slate-600">
                      96 Rivonia Road, TBE Offices<br />
                      4th Floor, Dennehof<br />
                      Sandton, Johannesburg
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <p className="text-slate-600">(010) 035 2774</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-600" />
                  <p className="text-slate-600">info@kr-attorneys.co.za</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Resources */}
        <div className="py-8 border-t-2 border-yellow-300">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Legal Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Legal Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Legal Forms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Client Portal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Client Login
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Case Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Document Upload
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Payment Portal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Attorney Profiles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t-2 border-yellow-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 text-sm mb-4 md:mb-0">
              © 2024 Koma Ramontja Attorneys Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-600 hover:text-red-600 transition-colors text-sm">
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-yellow-300">
          <div className="text-center">
            <p className="text-slate-500 text-xs max-w-4xl mx-auto">
              Attorney Advertising. This website is designed for general information only. The information 
              presented should not be construed to be formal legal advice nor the formation of a 
              lawyer/client relationship. Past results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;