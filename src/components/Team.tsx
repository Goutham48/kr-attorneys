import React from 'react';
import { GraduationCap, User, Award, Briefcase, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Koma Ramontja',
      position: 'Managing Director',
      qualifications: [
        'B. Iuris, LLB, LLM',
        'Certificate in HRM',
        'Higher Certificate in Financial Planning',
        'PhD Candidate',
        'Chartered HR Professional'
      ],
      image: 'https://i.ibb.co/fdtprfJy/Picture1.jpg',
      email: 'koma@kr-attorneys.co.za',
      phone: '(010) 035 2774',
      icon: Award,
      gradient: 'from-red-500 to-yellow-500'
    },
    {
      name: 'Lebogang Mosadi Ramontja',
      position: 'Customer Relations Manager',
      qualifications: [
        'Certificate in Customer Relations',
        'Certificate in Marketing Management'
      ],
      image: 'https://i.ibb.co/Y41KLC0T/Picture4.jpg',
      email: 'lebogang@kr-attorneys.co.za',
      phone: '(010) 035 2774',
      icon: User,
      gradient: 'from-yellow-500 to-red-500'
    },
    {
      name: 'Mmatsatsi Tloubatla',
      position: 'Candidate Attorney',
      qualifications: [
        'Bachelor of Laws (LLB)'
      ],
      image: 'https://i.ibb.co/TDcdJzCc/Picture3.jpg',
      email: 'mmatsatsi@kr-attorneys.co.za',
      phone: '(010) 035 2774',
      icon: GraduationCap,
      gradient: 'from-red-500 to-yellow-500'
    },
    {
      name: 'Namedi Ramontja',
      position: 'Candidate Attorney',
      qualifications: [
        'Bachelor of Laws (LLB)'
      ],
      image: 'https://i.ibb.co/8DpCGvVY/Picture2.jpg',
      email: 'namedi@kr-attorneys.co.za',
      phone: '(010) 035 2774',
      icon: Briefcase,
      gradient: 'from-yellow-500 to-red-500'
    }
  ];

  return (
    <section id="team" className="pt-25 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full mb-6">
            <User className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced legal professionals are dedicated to providing exceptional 
            service and achieving the best outcomes for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-yellow-200 hover:border-red-300"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${member.gradient} rounded-full transform translate-x-8 -translate-y-8`}></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className={`absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r ${member.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <member.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {member.name}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-4`}>
                        {member.position}
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                      <div className="flex items-center text-sm text-slate-600">
                        <Mail className="h-4 w-4 mr-2 text-yellow-600" />
                        <span className="truncate">{member.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Phone className="h-4 w-4 mr-2 text-red-600" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    {/* Qualifications */}
                    <div>
                      <h4 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                        Qualifications
                      </h4>
                      <div className="space-y-2">
                        {member.qualifications.map((qualification, qualIndex) => (
                          <div key={qualIndex} className="flex items-start">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.gradient} mt-2 mr-3 flex-shrink-0`}></div>
                            <span className="text-slate-600 leading-relaxed text-sm">
                              {qualification}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-red-50 via-white to-yellow-50 rounded-3xl shadow-xl p-12 border-2 border-yellow-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Our Commitment to Excellence
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Built on a foundation of expertise, integrity, and client-focused service
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Excellence</h4>
              <p className="text-slate-600">
                Committed to delivering the highest quality legal services with attention to detail
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-100 to-red-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <User className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Integrity</h4>
              <p className="text-slate-600">
                Upholding the highest ethical standards and maintaining client confidentiality
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-100 to-yellow-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Expertise</h4>
              <p className="text-slate-600">
                Continuous learning and professional development to stay ahead of legal trends
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-100 to-red-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Dedication</h4>
              <p className="text-slate-600">
                Fully committed to achieving the best possible outcomes for every client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;