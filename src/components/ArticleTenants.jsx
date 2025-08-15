import React, { useEffect } from 'react'

const ArticleTenants = () => {
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
              Do Your Tenants Respect Your Property Like You Would?
            </h1>
            <p className="text-xl text-secondary-600 mb-4">
              The Risks Absentee Owners Often Overlook
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-secondary-500">
                Published: May 2025 | By Lan Kim & CL Tang
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-secondary-700 mb-8">
              When you own a rental property but live far away, you're placing a lot of trust in your tenants — and in the systems you have to monitor the property.
            </p>
            <p className="text-lg text-secondary-700 mb-8">
              Most tenants are responsible and treat a home with care. But absentee ownership can create blind spots, and those gaps can lead to costly surprises.
            </p>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                What We've Seen Happen
              </h2>
            </div>
            <p className="text-secondary-700 mb-6">
              Here are a few of the most common issues absentee owners encounter:
            </p>

            <div className="space-y-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  1. Neglect of Maintenance
                </h3>
                <p className="text-secondary-700 mb-4">
                  Tenants may ignore small repairs, which can quickly snowball into bigger, more expensive problems — especially if you're not around to notice.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  2. Unauthorized Pets
                </h3>
                <p className="text-secondary-700 mb-4">
                  Without regular check-ins, it's easy for tenants to keep pets without permission. Even well-behaved animals can cause damage that eats into your profit.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  3. Unapproved Alterations
                </h3>
                <p className="text-secondary-700 mb-4">
                  Painting walls unusual colors, changing fixtures, or even modifying landscaping without your consent can hurt market appeal and require costly fixes later.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  4. Over-Occupancy
                </h3>
                <p className="text-secondary-700 mb-4">
                  Extra roommates or subletting without permission can strain your property's systems, increase wear and tear, and lead to liability issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  5. Deferred Upkeep
                </h3>
                <p className="text-secondary-700 mb-4">
                  Yard maintenance, gutter cleaning, and HVAC servicing are often overlooked — and by the time you find out, the damage may already be done.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Why This Matters for Your Bottom Line
              </h2>
            </div>
            <p className="text-secondary-700 mb-8">
              Every dollar spent repairing preventable damage is a dollar you don't pocket from rental income or the eventual sale.
            </p>
            <p className="text-secondary-700 mb-8">
              For absentee owners, these risks often go unnoticed until it's too late — reducing both your monthly cash flow and your property's resale value.
            </p>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                How We Help Remote Owners Protect Their Investment
              </h2>
            </div>
            <p className="text-secondary-700 mb-6">
              Our team works directly with out-of-state and overseas landlords to safeguard their Washington properties by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>Regular property check-ins (even with tenants in place) to spot small issues before they escalate.</li>
              <li>Coordinating licensed contractors for repairs and maintenance on your behalf.</li>
              <li>Ensuring lease compliance through communication, inspections, and follow-up.</li>
              <li>Preparing homes for market when you're ready to sell, from tenant coordination to staging.</li>
            </ul>
            <p className="text-secondary-700 mb-8">
              We've even handled sales entirely for owners living thousands of miles away — including full prep, marketing, and mobile notarization so they never had to step on a plane.
            </p>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Your Next Step
              </h2>
            </div>
            <p className="text-secondary-700 mb-4">
              If you're an absentee owner, now's the time to review your property's condition and your tenant's compliance with the lease.
            </p>
            <p className="text-secondary-700 mb-8">
              Whether you're planning to keep renting or considering a sale, a proactive strategy protects your investment and your profit.
            </p>

            <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Protect Your Investment?
              </h3>
              <p className="text-lg mb-6">
                Call us today at 425-275-6184 or reply to this email to learn how we help remote owners keep their properties in top shape — and ready to sell when the time is right.
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

export default ArticleTenants 