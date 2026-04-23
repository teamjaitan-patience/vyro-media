import { Navbar } from "@/features/navbar/Navbar";
import { Footer } from "@/features/footer/Footer";

export const metadata = {
  title: "Privacy Policy | VYRO Media",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-[#0A0A0A]">
        <h1 className="font-serif italic text-5xl md:text-6xl mb-6">Privacy Policy</h1>
        
        <div className="flex flex-col gap-2 text-[#737373] mb-16 text-sm font-semibold tracking-wider uppercase">
          <p>Effective Date: 1 January 2025</p>
          <p>Last Updated: 1 January 2025</p>
        </div>

        <div className="prose prose-neutral prose-lg max-w-none text-[#737373] leading-relaxed">
          <p className="text-xl font-medium text-[#0A0A0A] mb-12">
            <strong>The short version:</strong> We collect only what we need, we don't sell your data, and we treat your information the way we'd want ours treated.
          </p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">1. Who We Are</h3>
          <p>
            VYRO Media is a Delhi-based creative production studio. When you visit vyromedia.in, book a call, or reach out to work with us, you're interacting with us directly. No faceless corporation. Just Jaitan and the team.
          </p>
          <ul className="list-disc pl-5 mt-4 mb-8 space-y-2">
            <li><strong>Contact:</strong> vyromedia.in@gmail.com</li>
            <li><strong>Location:</strong> Delhi, India</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">2. What We Collect</h3>
          <p><strong>Information you give us directly:</strong></p>
          <ul className="list-disc pl-5 mt-2 mb-6 space-y-2">
            <li>Name and email when you fill out a contact or booking form</li>
            <li>Project details you share in calls or messages</li>
            <li>Payment information (processed securely via third-party gateways; we never store card details)</li>
          </ul>

          <p><strong>Information collected automatically:</strong></p>
          <ul className="list-disc pl-5 mt-2 mb-6 space-y-2">
            <li>Basic analytics: pages visited, time on site, device type</li>
            <li>IP address and browser type (standard server logs)</li>
            <li>Cookies (see our Cookie Policy for details)</li>
          </ul>

          <p><strong>What we do NOT collect:</strong></p>
          <ul className="list-disc pl-5 mt-2 mb-8 space-y-2">
            <li>We don't ask for information we don't need</li>
            <li>We don't build profiles on you for advertising</li>
            <li>We don't track you across other websites</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">3. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 mt-2 mb-6 space-y-2">
            <li>Respond to your enquiries and project requests</li>
            <li>Send you information you've asked for (proposals, quotes, updates)</li>
            <li>Improve our website and understand how people use it</li>
            <li>Meet legal and financial obligations</li>
          </ul>

          <p>We do not use your information to:</p>
          <ul className="list-disc pl-5 mt-2 mb-8 space-y-2">
            <li>Sell or rent it to third parties ever</li>
            <li>Send unsolicited marketing without your consent</li>
            <li>Feed it into advertising platforms</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">4. Who We Share It With</h3>
          <p>We work with a small number of trusted tools to run our business:</p>
          <ul className="list-disc pl-5 mt-4 mb-4 space-y-2">
            <li><strong>Email & Calendar</strong> (Google Workspace) for communication and scheduling</li>
            <li><strong>Analytics</strong> (Google Analytics or similar) anonymised, aggregated data only</li>
            <li><strong>Payment Processing</strong> Razorpay or equivalent; governed by their own privacy policy</li>
            <li><strong>Website Hosting</strong> standard hosting infrastructure</li>
          </ul>
          <p className="mb-8">None of these parties are permitted to use your data for their own purposes.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">5. How Long We Keep It</h3>
          <ul className="list-disc pl-5 mt-2 mb-8 space-y-2">
            <li>Enquiry and project data: as long as necessary to complete the project, plus up to 3 years for business records</li>
            <li>Analytics data: typically 14 months</li>
            <li>If you ask us to delete your data, we will, unless we're legally required to keep it</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">6. Your Rights</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Ask us to correct inaccurate data</li>
            <li>Ask us to delete your data</li>
            <li>Withdraw consent for marketing at any time</li>
          </ul>
          <p className="mb-8">To exercise any of these, email us at <strong>vyromedia.in@gmail.com</strong> and we'll respond within 7 business days.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">7. Data Security</h3>
          <p className="mb-8">We take reasonable technical steps to protect your data. Our website uses HTTPS. We limit who on our team has access to personal information. That said, no system on the internet is 100% secure, and we won't pretend otherwise.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">8. Children's Privacy</h3>
          <p className="mb-8">Our services are not directed at anyone under 16. We do not knowingly collect data from minors. If you believe a minor has submitted data to us, please contact us and we'll remove it immediately.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">9. Changes to This Policy</h3>
          <p className="mb-8">If we make meaningful changes, we'll update the date at the top of this page. We won't bury major changes in fine print.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">10. Questions?</h3>
          <p>
            <strong>vyromedia.in@gmail.com</strong><br />
            We're real people. We'll actually reply.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
