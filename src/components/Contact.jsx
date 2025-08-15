import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to start your real estate journey? Contact us today for a consultation about your property needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-1">Email</h4>
                  <a 
                    href="mailto:info@remoteowneradvisors.com" 
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    info@remoteowneradvisors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-1">Phone</h4>
                  <a 
                    href="tel:425-275-6184" 
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    425-275-6184
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-1">Service Areas</h4>
                  <p className="text-secondary-600">
                    Greater Seattle Area
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                Business Hours
              </h4>
              <div className="space-y-3 text-secondary-600">
                <div className="text-center">
                  <div className="font-medium">Monday – Sunday</div>
                  <div>Available 9:00 AM – 8:00 PM</div>
                </div>
                <div className="text-center pt-2 border-t border-gray-200">
                  <div className="font-medium">Appointments available</div>
                  <div>In person or via Zoom</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Send Us a Message
            </h3>
            
            <form 
              action="https://formsubmit.co/info@remoteowneradvisors.com" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <input
                type="hidden"
                name="_subject"
                value="Contact Form Submission"
              />
              <input
                type="hidden"
                name="_next"
                value={window.location.href}
              />
              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 