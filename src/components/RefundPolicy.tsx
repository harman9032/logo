import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle, X } from 'lucide-react';

const LAST_UPDATED = 'June 1, 2025';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-16 text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-3">Refund Policy</h1>
            <p className="text-green-100">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

          {/* Summary */}
          <section className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to delivering high-quality design work that meets your expectations. Every project includes
              unlimited revisions to ensure you are fully satisfied before it is considered complete. This policy outlines
              the circumstances under which refunds may or may not be available.
            </p>
          </section>

          {/* Eligible / Not eligible */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Eligibility at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Eligible for Refund
                </h3>
                <ul className="space-y-3">
                  {[
                    'Project not started within the agreed timeframe due to our delay',
                    'Deliverables significantly differ from the agreed brief after unlimited revisions',
                    'Technical error resulted in failure to deliver any files',
                    'Duplicate payment was charged in error',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                  <X className="h-5 w-5 text-red-500" />
                  Not Eligible for Refund
                </h3>
                <ul className="space-y-3">
                  {[
                    'Change of mind after project work has commenced',
                    'Delays caused by the client (late content, feedback, or approvals)',
                    'Dissatisfaction after the agreed revision rounds are exhausted',
                    'Partial completion if the client abandoned the project',
                    'Requests made after 14 days of final delivery',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed sections */}
          <div className="space-y-10">
            {[
              {
                title: '1. General Policy',
                body: (
                  <p className="text-gray-700 leading-relaxed">
                    Once work has commenced on a project, the payment is generally non-refundable. This is because our team
                    allocates time, expertise, and resources specifically to your project from the moment it begins. We
                    strongly encourage all clients to review their project brief carefully before approving a start.
                  </p>
                ),
              },
              {
                title: '2. Pre-Commencement Cancellations',
                body: (
                  <p className="text-gray-700 leading-relaxed">
                    If you cancel your order before any work has started and within 24 hours of payment, you may be eligible
                    for a full refund. Cancellation requests must be submitted in writing via email to{' '}
                    <a href="mailto:sales@dailycreativedesigns.com" className="text-green-700 hover:underline">sales@dailycreativedesigns.com</a>.
                  </p>
                ),
              },
              {
                title: '3. Unlimited Revisions Before Requesting a Refund',
                body: (
                  <p className="text-gray-700 leading-relaxed">
                    All our design packages include unlimited revisions. Before requesting a refund due to dissatisfaction,
                    we require clients to allow us the opportunity to make revisions. A refund will not be granted simply
                    because you dislike the initial concepts — we will continue working with you until the result aligns
                    with your brief.
                  </p>
                ),
              },
              {
                title: '4. Dispute Resolution Process',
                body: (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-4">If you believe you are entitled to a refund:</p>
                    <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                      <li>Email us at <a href="mailto:sales@dailycreativedesigns.com" className="text-green-700 hover:underline">sales@dailycreativedesigns.com</a> with your order details and reason for the request.</li>
                      <li>Our team will review your request within 3 business days.</li>
                      <li>We may request additional information or offer further revisions to resolve the issue.</li>
                      <li>If a refund is approved, it will be processed within 5–10 business days to the original payment method.</li>
                    </ol>
                  </>
                ),
              },
              {
                title: '5. Partial Refunds',
                body: (
                  <p className="text-gray-700 leading-relaxed">
                    In cases where work is partially complete, we may offer a partial refund based on the proportion of
                    work not yet delivered. This is assessed on a case-by-case basis.
                  </p>
                ),
              },
              {
                title: '6. Package Upgrades',
                body: (
                  <p className="text-gray-700 leading-relaxed">
                    If you upgrade from a lower to a higher package, you will only be charged the difference in price.
                    Downgrading after work has commenced is not eligible for a refund of the price difference.
                  </p>
                ),
              },
              {
                title: '7. Contact Us',
                body: (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      For any refund enquiries or disputes, please get in touch:
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="font-bold text-gray-900 mb-2">Daily Creative Designs</p>
                      <p className="text-gray-700 mb-1">Email: <a href="mailto:sales@dailycreativedesigns.com" className="text-green-700 hover:underline">sales@dailycreativedesigns.com</a></p>
                      <p className="text-gray-700 mb-1">Phone: <a href="tel:+917837319660" className="text-green-700 hover:underline">+91 78373 19660</a></p>
                      <p className="text-gray-700">WhatsApp: <a href="https://wa.me/917837319660" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">+91 78373 19660</a></p>
                    </div>
                  </>
                ),
              },
            ].map((s) => (
              <section key={s.title} className="border-b border-gray-100 pb-10 last:border-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
