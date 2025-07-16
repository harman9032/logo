import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database, Users } from 'lucide-react';
import EditableSection from '../components/EditableSection';
import { usePageContent } from '../hooks/usePageContent';

export default function PrivacyPage() {
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
              <Shield className="h-8 w-8 text-orange-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">{content.privacy.title}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EditableSection
          id="privacy"
          title="Privacy Page Content"
          content={content.privacy}
          onSave={saveContent}
          isAdmin={isAdminLoggedIn}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <p className="text-gray-600 text-lg">
                  {content.privacy.lastUpdated}
                </p>
                <p className="text-gray-700 mt-4">
                  {content.privacy.introText}
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 text-orange-600 mr-2" />
                  {content.privacy.infoCollectionTitle}
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{content.privacy.personalInfoTitle}</h3>
                  <p className="text-gray-700 mb-4">
                    {content.privacy.personalInfoDescription}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{content.privacy.autoInfoTitle}</h3>
                  <p className="text-gray-700 mb-4">
                    {content.privacy.autoInfoDescription}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-orange-600 mr-2" />
                  {content.privacy.howWeUseTitle}
                </h2>
                
                <p className="text-gray-700 mb-4">
                  {content.privacy.howWeUseDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="h-6 w-6 text-orange-600 mr-2" />
                  {content.privacy.sharingTitle}
                </h2>
                
                <p className="text-gray-700 mb-4">
                  {content.privacy.sharingDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-orange-600 mr-2" />
                  {content.privacy.securityTitle}
                </h2>
                
                <p className="text-gray-700 mb-4">
                  {content.privacy.securityDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.privacy.cookiesTitle}</h2>
                
                <p className="text-gray-700 mb-4">
                  {content.privacy.cookiesDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.privacy.rightsTitle}</h2>
                
                <p className="text-gray-700 mb-4">
                  {content.privacy.rightsDescription}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.privacy.contactTitle}</h2>
                
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.privacy.changesTitle}</h2>
                <p className="text-gray-700">
                  {content.privacy.changesDescription}
                </p>
              </section>
            </div>
          </div>
        </EditableSection>
      </main>
    </div>
  );
}