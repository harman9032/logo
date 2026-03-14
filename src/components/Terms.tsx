import Navbar from './Navbar';
import Footer from './Footer';

const LAST_UPDATED = 'June 1, 2025';

const sections = [
  {
    title: '1. Agreement to Terms',
    content: (
      <p className="text-gray-700 leading-relaxed">
        By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions.
        If you do not agree, you must not use our services.
      </p>
    ),
  },
  {
    title: '2. Services',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Daily Creative Designs provides creative and digital services including — but not limited to — logo design,
          AI-powered website development, landing pages, Shopify & WordPress sites, and digital marketing strategy.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Each engagement is governed by a separate proposal or agreement specifying scope, timelines, deliverables, and
          payment terms.
        </p>
      </>
    ),
  },
  {
    title: '3. Intellectual Property',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          All intellectual property rights in materials, designs, and deliverables created during a project remain our
          property until full payment is received. Upon receipt of final payment, ownership of final deliverables
          transfers to you.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to display completed work in our portfolio or marketing materials, unless otherwise agreed
          in writing.
        </p>
      </>
    ),
  },
  {
    title: '4. Payment Terms',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Payment terms, milestones, and methods are defined in your specific project agreement. Unless otherwise stated,
          payments are non-refundable once project work has commenced.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Delayed payments may result in project suspension. We reserve the right to retain all materials until full
          payment is received.
        </p>
      </>
    ),
  },
  {
    title: '5. Revisions & Delivery',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          We offer unlimited revisions on all design packages until you are 100% satisfied. Revisions must relate to the
          original project brief. Work outside the original brief may be quoted separately.
        </p>
        <p className="text-gray-700 leading-relaxed">
          All deliverables are provided in digital format unless otherwise agreed. Turnaround times depend on project
          complexity and client responsiveness in providing feedback and materials.
        </p>
      </>
    ),
  },
  {
    title: '6. Client Responsibilities',
    content: (
      <p className="text-gray-700 leading-relaxed">
        The client must provide all necessary materials, content, brand references, and feedback promptly. Delays caused
        by late client responses or missing content may affect project timelines. We are not liable for delays caused by
        the client.
      </p>
    ),
  },
  {
    title: '7. Refund Policy',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once work has commenced, payments are generally non-refundable. Refunds may be considered if we fail to deliver
          the agreed services. Please see our full{' '}
          <a href="/refund-policy" className="text-green-700 hover:underline font-semibold">Refund Policy</a>
          {' '}for details.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Refund eligibility is evaluated on a case-by-case basis and is subject to management approval.
        </p>
      </>
    ),
  },
  {
    title: '8. Limitation of Liability',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to
          use our services, including loss of profits, data, or goodwill.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our total liability will not exceed the amount paid for the specific service that gave rise to the claim.
        </p>
      </>
    ),
  },
  {
    title: '9. Confidentiality',
    content: (
      <p className="text-gray-700 leading-relaxed">
        Both parties agree to maintain confidentiality regarding all proprietary or sensitive information shared during
        the course of a project — including business strategies, client data, and unreleased designs.
      </p>
    ),
  },
  {
    title: '10. Termination',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Either party may terminate the agreement with written notice if the other party breaches a material term and
          fails to remedy it within a reasonable period.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Upon termination, all outstanding payments for completed work must be settled immediately.
        </p>
      </>
    ),
  },
  {
    title: '11. Governing Law',
    content: (
      <p className="text-gray-700 leading-relaxed">
        These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of
        the courts of New Delhi, India.
      </p>
    ),
  },
  {
    title: '12. Contact Us',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">If you have any questions about these Terms, please contact us:</p>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="font-bold text-gray-900 mb-2">Daily Creative Designs</p>
          <p className="text-gray-700 mb-1">Email: <a href="mailto:sales@dailycreativedesigns.com" className="text-green-700 hover:underline">sales@dailycreativedesigns.com</a></p>
          <p className="text-gray-700 mb-1">Phone: <a href="tel:+917837319660" className="text-green-700 hover:underline">+91 78373 19660</a></p>
          <p className="text-gray-700">Location: India</p>
        </div>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-16 text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-3">Terms & Conditions</h1>
            <p className="text-green-100">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-gray-100 pb-10 last:border-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
