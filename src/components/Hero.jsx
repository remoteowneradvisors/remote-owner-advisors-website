import React from 'react'

const Hero = () => {
  const handleSectionNavigation = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 120 // Approximate header height in pixels
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/logo.png" 
                alt="Remote Owner Advisors" 
                className="h-24 md:h-32 w-auto mr-4"
              />
              <span className="text-lg md:text-xl font-medium text-secondary-600 mx-4">Powered by</span>
              <img 
                src="/explogo.jpg" 
                alt="eXp Realty" 
                className="h-8 md:h-12 w-auto ml-4"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-secondary-600 mb-4 leading-relaxed">
            Specializing in landlord sales, investor guidance, full-service listings, and buyer representation across the 
            <span className="font-semibold text-primary-600"> Greater Seattle Area</span>
          </p>
          <p className="text-lg text-secondary-500 mb-8 font-medium">
            We speak 中文 (Chinese) and 한글 (Korean)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => handleSectionNavigation('contact')}
              className="btn-primary text-lg px-8 py-4"
            >
              Get Started Today
            </button>
            <button 
              onClick={() => handleSectionNavigation('services')}
              className="btn-secondary text-lg px-8 py-4"
            >
              View Our Services
            </button>
          </div>

          {/* YouTube Video Embed */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/q_C0v8BEVWU"
                title="Remote Owner Advisors Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 