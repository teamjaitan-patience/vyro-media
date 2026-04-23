import { Navbar } from "@/features/navbar/Navbar";
import { Footer } from "@/features/footer/Footer";

export const metadata = {
  title: "Cookie Policy | VYRO Media",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-[#0A0A0A]">
        <h1 className="font-serif italic text-5xl md:text-6xl mb-6">Cookie Policy</h1>
        
        <div className="flex flex-col gap-2 text-[#737373] mb-16 text-sm font-semibold tracking-wider uppercase">
          <p>Effective Date: 1 January 2025</p>
          <p>Last Updated: 1 January 2025</p>
        </div>

        <div className="prose prose-neutral prose-lg max-w-none text-[#737373] leading-relaxed">
          <p className="text-xl font-medium text-[#0A0A0A] mb-12">
            <strong>The short version:</strong> We use a small number of cookies. Most are just to make the site work and understand basic traffic. We don't use them to follow you around the internet.
          </p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">1. What Are Cookies?</h3>
          <p className="mb-8">
            Cookies are small text files stored on your device when you visit a website. They help websites remember things, like whether you've visited before, or which pages you've looked at.
          </p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">2. What We Use Cookies For</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse border border-[#e5e5e5]">
              <thead>
                <tr className="bg-[#f4f4f5] text-[#0A0A0A]">
                  <th className="border border-[#e5e5e5] p-3">Type</th>
                  <th className="border border-[#e5e5e5] p-3">Purpose</th>
                  <th className="border border-[#e5e5e5] p-3">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#e5e5e5] p-3"><strong>Essential</strong></td>
                  <td className="border border-[#e5e5e5] p-3">Core site functionality</td>
                  <td className="border border-[#e5e5e5] p-3">Session state, form data</td>
                </tr>
                <tr>
                  <td className="border border-[#e5e5e5] p-3"><strong>Analytics</strong></td>
                  <td className="border border-[#e5e5e5] p-3">Understanding traffic and usage</td>
                  <td className="border border-[#e5e5e5] p-3">Pages visited, time on site</td>
                </tr>
                <tr>
                  <td className="border border-[#e5e5e5] p-3"><strong>Preferences</strong></td>
                  <td className="border border-[#e5e5e5] p-3">Remembering your settings</td>
                  <td className="border border-[#e5e5e5] p-3">Theme, language</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">We do <strong>not</strong> use:</p>
          <ul className="list-disc pl-5 mt-2 mb-8 space-y-2">
            <li>Advertising or retargeting cookies</li>
            <li>Third-party tracking cookies that follow you across other websites</li>
            <li>Cookies that build profiles for sale to advertisers</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">3. Third-Party Cookies</h3>
          <p className="mb-8">
            If we use analytics tools (like Google Analytics), they may set their own cookies. These are configured to anonymise your data. We use them to understand aggregate traffic patterns, not individual behaviour.
          </p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">4. How to Control Cookies</h3>
          <p>You can control and delete cookies through your browser settings. Here's how on the most common browsers:</p>
          <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
            <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
            <li><strong>Safari:</strong> Preferences → Privacy</li>
            <li><strong>Firefox:</strong> Settings → Privacy & Security</li>
            <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
          </ul>
          <p className="mb-8">Note: disabling essential cookies may affect how the site functions.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">5. Cookie Consent</h3>
          <p className="mb-8">On your first visit, we may show a simple cookie notice. Non-essential cookies (like analytics) are only set with your consent. You can change your mind at any time.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">6. Updates</h3>
          <p className="mb-8">If we add new cookies or change how we use them, we'll update this page and the date above.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">7. Questions?</h3>
          <p>
            <strong>vyromedia.in@gmail.com</strong><br />
            Honestly, we're a small studio. If you have a real concern about cookies on our site, just email us.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
