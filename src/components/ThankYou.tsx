
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-green-200">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">You're Registered!</h1>
          <p className="text-gray-600">
            Thank you for registering for our Career Clarity Webinar. Check your email for confirmation details.
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
          <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Check your email for webinar link</li>
            <li>Add the date to your calendar</li>
            <li>Download the bonus materials</li>
            <li>Join live for Q&A session</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full btn-gold-gradient text-green-900 px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <p className="text-sm text-gray-600">
            Have questions? Call us at{' '}
            <a href="tel:+917837319660" className="text-green-700 hover:underline font-semibold">
              +91 78373 19660
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
