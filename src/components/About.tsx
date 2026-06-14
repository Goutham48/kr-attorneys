import React from 'react';
import { GraduationCap, Briefcase, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-9 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                About Koma Ramontja Attorneys Inc
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Located in Sandton, Gauteng, Koma Ramontja Attorneys Inc is a boutique law firm 
                dedicated to delivering exceptional legal services with a distinctive approach. 
                We believe in applying the least force rule — resolving legal matters efficiently 
                and using the fewest billable hours possible.
              </p>
            </div>

            {/* Education & Experience */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-2 rounded-full">
                  <GraduationCap className="h-6 w-6 text-yellow-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Education</h3>
                  <p className="text-slate-600">
                    Specialized legal education with focus on Labour Law, Employment Law, and Dispute Resolution
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-100 to-red-200 p-2 rounded-full">
                  <Briefcase className="h-6 w-6 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Experience</h3>
                  <p className="text-slate-600">
                    Boutique law firm specializing in efficient legal solutions for public and private sectors
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-100 to-red-100 p-2 rounded-full">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Professional Registration</h3>
                  <p className="text-slate-600">
                    Our firm is proudly registered with the Legal Practice Council (LPC), ensuring full compliance with the highest professional and ethical standards of the legal profession.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg p-6 shadow-lg border-2 border-yellow-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Core Values</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-3"></span>
                  <strong>Fairness:</strong> Ethical practices and pursuit of justice
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-3"></span>
                  <strong>Accountability:</strong> Strict confidentiality and integrity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-3"></span>
                  <strong>Efficiency:</strong> Least force rule for cost-effective solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-3"></span>
                  <strong>Excellence:</strong> Continuous skill development and innovation
                </li>
              </ul>
            </div>
          </div>

          {/* Right content - Attorney Image */}
          <div className="relative -mt-20">
            <div className="bg-white rounded-lg shadow-xl p-5 border-2 border-yellow-200">
              <img
                src="https://i.ibb.co/fdtprfJy/Picture1.jpg"
                alt="Koma Ramontja Attorneys Inc Office"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              
              <div className="text-center space-y-4 -mt-5">
                <h3 className="text-2xl font-bold text-slate-900">Koma Ramontja</h3>
                <p className="text-yellow-600 font-semibold">Principal Attorney</p>
                
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">5+</div>
                    <div className="text-sm text-slate-600">Practice Areas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">100%</div>
                    <div className="text-sm text-slate-600">Dedicated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">24/7</div>
                    <div className="text-sm text-slate-600">Available</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-yellow-200">
                  <div className="flex items-center justify-center space-x-2 text-slate-600">
                    <Phone className="h-4 w-4 text-red-600" />
                    <span>(010) 035 2774</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;