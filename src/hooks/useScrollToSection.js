import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollToSection = () => {
  const location = useLocation()

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash
      const elementId = location.hash.substring(1)
      const element = document.getElementById(elementId)
      
      if (element) {
        // Add a small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }, 100)
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [location.pathname, location.hash])
} 