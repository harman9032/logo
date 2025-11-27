import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center text-red-900 hover:text-red-600 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-red-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information you provide directly to us and information automatically collected when you use our services.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name, email address, phone number</li>
                <li>Business, company and billing information</li>
                <li>Project details, service requests and attachments you share</li>
                <li>Communication preferences and support correspondence</li>
                <li>Usage data, device and analytics data (see Cookies & Tracking section)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide, operate, and improve our services and deliver requested projects</li>
                <li>Respond to inquiries, provide customer support, and communicate about your projects</li>
                <li>Process payments, invoices and manage billing</li>
                <li>Send transactional messages, updates, and — with your consent — marketing communications</li>
                <li>Prevent fraud, enforce our terms, and comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">3. Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement reasonable technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.
                These measures include encrypted storage for sensitive information, access controls, and regular security reviews.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While we strive to protect your information, no online service can guarantee 100% security. If you believe your data has been compromised, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">4. Cookies & Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We and our third-party partners use cookies, web beacons, pixels, and similar technologies to collect usage and device data, improve the site experience, and for analytics and advertising.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can manage or disable cookies through your browser settings — note that disabling certain cookies may impact site functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information with trusted third-party providers who perform services on our behalf (e.g., payment processors, analytics providers, email platforms). These providers process data under their own privacy policies and under our instructions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Examples include Google Analytics, payment gateways, advertising and marketing platforms, and CRM tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain personal information only as long as necessary to provide the services, fulfill legal obligations, resolve disputes, and enforce our agreements. Retention periods vary depending on the type of data and the purpose for processing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent to marketing communications</li>
                <li>Request restriction or portability of your data</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, contact us using the details in the Contact section. We may require verification before fulfilling requests.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us and we will take steps to delete that information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">9. International Transfers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may transfer and store personal information on servers located in other countries. When we do so, we take steps to ensure appropriate safeguards are in place to protect your privacy in accordance with applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. When changes are significant, we'll post a prominent notice and update the "Last updated" date at the top of this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, requests, or concerns about this policy or our data practices, please contact:
              </p>

              <div className="bg-brand-cream rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 font-semibold mb-2">Daily Creative Designs</p>
                <p className="text-gray-700 mb-1">Email: <a href="mailto:hello@dailycreativedesigns.com" className="text-red-900 hover:text-red-600 underline">hello@dailycreativedesigns.com</a></p>
                <p className="text-gray-700">Address: 123 Business Street, New Delhi, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
