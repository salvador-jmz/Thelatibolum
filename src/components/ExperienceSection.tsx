import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL'],
      achievements: [
        'Led a team of 5 developers in building a high-traffic application',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Innovation Labs',
      period: '2020 - 2022',
      description: 'Developed and maintained full-stack applications, collaborated with cross-functional teams, and contributed to architectural decisions.',
      technologies: ['JavaScript', 'Python', 'Django', 'React', 'Docker'],
      achievements: [
        'Built RESTful APIs serving 10K+ daily active users',
        'Reduced bug reports by 30% through comprehensive testing',
        'Collaborated with UX team to improve user experience'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2018 - 2020',
      description: 'Started career building responsive web applications and learning modern development practices in a fast-paced startup environment.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Learned agile methodologies and collaborative development',
        'Contributed to open-source projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-100 rounded-xl md:rounded-2xl shadow-neumorphic p-6 md:p-8 hover:shadow-neumorphic-hover transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 md:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gray-100 shadow-neumorphic-inset flex items-center justify-center mr-3 md:mr-4">
                        <Briefcase size={18} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800">{exp.title}</h3>
                        <h4 className="text-lg md:text-xl text-blue-500 font-semibold">{exp.company}</h4>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 shadow-neumorphic-small flex items-center justify-center mr-3">
                        <Calendar size={16} />
                      </div>
                      <span className="font-medium text-sm md:text-base">{exp.period}</span>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/salvadorjmz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover text-blue-500 hover:text-blue-600 transition-all duration-200 text-sm md:text-base mt-4 lg:mt-0"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </a>
                </div>

                <div className="bg-gray-100 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic-inset mb-4 md:mb-6">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{exp.description}</p>
                </div>

                <div className="mb-4 md:mb-6">
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">Key Achievements:</h5>
                  <div className="bg-gray-100 rounded-lg md:rounded-xl p-4 md:p-6 shadow-neumorphic-inset">
                    <ul className="space-y-2 md:space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0 shadow-neumorphic-small"></span>
                          <span className="text-gray-700 text-sm md:text-base leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">Technologies:</h5>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 md:px-4 md:py-2 bg-gray-100 text-gray-700 rounded-md md:rounded-lg text-xs md:text-sm font-medium shadow-neumorphic-small"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
