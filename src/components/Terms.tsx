import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-brand-cream py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center text-green-900 hover:text-green-600 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-green-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            {/* 1. Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions.
                If you do not agree, you must not use our services.
              </p>
            </section>

            {/* 2. Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">2. Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide creative and digital services including (but not limited to) logo design, landing page development,
                Shopify & WordPress website creation, and digital marketing. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each service engagement will be governed by a separate proposal, contract, or agreement specifying scope,
                timelines, deliverables, and payment terms.
              </p>
            </section>

            {/* 3. Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All intellectual property rights in materials, designs, and deliverables created during the project remain
                our property until full payment is received. Upon payment, ownership of final deliverables transfers to you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to display completed work in our portfolio or marketing materials, unless otherwise agreed in writing.
              </p>
            </section>

            {/* 4. Payment Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment terms, milestones, and methods will be defined in your specific project agreement.
                Unless otherwise stated, payments are non-refundable once the project has begun.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Delayed payments may result in project suspension and additional fees. We reserve the right to retain ownership of all materials until full payment is received.
              </p>
            </section>

            {/* 5. Revisions & Delivery */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">5. Revisions & Delivery</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a specific number of revisions as mentioned in the service package or agreement.
                Additional revisions beyond the agreed limit will incur extra charges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All deliverables are provided in digital format unless otherwise agreed. Turnaround time depends on project complexity and client responsiveness.
              </p>
            </section>

            {/* 6. Client Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">6. Client Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The client must provide all necessary materials, content, and feedback promptly.
                Delays in communication or content delivery may affect project timelines and costs.
              </p>
            </section>

            {/* 7. Refund Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">7. Refund Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once work has commenced, payments are non-refundable except in cases where we fail to deliver services as agreed.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Refund eligibility will be evaluated on a case-by-case basis and is subject to management approval.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are not liable for any indirect, incidental, or consequential damages arising from the use or inability
                to use our services, including but not limited to loss of profits, data, or goodwill.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our total liability will not exceed the amount paid for the specific service that gave rise to the claim.
              </p>
            </section>

            {/* 9. Confidentiality */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">9. Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Both parties agree to maintain confidentiality regarding all proprietary or sensitive information shared during
                the course of the project, including business strategies, client data, and designs.
              </p>
            </section>

            {/* 10. Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate the agreement with written notice if the other party breaches any material term of
                the agreement and fails to remedy it within a reasonable period.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, all outstanding payments for completed work must be settled immediately.
              </p>
            </section>

            {/* 11. Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions are governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
              </p>
            </section>

            {/* 12. Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-green-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>

              <div className="bg-brand-cream rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 font-semibold mb-2">Career Clarity Webinar</p>
                <p className="text-gray-700 mb-1">Email: <a href="mailto:hello@dailycreativedesigns.com" className="text-green-900 hover:text-green-600 underline">hello@dailycreativedesigns.com</a></p>
                <p className="text-gray-700">Address: 123 Business Street, New Delhi, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
