import React from 'react';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-white text-slate-900">
      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Forward-Thinking
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent"> Legal Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                At Koma Ramontja Attorneys Inc, we are redefining the role of legal practitioners. 
                We provide efficient, practical, and robust legal solutions for both public and private sector clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-slate-600">Practice Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-slate-600">Client Focused</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-slate-600">Emergency Line</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScrollToContact}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl border border-yellow-500"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={handleScrollToAbout}
                className="border-2 border-yellow-500 text-red-600 px-8 py-4 rounded-lg hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right content - Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-100 to-red-200 p-2 rounded-full">
                  <Shield className="h-8 w-8 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Trusted Protection</h3>
                  <p className="text-slate-600">
                    Committed to ethical practices, open communication, and the pursuit of justice 
                    with complete transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-2 rounded-full">
                  <Award className="h-8 w-8 text-yellow-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Award-Winning Service</h3>
                  <p className="text-slate-600">
                    Applying the least force rule — resolving matters efficiently with minimal 
                    billable hours to save costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-100 to-yellow-100 p-2 rounded-full">
                  <Users className="h-8 w-8 text-red-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Personal Attention</h3>
                  <p className="text-slate-600">
                    Continuous skill development enables our team to craft effective strategies 
                    and provide competitive legal advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;