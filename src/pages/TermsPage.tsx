import React from 'react';
import { ArrowLeft, Shield, FileText, Users } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <a 
              href="/"
              className="flex items-center text-orange-600 hover:text-orange-700 transition-colors mr-6"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </a>
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-orange-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 text-lg">
                Last updated: January 10, 2025
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-orange-600 mr-2" />
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Daily Creative Designs services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
              <p className="text-gray-700 mb-4">
                Daily Creative Designs provides digital marketing services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Logo design and branding services</li>
                <li>Landing page development</li>
                <li>Meta (Facebook/Instagram) advertising campaigns</li>
                <li>Lead generation services</li>
                <li>Digital marketing consultation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-orange-800 mb-2">Package Pricing</h3>
                <ul className="text-orange-700 space-y-1">
                  <li>• Starter Package: ₹4,999 (one-time)</li>
                  <li>• Professional Package: ₹9,999 (one-time)</li>
                  <li>• Enterprise Package: ₹19,999 (one-time)</li>
                  <li>• Monthly Lead Generation: ₹9,999/month</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">
                Payment is required upfront for one-time packages. Monthly services are billed in advance. All prices are in Indian Rupees (INR) and include applicable taxes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Timeline</h2>
              <p className="text-gray-700 mb-4">
                Standard delivery timelines are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Logo concepts: 2-3 business days</li>
                <li>Landing page: 5-7 business days</li>
                <li>Complete package: 7-10 business days</li>
                <li>Meta ads setup: 3-5 business days</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Timelines may vary based on project complexity and client feedback response time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Revisions Policy</h2>
              <p className="text-gray-700 mb-4">
                We offer the following revision policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Logo design: Unlimited revisions until satisfaction</li>
                <li>Landing pages: Up to 3 rounds of revisions</li>
                <li>Additional revisions may incur extra charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Policy</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-green-800 mb-2">100% Money-Back Guarantee</h3>
                <p className="text-green-700">
                  We offer a 100% money-back guarantee within 30 days of project completion if you're not completely satisfied with our work.
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Refund requests must be submitted in writing with specific reasons for dissatisfaction. Partial work completed will be considered in refund calculations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, all intellectual property rights for the delivered work transfer to the client. Daily Creative Designs retains the right to showcase completed work in our portfolio unless specifically requested otherwise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Daily Creative Designs shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> hello@dailycreativedesigns.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +91 98765 43210
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> Mumbai, India
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}