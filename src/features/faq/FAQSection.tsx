"use client";

import { BlurFade } from "@/components/magic-ui/blur-fade";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Brand films take 4-6 weeks from pre-production to final delivery. Website builds (Growth package) take 2-3 weeks. Short-form retainers are delivered in bi-weekly batches.",
  },
  {
    q: "Do you only work with clients in Delhi?",
    a: "No. We're based in Delhi, but we frequently travel for productions across India (especially Bangalore and Mumbai) and handle post-production/websites globally.",
  },
  {
    q: "Do you offer retained services?",
    a: "Yes. For select clients, we offer ongoing short-form content production and design retainers to ensure your brand stays consistent month over month.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-[#f4f4f5]">
      <div className="max-w-[1000px] mx-auto">
        <BlurFade delay={0.1} inView>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-[#737373] mb-12 block">
            FAQ
          </span>
          <h2 className="font-serif italic text-5xl md:text-7xl text-[#0A0A0A] mb-20">
            Details matter.
          </h2>
        </BlurFade>

        <div className="space-y-12">
          {faqs.map((faq, idx) => (
            <BlurFade key={idx} delay={0.2 + idx * 0.1} inView className="border-b border-[#e5e5e5] pb-12">
              <h3 className="font-sans font-bold text-2xl text-[#0A0A0A] mb-6">
                {faq.q}
              </h3>
              <p className="font-sans text-[#737373] text-lg leading-relaxed">
                {faq.a}
              </p>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
