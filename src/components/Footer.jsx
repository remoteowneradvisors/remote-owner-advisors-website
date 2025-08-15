import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSectionNavigation = (sectionId) => {
    // Navigate to home page with hash
    navigate(`/#${sectionId}`)
    // Add a small delay to ensure the page loads before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 120 // Approximate header height in pixels
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 200)
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                <Link to="/" className="hover:text-primary-100 transition-colors">
                  Remote Owner Advisors
                </Link>
              </h3>
              <p className="text-secondary-300 mb-6 max-w-md">
                Your trusted partners for real estate success across the Eastside. We help landlords, investors, sellers, and buyers achieve their goals with strategic expertise and client-first service.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/remoteowneradvisors/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@remoteowneradvisors?si=0EAzJJ2LIrwy1BfR" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('services')} 
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('about')} 
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('testimonials')} 
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleSectionNavigation('contact')} 
                    className="text-secondary-300 hover:text-white transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-secondary-300">
                <p>
                  <a href="mailto:info@remoteowneradvisors.com" className="hover:text-white transition-colors">
                    info@remoteowneradvisors.com
                  </a>
                </p>
                <p>
                  <a href="tel:425-275-6184" className="hover:text-white transition-colors">
                    425-275-6184
                  </a>
                </p>
                <p className="text-sm">
                  Serving: Greater Seattle Area
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-300 text-sm">
              © {currentYear} Remote Owner Advisors. All rights reserved.
            </p>
            <p className="text-secondary-300 text-sm mt-2 md:mt-0">
              Licensed Real Estate Agents
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 