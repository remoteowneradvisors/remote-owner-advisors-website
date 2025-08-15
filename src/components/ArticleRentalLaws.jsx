import React, { useEffect } from 'react'

const ArticleRentalLaws = () => {
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
              Out-of-State Owners: Are You Up-to-Date on WA's Rental Laws?
            </h1>
            <p className="text-xl text-secondary-600 mb-4">
              Why Being Compliant Matters Now More Than Ever
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-secondary-500">
                Published: August 2025 | By Lan Kim & CL Tang
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-secondary-700 mb-8">
              If you own rental property in Washington but live out of state, staying ahead of legal changes is critical — especially now.
            </p>
            <p className="text-lg text-secondary-700 mb-8">
              In May 2025, House Bill 1217 went into effect, bringing landmark rent-stabilization rules that apply across the state. These changes are already impacting landlords' bottom lines, and enforcement is active.
            </p>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                What's New? Key Highlights of HB 1217
              </h2>
            </div>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>
                <strong>Annual Rent Cap:</strong><br />
                Landlords can raise rent by up to 10% per year, or 7% plus inflation, whichever is lower.
              </li>
              <li>
                <strong>First-Year Restriction:</strong><br />
                No rent increases are allowed during the first 12 months of any tenancy.
              </li>
              <li>
                <strong>Higher Barrier for Manufactured Homes:</strong><br />
                Rent hikes for manufactured/mobile homes are capped at 5% per year.
              </li>
              <li>
                <strong>Long-Term Rule:</strong><br />
                The law is in effect through 2040, with new caps announced annually. For example, 2026's cap is expected to be 9.683%.
              </li>
            </ul>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Active Enforcement: Landlords Are Being Fined
              </h2>
            </div>
            <p className="text-secondary-700 mb-4">
              This isn't just theory — it's happening now.
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>The Attorney General's office recently fined eight landlords $2,000 each for exceeding the legal rent increase limits.</li>
              <li>Those landlords also had to refund tenants for the overages.</li>
              <li>Cases ranged across Washington, from Kennewick to Edmonds, affecting over 250 households.</li>
            </ul>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Why This Matters for Out-of-State Owners
              </h2>
            </div>
            <p className="text-secondary-700 mb-4">
              If you're not physically in Washington, it's easy to miss changes like these — but being unaware won't protect you from penalties.
            </p>
            <p className="text-secondary-700 mb-4">
              For absentee owners, the stakes are high:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>Violations can result in fines, required refunds, and negative publicity.</li>
              <li>Non-compliance could impact your property's sale timeline or buyer confidence if you decide to sell.</li>
            </ul>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                How We Help Our Clients Avoid Risk
              </h2>
            </div>
            <p className="text-secondary-700 mb-4">
              We're not property managers — but we work with absentee and out-of-state owners to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-secondary-700">
              <li>Keep them informed on the latest WA housing laws and market conditions.</li>
              <li>Connect them with vetted local professionals (including attorneys and property managers) when compliance issues arise.</li>
              <li>Provide market strategies that align with current regulations, so when it's time to sell, your property is positioned for a smooth, profitable transaction.</li>
            </ul>

            <div className="border-l-4 border-primary-600 pl-6 mb-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Take Action Now
              </h2>
            </div>
            <p className="text-secondary-700 mb-8">
              If you've raised rent since May 2025 or are considering a sale in the next 12 months, it's worth making sure you're in the clear legally before moving forward.
            </p>

            <div className="bg-primary-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need Legal Compliance Guidance?
              </h3>
              <p className="text-lg mb-6">
                Call or text us at 425-275-6184 or reply to this email to schedule a quick consultation.
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
                Your trusted resource for Washington real estate market insight and compliance awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleRentalLaws 