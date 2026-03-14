
const LAST_UPDATED = 'June 1, 2025';

const sections = [
  {
    title: 'What Are Cookies?',
    content: (
      <p className="text-gray-700 leading-relaxed">
        Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely
        used to make websites work more efficiently and provide information to site owners.
      </p>
    ),
  },
  {
    title: 'How We Use Cookies',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">Daily Creative Designs uses cookies to:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Remember your preferences and settings</li>
          <li>Understand how you use our website</li>
          <li>Improve website performance and user experience</li>
          <li>Provide personalised content and relevant advertising</li>
          <li>Analyse website traffic and user behaviour patterns</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Types of Cookies We Use',
    content: (
      <div className="space-y-6">
        {[
          {
            name: 'Essential Cookies',
            desc: 'Necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. The site cannot function correctly without these cookies.',
            badge: 'Always Active',
            badgeColor: 'bg-green-100 text-green-700',
          },
          {
            name: 'Analytics Cookies',
            desc: 'Help us understand how visitors interact with our website. We use Google Analytics and similar tools to collect aggregated data that helps improve our content and services.',
            badge: 'Optional',
            badgeColor: 'bg-amber-100 text-amber-700',
          },
          {
            name: 'Marketing Cookies',
            desc: 'Used to track your online activity and help advertisers deliver more relevant advertising. These may be set by us or by third-party advertising networks.',
            badge: 'Optional',
            badgeColor: 'bg-amber-100 text-amber-700',
          },
          {
            name: 'Functionality Cookies',
            desc: 'Allow our website to remember choices you make (such as language or region) and provide enhanced, personalised features.',
            badge: 'Optional',
            badgeColor: 'bg-amber-100 text-amber-700',
          },
        ].map((type) => (
          <div key={type.name} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-bold text-gray-900">{type.name}</h3>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${type.badgeColor}`}>{type.badge}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Third-Party Cookies',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          We may use third-party services that also set cookies on your device, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Google Analytics — website analytics</li>
          <li>Facebook Pixel — advertising and conversion tracking</li>
          <li>Google Ads — search advertising</li>
          <li>Other marketing and analytics platforms as needed</li>
        </ul>
      </>
    ),
  },
  {
    title: 'How to Control Cookies',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">You can control and manage cookies in several ways:</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
          <li>Most browsers allow you to refuse or accept cookies via settings</li>
          <li>You can delete cookies already stored on your device</li>
          <li>You can set your browser to notify you when cookies are being set</li>
        </ul>
        <p className="text-gray-600 text-sm italic">
          Please note: disabling certain cookies may affect the functionality of our website.
        </p>
      </>
    ),
  },
  {
    title: 'Browser Cookie Settings',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">To manage cookies in your browser:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { browser: 'Chrome', path: 'Settings → Privacy & Security → Cookies' },
            { browser: 'Firefox', path: 'Preferences → Privacy & Security' },
            { browser: 'Safari', path: 'Preferences → Privacy' },
            { browser: 'Edge', path: 'Settings → Privacy, Search & Services' },
          ].map((b) => (
            <div key={b.browser} className="bg-gray-50 rounded-lg px-4 py-3 border border-gray-200">
              <span className="font-bold text-gray-900">{b.browser}: </span>
              <span className="text-gray-600 text-sm">{b.path}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    title: 'Updates to This Policy',
    content: (
      <p className="text-gray-700 leading-relaxed">
        We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated
        revision date.
      </p>
    ),
  },
  {
    title: 'Contact Us',
    content: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you have any questions about our use of cookies, please contact us:
        </p>
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <p className="font-bold text-gray-900 mb-2">Daily Creative Designs</p>
          <p className="text-gray-700 mb-1">Email: <a href="mailto:sales@dailycreativedesigns.com" className="text-green-700 hover:underline">sales@dailycreativedesigns.com</a></p>
          <p className="text-gray-700">Phone: <a href="tel:+917837319660" className="text-green-700 hover:underline">+91 78373 19660</a></p>
        </div>
      </>
    ),
  },
];

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1 pt-16">
        <div className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-16 text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-3">Cookies Policy</h1>
            <p className="text-green-100">Last updated: {LAST_UPDATED}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-gray-100 pb-10 last:border-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}
