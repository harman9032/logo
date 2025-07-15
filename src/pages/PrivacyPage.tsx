import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, Users } from 'lucide-react';

export default function PrivacyPage() {
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
              <Shield className="h-8 w-8 text-orange-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
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
              <p className="text-gray-700 mt-4">
                At Daily Creative Designs, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 text-orange-600 mr-2" />
                Information We Collect
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Fill out contact forms or request quotes</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Book consultation calls</li>
                  <li>Engage with our customer support</li>
                  <li>Create an account or use our services</li>
                </ul>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Information includes:</h4>
                  <ul className="text-blue-700 space-y-1">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Business information and requirements</li>
                    <li>• Payment and billing information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you visit our website, we may automatically collect certain information about your device and usage:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website information</li>
                  <li>Device information and screen resolution</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-orange-600 mr-2" />
                How We Use Your Information
              </h2>
              
              <p className="text-gray-700 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 mb-3">Service Delivery</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Provide requested services</li>
                    <li>• Process payments</li>
                    <li>• Send project updates</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-800 mb-3">Communication</h3>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Send marketing materials</li>
                    <li>• Newsletter updates</li>
                    <li>• Service announcements</li>
                    <li>• Follow-up communications</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-orange-800 mb-3">Website Improvement</h3>
                <p className="text-orange-700">
                  We analyze website usage to improve our services, optimize user experience, and develop new features that better serve our clients.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-orange-600 mr-2" />
                Information Sharing and Disclosure
              </h2>
              
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">Service Providers</h3>
                  <p className="text-gray-700">
                    We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our clients.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800">Legal Requirements</h3>
                  <p className="text-gray-700">
                    We may disclose information when required by law or to protect our rights, property, or safety, or that of our clients or others.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800">Business Transfers</h3>
                  <p className="text-gray-700">
                    In the event of a merger, acquisition, or sale of assets, customer information may be transferred as part of the transaction.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-orange-600 mr-2" />
                Data Security
              </h2>
              
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">Security Measures Include:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure server infrastructure</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Access controls and authentication</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Essential Cookies</h3>
                  <p className="text-blue-700 text-sm">
                    Required for website functionality and cannot be disabled.
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-green-800 mb-2">Analytics Cookies</h3>
                  <p className="text-green-700 text-sm">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-800 mb-2">Marketing Cookies</h3>
                  <p className="text-purple-700 text-sm">
                    Used to deliver relevant advertisements and track campaign performance.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>
              
              <p className="text-gray-700 mb-4">
                You have certain rights regarding your personal information:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Access and Update</h3>
                    <p className="text-gray-700">Request access to or correction of your personal information.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Opt-Out</h3>
                    <p className="text-gray-700">Unsubscribe from marketing communications at any time.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Data Deletion</h3>
                    <p className="text-gray-700">Request deletion of your personal information (subject to legal requirements).</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">General Inquiries</h3>
                    <p className="text-gray-700 mb-1">
                      <strong>Email:</strong> hello@dailycreativedesigns.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> +91 98765 43210
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Privacy Officer</h3>
                    <p className="text-gray-700 mb-1">
                      <strong>Email:</strong> privacy@dailycreativedesigns.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Address:</strong> Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}