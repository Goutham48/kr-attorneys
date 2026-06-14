import React from 'react';
import { Clock, DollarSign, Trophy, Phone, Star, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Efficient Solutions',
      description: 'We apply the least force rule — resolving matters efficiently with minimal billable hours.'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Our approach ensures clients achieve their goals without incurring unnecessary legal costs.'
    },
    {
      icon: Trophy,
      title: 'Specialized Expertise',
      description: 'Focused practice areas with deep knowledge in Labour Law, Employment Law, and more.'
    },
    {
      icon: Phone,
      title: '24/7 Emergency Line',
      description: 'Available after hours, weekends, and holidays at 067 166 0795 for urgent matters.'
    }
  ];

  const testimonials = [
    {
      name: 'Corporate Client',
      role: 'Employment Law Matter',
      content: 'Koma Ramontja Attorneys provided exceptional guidance on our employment law matters. Their efficient approach saved us both time and costs.',
      rating: 5
    },
    {
      name: 'Private Individual',
      role: 'Family Law Client',
      content: 'Professional and compassionate handling of our family law matter. The team showed great understanding and achieved excellent results.',
      rating: 5
    },
    {
      name: 'Estate Client',
      role: 'Wills & Estates',
      content: 'Thorough and professional service in handling our deceased estate. Clear communication throughout the entire process.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Koma Ramontja Attorneys Inc
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We are a forward-thinking law firm redefining legal practice with efficient, 
            practical solutions. Here's what sets us apart.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full mb-4 mx-auto shadow-lg">
                <benefit.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg shadow-xl p-12 mb-20 border-2 border-yellow-200">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-2">5+</div>
              <div className="text-slate-600">Practice Areas</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-slate-600">Client Focused</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-slate-600">Emergency Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent mb-2">Boutique</div>
              <div className="text-slate-600">Personalized Service</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-yellow-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-600 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-yellow-200 pt-4">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 text-center mb-12">
            Our Legal Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-600 text-white rounded-full mb-4 mx-auto font-bold shadow-lg">
                1
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Initial Consultation</h4>
              <p className="text-slate-600">
                We listen to your situation and provide honest legal advice and assessment.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-600 text-white rounded-full mb-4 mx-auto font-bold shadow-lg">
                2
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Case Evaluation</h4>
              <p className="text-slate-600">
                We thoroughly analyze your matter and develop an efficient strategic approach.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-600 text-white rounded-full mb-4 mx-auto font-bold shadow-lg">
                3
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Legal Action</h4>
              <p className="text-slate-600">
                We implement our least force rule approach while keeping you informed throughout.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-600 to-yellow-600 text-white rounded-full mb-4 mx-auto font-bold shadow-lg">
                4
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Resolution</h4>
              <p className="text-slate-600">
                We achieve optimal outcomes efficiently with minimal unnecessary costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;