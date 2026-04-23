import { Navbar } from "@/features/navbar/Navbar";
import { Footer } from "@/features/footer/Footer";

export const metadata = {
  title: "Terms of Service | VYRO Media",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto font-sans text-[#0A0A0A]">
        <h1 className="font-serif italic text-5xl md:text-6xl mb-6">Terms of Service</h1>
        
        <div className="flex flex-col gap-2 text-[#737373] mb-16 text-sm font-semibold tracking-wider uppercase">
          <p>Effective Date: 1 January 2025</p>
          <p>Last Updated: 1 January 2025</p>
        </div>

        <div className="prose prose-neutral prose-lg max-w-none text-[#737373] leading-relaxed">
          <p className="text-xl font-medium text-[#0A0A0A] mb-12">
            <strong>The short version:</strong> Work with us in good faith. We'll do the same. These terms protect both sides.
          </p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">1. Who This Applies To</h3>
          <p className="mb-8">
            These Terms govern your use of vyromedia.in and any services provided by VYRO Media ("we", "us", "VYRO"). By using our website or engaging our services, you agree to these terms.
          </p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">2. Our Services</h3>
          <p>VYRO Media provides:</p>
          <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
            <li>Video production, editing, and post-production</li>
            <li>Portfolio and brand website design and development</li>
            <li>Content strategy and repurposing</li>
            <li>AI-assisted creative production workflows</li>
          </ul>
          <p className="mb-8">The exact scope of any project is defined in a written proposal or agreement shared before work begins.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">3. Payments & Pricing</h3>
          <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
            <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
            <li>A deposit (typically 50%) is required before production begins</li>
            <li>Remaining balance is due upon project completion and before final file delivery</li>
            <li>Website packages have their own payment milestones outlined in individual proposals</li>
            <li>We reserve the right to pause work on accounts with outstanding balances</li>
          </ul>
          <p className="mb-8">
            <strong>Late payments:</strong> Invoices unpaid beyond 14 days of the due date may incur a follow-up. We'd rather just talk about it. Reach out if there's an issue.
          </p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">4. Revisions & Scope</h3>
          <ul className="list-disc pl-5 mt-2 mb-8 space-y-2">
            <li>Each package includes a defined number of revision rounds (stated in your proposal)</li>
            <li>Revisions outside this scope will be quoted and billed separately</li>
            <li>Significant changes to the original brief mid-project may affect timeline and cost</li>
            <li>"Revision" means changes to existing work, not a new direction entirely</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">5. Timelines & Delivery</h3>
          <ul className="list-disc pl-5 mt-2 mb-8 space-y-2">
            <li>Estimated timelines are provided in every proposal</li>
            <li>Timelines assume timely feedback from the client (within 3 business days unless agreed otherwise)</li>
            <li>Delays caused by missing assets, approvals, or feedback from the client's side are not our responsibility</li>
            <li>We will always communicate proactively if something on our end causes a delay</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">6. Ownership & Intellectual Property</h3>
          <p><strong>What's yours:</strong><br />
          Once full payment is received, you own the final delivered assets: videos, websites, content files.</p>
          
          <p className="mt-4"><strong>What's ours:</strong></p>
          <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
            <li>Raw footage, source files, and working files remain VYRO's property unless explicitly agreed otherwise (and priced accordingly)</li>
            <li>Our creative concepts, pitch decks, and proposals remain our intellectual property unless a project moves forward</li>
          </ul>

          <p className="mt-4 mb-8"><strong>Portfolio rights:</strong><br />
          Unless you explicitly ask us not to, we reserve the right to feature completed work in our portfolio, website, and social media. We'll always credit and never misrepresent the work.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">7. Confidentiality</h3>
          <p className="mb-8">We treat your business information, unreleased projects, and internal strategy with discretion. If you need an NDA signed before briefing us, just ask. We're comfortable with that.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">8. Cancellations</h3>
          <ul className="list-disc pl-5 mt-2 mb-8 space-y-2">
            <li>Cancellations before production begins: deposit is non-refundable but can be credited toward a future project within 6 months</li>
            <li>Cancellations mid-project: work completed to date will be invoiced at a pro-rated rate</li>
            <li>We reserve the right to withdraw from a project if the working relationship becomes untenable, in which case we'll refund for any undelivered work</li>
          </ul>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">9. Limitation of Liability</h3>
          <p className="mb-8">VYRO's total liability for any claim arising from our services is limited to the amount you paid for the specific project in question. We are not liable for indirect losses, lost revenue, or consequences outside our direct control.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">10. Governing Law</h3>
          <p className="mb-8">These terms are governed by the laws of India. Any disputes will be addressed in the courts of Delhi.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">11. Changes to These Terms</h3>
          <p className="mb-8">We'll update the date at the top if anything changes. Continued use of our services after changes means you accept the updated terms.</p>

          <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mt-12 mb-6">12. Questions?</h3>
          <p>
            <strong>vyromedia.in@gmail.com</strong><br />
            If something here is unclear, ask us. We'll explain it in plain English.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
