import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img src="/content/home/Unify-Fitness.png" alt="Unify Fitness" className="h-16 w-auto brightness-0 invert" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl shadow-2xl border border-neutral-700 p-8 md:p-12">
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-neutral-400 mb-6">
                <strong className="text-white">Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</span>
                  Information We Collect
                </h2>
                <p className="text-neutral-300 mb-4">
                  At Unify Fitness, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-1">
                  <li>Create an account or sign up for membership</li>
                  <li>Schedule appointments or classes</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Use our website and services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</span>
                  How We Use Your Information
                </h2>
                <p className="text-neutral-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-1">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Communicate with you about products, services, and events</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</span>
                  Information Sharing
                </h2>
                <p className="text-neutral-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-1">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</span>
                  Data Security
                </h2>
                <p className="text-neutral-300 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">5</span>
                  Your Rights
                </h2>
                <p className="text-neutral-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-1">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate personal data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">6</span>
                  Contact Us
                </h2>
                <p className="text-neutral-300 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-neutral-800 border border-neutral-700 p-6 rounded-lg">
                  <p className="text-neutral-200">
                    <strong className="text-white">Unify Fitness</strong><br />
                    664 Vernon Avenue<br />
                    Glencoe, IL 60022<br />
                    Email: <a href="mailto:info@unifyfitness.com" className="text-primary hover:text-primary/80 transition-colors">info@unifyfitness.com</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
