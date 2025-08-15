import React, { useEffect } from 'react'

const ArticleKathy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="container-max py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Meet Kathy: She Sold Her WA Home Without Leaving China
            </h1>
            <p className="text-xl text-secondary-600 mb-4">
              From Overseas Stress to a Smooth, Profitable Sale
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-secondary-500">
                Published: June 2025 | By Lan Kim & CL Tang
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-secondary-700 mb-8">
              When Kathy first called us, she was thousands of miles away in China — and owned a tenant-occupied home in Washington she wanted to sell.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              She was worried.
            </p>
            <ul className="list-disc pl-6 mb-8 text-secondary-700">
              <li>How would she coordinate with her tenant from another country?</li>
              <li>Who would handle the home prep to get it market-ready?</li>
              <li>How could she manage paperwork without flying back?</li>
            </ul>
            <p className="text-lg text-secondary-700 mb-8">
              For many sellers in her position, these questions can be overwhelming enough to delay selling altogether. But in 2025's strong market, waiting can mean missing out on peak profits.
            </p>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                The Challenge
              </h2>
            </div>
            <p className="text-secondary-700 mb-4">
              Kathy's situation came with multiple moving parts:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>Tenant in place who needed proper notice and a smooth transition</li>
              <li>Home preparation required to make the property shine and attract top-dollar offers</li>
              <li>Legal and logistical barriers of signing and closing from another country</li>
            </ul>
            <p className="text-secondary-700 mb-8">
              The risk was that without careful coordination, the sale could be delayed, stress could build, and she might leave money on the table.
            </p>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                The Solution We Delivered
              </h2>
            </div>
            <p className="text-secondary-700 mb-6">
              Our team handled every step from start to finish, so Kathy never had to get on a plane:
            </p>

            <div className="space-y-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  1. Tenant Coordination
                </h3>
                <p className="text-secondary-700 mb-4">
                  We communicated directly with the tenant, set a mutually agreeable timeline, and ensured a smooth move-out process that maintained goodwill and avoided delays.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  2. Home Prep for Maximum Profit
                </h3>
                <p className="text-secondary-700 mb-4">
                  We oversaw all improvements — from cleaning and landscaping to minor repairs and staging — to make the property irresistible to buyers.
                </p>
                <p className="text-secondary-700 mb-4">
                  Every decision was made with market data in mind to ensure Kathy got the highest possible return.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  3. Market Readiness & Targeted Launch
                </h3>
                <p className="text-secondary-700 mb-4">
                  Once prepped, the home hit the market at the optimal time with a pricing and marketing strategy designed to spark competition.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  4. Mobile Notary Service
                </h3>
                <p className="text-secondary-700 mb-4">
                  We arranged a mobile notary in China so Kathy could sign closing documents without leaving her home.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                The Outcome
              </h2>
            </div>
            <p className="text-secondary-700 mb-4">
              The result?
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>Multiple offers within days</li>
              <li>A sale price above list</li>
              <li>A quick, hassle-free closing — all while Kathy stayed comfortably at home in China</li>
            </ul>
            <p className="text-secondary-700 mb-8">
              She turned her Washington property into cash in the bank without a single international flight or sleepless night over logistics.
            </p>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Why This Matters for You
              </h2>
            </div>
            <p className="text-secondary-700 mb-4">
              If you own property in Washington but live out of the area — whether across the state or across the world — selling doesn't have to be stressful or complicated.
            </p>
            <p className="text-secondary-700 mb-4">
              With the right systems and team, we can:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>Coordinate with tenants</li>
              <li>Manage all home prep and marketing</li>
              <li>Handle closing details so you never need to travel</li>
            </ul>

            <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Your Options?
              </h3>
              <p className="text-lg mb-6">
                If you're curious what your home could sell for in today's market, call or email us. We can walk you through the exact process we used for Kathy and how it could work for you.
              </p>
              <a 
                href="tel:425-275-6184"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Call Now
              </a>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-secondary-600 text-center">
                <strong>Lan Kim & CL Tang</strong> | eXp Realty | 425-275-6184<br />
                Helping WA homeowners make the most of their investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleKathy 