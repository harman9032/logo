import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CookiesPolicyProps {
  onBack: () => void;
}

export default function CookiesPolicy({ onBack }: CookiesPolicyProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-emerald-900 hover:text-gold-600 mb-8 font-semibold transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-emerald-900 mb-4">
            Cookies Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Daily Creative Designs uses cookies to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve our website performance</li>
                <li>Provide personalized content and advertising</li>
                <li>Analyze website traffic and user behavior</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Types of Cookies We Use</h2>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  We use analytics cookies to understand how visitors interact with our website. This helps us improve our website and services. We may use Google Analytics or similar services.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. They may be set by us or by third-party providers.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  These cookies allow our website to remember choices you make and provide enhanced, more personalized features.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that also set cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Facebook Pixel for advertising and analytics</li>
                <li>Google Ads for advertising</li>
                <li>Other marketing and analytics platforms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">How to Control Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Most browsers allow you to refuse or accept cookies</li>
                <li>You can delete cookies already stored on your device</li>
                <li>You can set your browser to notify you when cookies are being sent</li>
                <li>Please note that disabling cookies may affect the functionality of our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Browser Settings</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To learn more about how to manage cookies in your specific browser, please visit:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Chrome: <span className="text-emerald-900 font-medium">chrome://settings/cookies</span></li>
                <li>Firefox: <span className="text-emerald-900 font-medium">about:preferences#privacy</span></li>
                <li>Safari: <span className="text-emerald-900 font-medium">Preferences &gt; Privacy</span></li>
                <li>Edge: <span className="text-emerald-900 font-medium">edge://settings/privacy</span></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-700 font-semibold mb-2">Daily Creative Designs</p>
                <p className="text-gray-700">Email: <a href="mailto:hello@dailycreativedesigns.com" className="text-emerald-900 hover:text-gold-600 underline">hello@dailycreativedesigns.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
