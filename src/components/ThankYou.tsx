import { CheckCircle, ArrowRight, Phone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const WHATSAPP_LINK = "https://wa.me/917837319660?text=Hi, I just submitted an enquiry and wanted to follow up.";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Hero confirmation */}
        <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-20 text-white text-center px-4">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Message Received!</h1>
            <p className="text-xl text-green-100">
              Thank you for reaching out to Daily Creative Designs. We'll be in touch very soon.
            </p>
          </div>
        </section>

        {/* What happens next */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 text-center mb-10">What happens next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { step: '01', title: 'We Review Your Enquiry', desc: 'Our team reviews every submission within 1–2 hours during business hours.' },
                { step: '02', title: 'We Reach Out', desc: 'A design consultant will call or WhatsApp you to discuss your needs in detail.' },
                { step: '03', title: 'We Send a Proposal', desc: 'You receive a clear, no-obligation proposal with scope, timeline, and pricing.' },
              ].map((item) => (
                <div key={item.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-black mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Contact options */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-10">
              <h3 className="text-lg font-black text-gray-900 mb-5 text-center">Need an immediate response?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="tel:+917837319660"
                  className="flex items-center gap-3 bg-white border border-green-200 rounded-xl px-4 py-3 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all group"
                >
                  <Phone className="h-5 w-5 text-green-600 group-hover:text-white flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 group-hover:text-green-100">Call Us</p>
                    <p className="font-bold text-gray-900 text-sm group-hover:text-white">+91 78373 19660</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border border-green-200 rounded-xl px-4 py-3 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all group"
                >
                  <MessageCircle className="h-5 w-5 text-green-600 group-hover:text-white flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 group-hover:text-green-100">WhatsApp</p>
                    <p className="font-bold text-gray-900 text-sm group-hover:text-white">Chat Now</p>
                  </div>
                </a>
                <a
                  href="mailto:design@creativedaily.com"
                  className="flex items-center gap-3 bg-white border border-sky-200 rounded-xl px-4 py-3 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all group"
                >
                  <Mail className="h-5 w-5 text-sky-500 group-hover:text-white flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-500 group-hover:text-sky-100">Email</p>
                    <p className="font-bold text-gray-900 text-sm group-hover:text-white">design@creativedaily.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA back to site */}
            <div className="text-center space-y-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all shadow-md hover:-translate-y-0.5"
              >
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-gray-400">
                Or explore our{' '}
                <Link to="/services" className="text-green-600 hover:underline font-semibold">services</Link>
                {' '}while you wait.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
