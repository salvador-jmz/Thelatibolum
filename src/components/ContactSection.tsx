import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
            Get In Touch
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-neumorphic-inset">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about technology and development.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          <div>
            <div className="bg-gray-100 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-neumorphic">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
                Let's Connect
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center p-4 md:p-6 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-neumorphic">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-semibold text-gray-800">Email</h4>
                    <p className="text-sm md:text-base text-gray-600">contact@thelatibulum.com</p>
                  </div>
                </div>

                <div className="flex items-center p-4 md:p-6 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-neumorphic">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-semibold text-gray-800">Phone</h4>
                    <p className="text-sm md:text-base text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center p-4 md:p-6 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-neumorphic">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="text-base md:text-lg font-semibold text-gray-800">Location</h4>
                    <p className="text-sm md:text-base text-gray-600">Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset">
                <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  Quick Response
                </h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to connect with me on LinkedIn for faster communication.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-100 rounded-xl md:rounded-2xl shadow-neumorphic p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-700 text-sm md:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-700 text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-700 text-sm md:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-100 rounded-lg md:rounded-xl shadow-neumorphic-inset focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-vertical text-gray-700 text-sm md:text-base"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-medium rounded-lg md:rounded-xl text-gray-700 bg-gray-100 shadow-neumorphic hover:shadow-neumorphic-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
