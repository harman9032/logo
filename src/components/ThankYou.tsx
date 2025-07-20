import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">
            Your message has been received successfully. We'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• We'll review your requirements</li>
            <li>• Prepare a custom proposal</li>
            <li>• Contact you within 24 hours</li>
            <li>• Schedule a consultation call</li>
          </ul>
        </div>
        
        <div className="space-y-3">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <p className="text-sm text-gray-500">
            Need immediate assistance? Call us at{' '}
            <a href="tel:+919876543210" className="text-blue-600 hover:underline">
              +91 98765 43210
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}