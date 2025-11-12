
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-emerald-200">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">
            Your message has been received successfully. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-emerald-50 rounded-lg p-4 mb-6 border border-emerald-200">
          <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• We'll review your requirements</li>
            <li>• Prepare a custom proposal</li>
            <li>• Contact you within 24 hours</li>
            <li>• Schedule a consultation call</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full bg-gold-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <p className="text-sm text-gray-600">
            Need immediate assistance? Call us at{' '}
            <a href="tel:+917837319660" className="text-emerald-700 hover:underline font-semibold">
              +91 78373 19660
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}