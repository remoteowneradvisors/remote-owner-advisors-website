import React, { useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Newsletter = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    }, 100)
  }

  const blogPosts = [
    {
      id: 1,
      title: "Out-of-State Owners: Are You Up-to-Date on WA's Rental Laws?",
      excerpt: "Why Being Compliant Matters Now More Than Ever. If you own rental property in Washington but live out of state, staying ahead of legal changes is critical — especially now.",
      date: "August 2025",
      category: "Legal Compliance",
      link: "/article-rental-laws"
    },
    {
      id: 2,
      title: "WA Homeowners: 2025 May Be Your Peak Selling Year",
      excerpt: "High Equity + Low Inventory = Your Window for Maximum Profit. If you're a homeowner in Washington State, you might be sitting on an incredible opportunity. 2025 is shaping up to be one of the strongest seller markets we've seen in years.",
      date: "July 2025",
      category: "Market Insights",
      link: "/article-2025"
    },
    {
      id: 3,
      title: "Meet Kathy: She Sold Her WA Home Without Leaving China",
      excerpt: "From Overseas Stress to a Smooth, Profitable Sale. When Kathy first called us, she was thousands of miles away in China — and owned a tenant-occupied home in Washington she wanted to sell.",
      date: "June 2025",
      category: "Success Stories",
      link: "/article-kathy"
    },
    {
      id: 4,
      title: "Do Your Tenants Respect Your Property Like You Would?",
      excerpt: "The Risks Absentee Owners Often Overlook. When you own a rental property but live far away, you're placing a lot of trust in your tenants — and in the systems you have to monitor the property.",
      date: "May 2025",
      category: "Property Management",
      link: "/article-tenants"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 section-padding">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
                Real Estate Newsletter
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 mb-8 leading-relaxed">
                Stay informed with the latest market insights, investment opportunities, and expert advice from Remote Owner Advisors
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Content */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                  Latest Market Insights & Resources
                </h2>
                
                <div className="space-y-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-secondary-500 text-sm ml-4">
                          {post.date}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                        {post.title}
                      </h3>
                      
                      <p className="text-secondary-600 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      {post.link ? (
                        <Link 
                          to={post.link}
                          className="text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                        >
                          Read More →
                        </Link>
                      ) : (
                        <button className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                          Read More →
                        </button>
                      )}
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  {/* Newsletter Signup */}
                  <div className="bg-primary-50 p-8 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      Get the latest market updates, investment insights, and real estate tips delivered to your inbox.
                    </p>
                    
                    {/* Simple Email Form */}
                    <form 
                      action="https://formsubmit.co/info@remoteowneradvisors.com" 
                      method="POST"
                      className="space-y-4"
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="hidden"
                        name="_subject"
                        value="New Newsletter Subscription"
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
                        Subscribe
                      </button>
                    </form>
                  </div>

                  {/* Quick Links */}
                  <div className="bg-primary-50 p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">
                      Quick Resources
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.redfin.com/city/16163/WA/Seattle/housing-market" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                          Market Reports
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zillow.com/how-much-is-my-home-worth/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                          Home Value Estimator
                        </a>
                      </li>
                      <li>
                        <a href="https://www.mortgagecalculator.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                          Mortgage Calculator
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zillow.com/home-sale-calculator/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                          Net Proceeds Calculator
                        </a>
                      </li>
                      <li>
                        <a href="https://www.exprealty.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 transition-colors">
                          Property Search
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-primary-50">
          <div className="container-max">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-secondary-600 mb-8">
                Whether you're buying, selling, or investing, our team is here to help you achieve your real estate goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Newsletter 