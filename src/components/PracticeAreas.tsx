import React from 'react';
import { FileText, Users, Briefcase, Scale, Gavel } from 'lucide-react';

const PracticeAreas = () => {
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

  const practiceAreas = [
    {
      icon: FileText,
      title: 'Wills & Deceased Estates',
      description: 'Secure legal assistance in drafting wills, managing estates, and resolving inheritance disputes.',
      features: ['Will Drafting', 'Estate Administration', 'Inheritance Disputes']
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Compassionate legal support in matters such as divorce, custody, maintenance, and domestic issues.',
      features: ['Divorce Proceedings', 'Child Custody', 'Maintenance Orders']
    },
    {
      icon: Briefcase,
      title: 'Employment Law',
      description: 'Legal representation and advice on employee rights, employer obligations, and workplace disputes.',
      features: ['Employee Rights', 'Workplace Disputes', 'Employment Contracts']
    },
    {
      icon: Scale,
      title: 'Dispute Resolution',
      description: 'Efficient resolution through litigation, arbitration, and mediation services.',
      features: ['Litigation Services', 'Arbitration', 'Mediation']
    },
    {
      icon: Gavel,
      title: 'Labour Law',
      description: 'Specialist guidance in collective bargaining, unfair dismissals, disciplinary procedures, and more.',
      features: ['Collective Bargaining', 'Unfair Dismissals', 'Disciplinary Procedures']
    }
  ];

  return (
    <section id="practice-areas" className="pt-21 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-5">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas,
            delivering expert representation tailored to your unique needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border-2 border-yellow-200 p-6 hover:shadow-xl hover:border-red-300 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full mb-4 group-hover:from-red-200 group-hover:to-yellow-200 transition-all duration-300">
                <area.icon className="h-8 w-8 text-red-600 group-hover:text-red-700" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {area.title}
              </h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {area.description}
              </p>
              
              <ul className="space-y-2">
                {area.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-yellow-200">
                <button className="text-red-600 hover:text-yellow-600 font-medium text-sm transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg p-12 border-2 border-yellow-300 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Don't See Your Legal Issue Listed?
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              We handle a wide variety of legal matters. Contact us for a consultation
              to discuss your specific situation and how we can help.
            </p>
            <button 
              onClick={handleScrollToContact}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl border border-yellow-500"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;