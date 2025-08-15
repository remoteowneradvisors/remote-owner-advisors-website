import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname === path
  }

  const isSectionActive = (sectionId) => {
    return location.pathname === '/'
  }

  const handleSectionNavigation = (sectionId) => {
    // Close mobile menu first
    setIsMenuOpen(false)
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page with hash
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
    } else {
      // If already on home page, just scroll to section
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
      }, 100)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center pl-4">
            <button 
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/')
                } else {
                  // If already on home page, scroll to top
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                }
              }}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.png" 
                alt="Remote Owner Advisors" 
                className="h-24 w-auto"
                onError={(e) => {
                  // Fallback to text if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="text-2xl font-bold text-primary-600 hidden">
                Remote Owner Advisors
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleSectionNavigation('services')}
              className={`transition-colors ${location.pathname === '/' ? 'text-primary-600' : 'text-secondary-600 hover:text-primary-600'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleSectionNavigation('about')}
              className={`transition-colors ${location.pathname === '/' ? 'text-primary-600' : 'text-secondary-600 hover:text-primary-600'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleSectionNavigation('testimonials')}
              className={`transition-colors ${location.pathname === '/' ? 'text-primary-600' : 'text-secondary-600 hover:text-primary-600'}`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => navigate('/newsletter')}
              className={`transition-colors ${location.pathname === '/newsletter' ? 'text-primary-600' : 'text-secondary-600 hover:text-primary-600'}`}
            >
              Newsletter
            </button>
            <button 
              onClick={() => handleSectionNavigation('contact')}
              className={`transition-colors ${location.pathname === '/' ? 'text-primary-600' : 'text-secondary-600 hover:text-primary-600'}`}
            >
              Contact
            </button>
            <div className="flex items-center ml-4">
              <a 
                href="https://www.exprealty.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/explogo.jpg" 
                  alt="eXp Realty" 
                  className="h-6 w-auto"
                  onError={(e) => {
                    // Fallback to text if image doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-xs font-semibold text-primary-600 hidden">
                  eXp Realty
                </span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-secondary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => handleSectionNavigation('services')}
                className="text-secondary-600 hover:text-primary-600 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleSectionNavigation('about')}
                className="text-secondary-600 hover:text-primary-600 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => handleSectionNavigation('testimonials')}
                className="text-secondary-600 hover:text-primary-600 transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  navigate('/newsletter')
                  setIsMenuOpen(false)
                }}
                className="text-secondary-600 hover:text-primary-600 transition-colors text-left"
              >
                Newsletter
              </button>
              <button
                onClick={() => handleSectionNavigation('contact')}
                className="text-secondary-600 hover:text-primary-600 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 