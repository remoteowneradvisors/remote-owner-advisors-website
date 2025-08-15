import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact'
import LeadForm from './LeadForm'

function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <LeadForm />
    </div>
  )
}

export default HomePage 