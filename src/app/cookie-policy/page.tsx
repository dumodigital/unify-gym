import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function CookiePolicyPage() {
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
            <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto"></div>
          </div>
          
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl shadow-2xl border border-neutral-700 p-8 md:p-12">
            <div className="prose prose-lg max-w-none prose-invert">
              <p className="text-neutral-400 mb-6">
                <strong className="text-white">Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">🍪</span>
                  What Are Cookies
                </h2>
                <p className="text-neutral-300 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">⚙️</span>
                  How We Use Cookies
                </h2>
                <p className="text-neutral-300 mb-4">
                  Unify Fitness uses cookies to:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-1">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your user experience</li>
                  <li>Provide personalized content</li>
                  <li>Analyze website traffic and performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">📊</span>
                  Types of Cookies We Use
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-3">Essential Cookies</h3>
                    <p className="text-neutral-300 text-sm">
                      These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.
                    </p>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-3">Analytics Cookies</h3>
                    <p className="text-neutral-300 text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-3">Functional Cookies</h3>
                    <p className="text-neutral-300 text-sm">
                      These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.
                    </p>
                  </div>

                  <div className="bg-neutral-800 border border-neutral-700 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-primary mb-3">Marketing Cookies</h3>
                    <p className="text-neutral-300 text-sm">
                      These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">🛠️</span>
                  Managing Cookies
                </h2>
                <p className="text-neutral-300 mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-1">
                  <li>Use our cookie consent banner when you first visit our site</li>
                  <li>Change your browser settings to block or delete cookies</li>
                  <li>Use browser plugins to manage cookies</li>
                  <li>Opt out of specific cookie categories through our website</li>
                </ul>
                <p className="text-neutral-300 mb-4">
                  Please note that blocking some types of cookies may impact your experience of our website and the services we are able to offer.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">🤝</span>
                  Third-Party Cookies
                </h2>
                <p className="text-neutral-300 mb-4">
                  We may use third-party services that place cookies on your device. These include:
                </p>
                <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-1">
                  <li>Google Analytics for website analytics</li>
                  <li>Social media platforms for social sharing</li>
                  <li>Calendly for appointment scheduling</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">🔄</span>
                  Updates to This Policy
                </h2>
                <p className="text-neutral-300 mb-4">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">📞</span>
                  Contact Us
                </h2>
                <p className="text-neutral-300 mb-4">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-neutral-800 border border-neutral-700 p-6 rounded-lg">
                  <p className="text-neutral-200">
                    <strong className="text-white">Unify Fitness</strong><br />
                    664 Vernon Avenue<br />
                    Glencoe, IL 60022<br />
                    Email: <a href="mailto:info@unifygym.com" className="text-primary hover:text-primary/80 transition-colors">info@unifygym.com</a>
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
