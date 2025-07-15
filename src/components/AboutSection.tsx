import React from 'react';
import { MapPin, Calendar, Download } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <div className="mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                About Me
              </h2>
            </div>
            
            <div className="bg-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-neumorphic">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Salvador J. Martinez
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 mb-4">
                    Software Engineer & Technology Enthusiast
                  </p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 shadow-neumorphic-small flex items-center justify-center mr-3">
                      <MapPin size={16} />
                    </div>
                    <span className="text-sm md:text-base">Based in your location</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 shadow-neumorphic-small flex items-center justify-center mr-3">
                      <Calendar size={16} />
                    </div>
                    <span className="text-sm md:text-base">Available for new opportunities</span>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4 text-sm md:text-base leading-relaxed">
                    Passionate software engineer with extensive experience in building scalable 
                    applications and leading technical teams. I specialize in modern web technologies 
                    and have a strong background in full-stack development, system architecture, 
                    and agile methodologies.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or sharing insights through my blog posts. I believe 
                    in continuous learning and staying up-to-date with the latest industry trends.
                  </p>
                </div>

                <div className="bg-gray-100 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic-inset">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium shadow-neumorphic-small">
                      JavaScript
                    </span>
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium shadow-neumorphic-small">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium shadow-neumorphic-small">
                      React
                    </span>
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium shadow-neumorphic-small">
                      Node.js
                    </span>
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium shadow-neumorphic-small">
                      Python
                    </span>
                    <span className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium shadow-neumorphic-small">
                      AWS
                    </span>
                  </div>
                </div>

                <div className="pt-4 md:pt-6">
                  <button className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium rounded-lg md:rounded-xl text-gray-700 bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-200">
                    <Download size={18} className="mr-2" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="relative">
              <div className="aspect-square rounded-xl md:rounded-2xl bg-gray-100 shadow-neumorphic p-6 md:p-8">
                <div className="h-full rounded-lg md:rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 shadow-neumorphic-inset flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-neumorphic">
                      <span className="text-2xl md:text-4xl font-bold">SJM</span>
                    </div>
                    <p className="text-xs md:text-sm opacity-90">Professional Photo</p>
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

export default AboutSection;
