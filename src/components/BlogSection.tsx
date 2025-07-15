import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications: Best Practices and Patterns',
      excerpt: 'Learn how to structure large React applications with proper component architecture, state management, and performance optimization techniques.',
      date: '2024-12-15',
      readTime: '8 min read',
      tags: ['React', 'JavaScript', 'Architecture'],
      featured: true
    },
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Exploring emerging technologies and frameworks that will shape the web development landscape in the coming year.',
      date: '2024-12-10',
      readTime: '6 min read',
      tags: ['Web Development', 'Trends', 'Technology']
    },
    {
      title: 'Implementing Real-time Features with WebSockets',
      excerpt: 'A comprehensive guide to adding real-time functionality to your applications using WebSockets and modern JavaScript.',
      date: '2024-12-05',
      readTime: '10 min read',
      tags: ['WebSockets', 'Real-time', 'JavaScript']
    },
    {
      title: 'Database Optimization: Tips for Better Performance',
      excerpt: 'Essential strategies for optimizing database queries and improving application performance at scale.',
      date: '2024-11-28',
      readTime: '7 min read',
      tags: ['Database', 'Performance', 'Optimization']
    },
    {
      title: 'Getting Started with TypeScript: A Developer\'s Guide',
      excerpt: 'Everything you need to know to start using TypeScript in your projects, from basic types to advanced patterns.',
      date: '2024-11-20',
      readTime: '12 min read',
      tags: ['TypeScript', 'JavaScript', 'Tutorial']
    }
  ];

  return (
    <section id="blog" className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            Latest Blog Posts
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-neumorphic-inset">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Sharing insights, tutorials, and thoughts about software development, 
                technology trends, and engineering best practices.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`bg-gray-100 rounded-xl md:rounded-2xl shadow-neumorphic overflow-hidden hover:shadow-neumorphic-hover transition-all duration-300 group ${
                post.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`p-6 md:p-8 ${post.featured ? 'lg:p-12' : ''}`}>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-4 md:mb-6 gap-2 sm:gap-4">
                  <div className="flex items-center bg-gray-100 rounded-md md:rounded-lg px-3 py-2 shadow-neumorphic-small">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-xs md:text-sm">{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-md md:rounded-lg px-3 py-2 shadow-neumorphic-small">
                    <Clock size={14} className="mr-2" />
                    <span className="text-xs md:text-sm">{post.readTime}</span>
                  </div>
                </div>

                <h3 className={`font-bold text-gray-800 mb-4 md:mb-6 group-hover:text-blue-500 transition-colors leading-tight ${
                  post.featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                }`}>
                  {post.title}
                </h3>

                <div className="bg-gray-100 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic-inset mb-4 md:mb-6">
                  <p className={`text-gray-600 leading-relaxed ${
                    post.featured ? 'text-base md:text-lg' : 'text-sm md:text-base'
                  }`}>
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-md md:rounded-lg text-xs font-medium bg-gray-100 text-gray-700 shadow-neumorphic-small"
                      >
                        <Tag size={10} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover text-blue-500 hover:text-blue-600 transition-all duration-200 font-medium text-sm md:text-base">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover text-blue-500 hover:text-blue-600 transition-all duration-200 font-medium text-sm md:text-base">
            View All Posts
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
