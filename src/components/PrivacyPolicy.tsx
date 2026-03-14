import Navbar from './Navbar';
import Footer from './Footer';

const LAST_UPDATED = 'June 1, 2025';

const sections = [
  {
    title: '1. Information We Collect',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          We collect information you provide directly to us and information automatically collected when you use our services.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Name, email address, and phone number</li>
          <li>Business name, company, and billing information</li>
          <li>Project details, service requests, and attachments you share</li>
          <li>Communication preferences and support correspondence</li>
          <li>Usage data, device info, and analytics data (see Cookies section)</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How We Use Your Information',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">We use collected information to:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Deliver, operate, and improve our design services</li>
          <li>Respond to enquiries and provide customer support</li>
          <li>Process payments, invoices, and manage billing</li>
          <li>Send transactional messages and — with your consent — marketing communications</li>
          <li>Prevent fraud, enforce our terms, and comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Data Protection',
    content: (
      <p className="text-gray-700 leading-relaxed">
        We implement reasonable technical and organizational measures to protect personal data against unauthorized access,
        alteration, disclosure, or destruction — including encrypted storage, access controls, and regular security reviews.
        While we strive to protect your information, no online service can guarantee 100% security. If you believe your
        data has been compromised, please contact us immediately.
      </p>
    ),
  },
  {
    title: '4. Cookies & Tracking Technologies',
    content: (
      <p className="text-gray-700 leading-relaxed">
        We and our third-party partners use cookies, web beacons, and similar technologies to collect usage data, improve
        the site experience, and for analytics and advertising. You can manage or disable cookies through your browser
        settings — note that disabling certain cookies may impact site functionality.
      </p>
    ),
  },
  {
    title: '5. Third-Party Services',
    content: (
      <p className="text-gray-700 leading-relaxed">
        We may share information with trusted third-party providers who perform services on our behalf (e.g., payment
        processors, analytics providers, email platforms). Examples include Google Analytics, payment gateways, and CRM tools.
        These providers process data under their own privacy policies and under our instructions.
      </p>
    ),
  },
  {
    title: '6. Data Retention',
    content: (
      <p className="text-gray-700 leading-relaxed">
        We retain personal information only as long as necessary to provide services, fulfill legal obligations, resolve
        disputes, and enforce agreements. Retention periods vary depending on data type and purpose.
      </p>
    ),
  },
  {
    title: '7. Your Rights',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Access the personal information we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent to marketing communications</li>
          <li>Request restriction or portability of your data</li>
        </ul>
        <p className="text-gray-700">
          To exercise these rights, contact us using the details below. We may require identity verification before fulfilling requests.
        </p>
      </>
    ),
  },
  {
    title: '8. Children\'s Privacy',
    content: (
      <p className="text-gray-700 leading-relaxed">
        Our services are not intended for children under 13. We do not knowingly collect personal information from children.
        If you believe we have collected such information, please contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    title: '9. Changes to This Policy',
    content: (
      <p className="text-gray-700 leading-relaxed">
        We may update this Privacy Policy from time to time. When changes are significant, we will post a notice and update
        the "Last updated" date at the top of this page.
      </p>
    ),
  },
  {
    title: '10. Contact Us',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have questions, requests, or concerns about this policy or our data practices, please contact:
        </p>
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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-16 text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-3">Privacy Policy</h1>
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
