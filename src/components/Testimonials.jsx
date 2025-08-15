import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sunwan S.",
      role: "Property Owner",
      location: "2024",
      content: "Lan has been very proactive in marketing for sale to find buyers and been providing updates via email & calls in a timely manner. He is very thorough and understands what needs to be done for his clients. Definitely recommending him for any buyers and sellers! It was a great experience to work with him and will never regret!",
      rating: 5
    },
    {
      name: "Mai",
      role: "Property Seller",
      location: "2024",
      content: "Tang did a fabulous job when assisting us selling our property. He is always quick on responses, throughout when explaining to use details about the process, and attentive when trying to helps us finish the selling oversea. Tang also helped us so much when it comes to resolving all the little issues and we could not have finish the transaction so smoothly without Tang's help. I would highly recommend working with Tang, he's defining the go-to agent that you are looking for!",
      rating: 5
    },
    {
      name: "Hao",
      role: "Property Buyer & Seller",
      location: "2024",
      content: "Excellent working experience with CL Tang about buying and selling. He helped us bought the house 5 years ago and helped us sold it successfully recently. We are out of state sellers so many essential work cannot be done by myself. He helped us took care of the house during the selling period. All professional work such as prepare work, communication, offer negotiation, close of escrow are done perfectly by CL Tang. It is always great experience working with him and I would recommend him to all my friends!",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-secondary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Remote Owner Advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-secondary-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 