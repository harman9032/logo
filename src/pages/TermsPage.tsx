import React from 'react';
import { ArrowLeft, Shield, FileText, Users } from 'lucide-react';
import EditableSection from '../components/EditableSection';
import { usePageContent } from '../hooks/usePageContent';

export default function TermsPage() {
  const { content, loading, saveContent } = usePageContent();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const adminData = localStorage.getItem('admin_session');
    if (adminData) {
      setIsAdminLoggedIn(true);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
              <h1 className="text-3xl font-bold text-gray-900">{content.terms.title}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EditableSection
          id="terms"
          title="Terms Page Content"
          content={content.terms}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  {content.terms.lastUpdated}
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-orange-600 mr-2" />
                  {content.terms.agreementTitle}
                </h2>
                <p className="text-gray-700 mb-4">
                  {content.terms.agreementText}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.servicesTitle}</h2>
                <p className="text-gray-700 mb-4">
                  {content.terms.servicesDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.paymentTitle}</h2>
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
                  {content.terms.paymentDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.deliveryTitle}</h2>
                <p className="text-gray-700 mb-4">
                  {content.terms.deliveryDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.revisionsTitle}</h2>
                <p className="text-gray-700 mb-4">
                  {content.terms.revisionsDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.refundTitle}</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
                  <h3 className="font-semibold text-green-800 mb-2">100% Money-Back Guarantee</h3>
                  <p className="text-green-700">
                    {content.terms.refundDescription}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.ipTitle}</h2>
                <p className="text-gray-700 mb-4">
                  {content.terms.ipDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.liabilityTitle}</h2>
                <p className="text-gray-700 mb-4">
                  {content.terms.liabilityDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.contactTitle}</h2>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.terms.changesTitle}</h2>
                <p className="text-gray-700">
                  {content.terms.changesDescription}
                </p>
              </section>
            </div>
          </div>
        </EditableSection>
      </main>
    </div>
  );
}