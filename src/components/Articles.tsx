import React from 'react';
import { Calendar, User, Download, MessageCircle } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: 'An Analysis of the Regulation of Shop Stewards in South Africa: Discipline, Suspension, Dismissal and Related Issues',
      date: '12 February 2025',
      author: 'Koma Ramontja',
      hasDownload: true,
      comments: 0
    },
    {
      title: 'Collaborative Seminar Programme & Registration Link',
      date: '12 February 2025',
      description: '1st Collaborative Seminar between UNISA, UL & UFS – Departments of Mercantile Law, 2023',
      hasDownload: false,
      comments: 0
    },
    {
      title: 'SLTSA Final Book of Abstracts 2024',
      date: '12 February 2025',
      description: 'The High Watermark of Employer Opportunism: Lesotho Highlands Development Authority v Motumi LAC/CIV/A/03/2006 in Retrospect',
      author: 'Mr. Koma Ramontja',
      hasDownload: false,
      comments: 0
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Latest Articles & Publications
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Stay informed with our latest legal insights, publications, and thought leadership 
            in Labour Law, Employment Law, and related practice areas.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-yellow-200 hover:border-red-300 duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-slate-600 mb-3">
                    {article.description}
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="h-4 w-4 mr-2 text-yellow-600" />
                  <span>{article.date}</span>
                </div>
                {article.author && (
                  <div className="flex items-center text-sm text-slate-500">
                    <User className="h-4 w-4 mr-2 text-red-600" />
                    <span>{article.author}</span>
                  </div>
                )}
                <div className="flex items-center text-sm text-slate-500">
                  <MessageCircle className="h-4 w-4 mr-2 text-yellow-600" />
                  <span>{article.comments} Comments</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
                {article.hasDownload ? (
                  <button className="flex items-center text-red-600 hover:text-yellow-600 font-medium text-sm transition-colors">
                    <Download className="h-4 w-4 mr-2 text-yellow-600" />
                    Download Article
                  </button>
                ) : (
                  <button className="text-red-600 hover:text-yellow-600 font-medium text-sm transition-colors">
                    Read More →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-red-50 rounded-lg p-12 border-2 border-yellow-300 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Stay Updated with Legal Insights
            </h3>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest legal updates, 
              articles, and insights directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-yellow-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-lg border border-yellow-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;