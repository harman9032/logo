import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>Last updated: July 20, 2025</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Business information</li>
            <li>Communication preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to your requests and inquiries</li>
            <li>Send you marketing communications (with your consent)</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal information.</p>
        </div>
      </div>
    </div>
  );
}