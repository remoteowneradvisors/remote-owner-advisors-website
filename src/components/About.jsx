import React from 'react'

const About = () => {
  const teamMembers = [
    {
      name: "CL Tang",
      role: "Co-Lead Agent",
      image: "/cl-tang-headshot.jpg",
      description: "Licensed real estate agent with deep expertise in Eastside markets and strategic property sales."
    },
    {
      name: "Lan Kim",
      role: "Co-Lead Agent",
      image: "/lan-kim-headshot.jpg",
      description: "Experienced agent specializing in investment properties and client-first service across the Eastside."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              About Remote Owner Advisors
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              Remote Owner Advisors is a team of licensed real estate agents specializing in helping landlords and homeowners sell with ease and confidence. Co-led by CL Tang and Lan Kim, we offer a true full-service listing experience — managing every step for you from start to finish.
            </p>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              We coordinate directly with tenants and property managers, oversee home preparation with our trusted network of contractors, launch targeted marketing campaigns, skillfully negotiate offers, and handle remote closings so you never have to step foot on the property. Our goal is to make selling seamless, stress-free, and profitable — while you focus on what's next.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                                 <p className="text-secondary-600">Strategic market knowledge across Greater Seattle Area</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-secondary-600">Client-first approach with personalized service for every transaction</p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-secondary-600">Proven track record of maximizing returns for property owners and investors</p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center lg:text-left">
              Meet Our Team
            </h3>
            <div className="space-y-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900">
                      {member.name}
                    </h4>
                    <p className="text-primary-600 font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-secondary-600 text-sm">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 