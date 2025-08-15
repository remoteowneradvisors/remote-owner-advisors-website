import React from 'react'

const LeadForm = () => {
  return (
    <section className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Get Your Free Home Valuation
            </h2>
            <p className="text-xl text-secondary-600">
              Ready to discover what your property is worth? Fill out the form below and we'll provide you with a comprehensive market analysis.
            </p>
          </div>

          <form 
            action="https://formsubmit.co/info@remoteowneradvisors.com" 
            method="POST"
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="(206) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-secondary-700 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="123 Main St, Bellevue, WA"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Tell us about your property or any specific questions you have..."
              ></textarea>
            </div>

            <input
              type="hidden"
              name="_subject"
              value="Free Home Valuation Request"
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

            <div className="text-center">
              <button
                type="submit"
                className="btn-primary text-lg px-8 py-4 w-full md:w-auto"
              >
                Get a Free Home Valuation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LeadForm 