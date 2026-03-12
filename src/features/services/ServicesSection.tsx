import { HoverEffect } from "@/components/aceternity-ui/hover-effect";

export const services = [
    {
        title: "Premium Video Production",
        description: "Professional shooting and precision video editing to elevate your brand's visual storytelling.",
        link: "#",
    },
    {
        title: "AI Avatar & Workflows",
        description: "Scaling your content with custom-trained AI avatars and automated video generation.",
        link: "#",
    },
    {
        title: "Business Automations",
        description: "Connecting your tools and streamlining backend systems so your business runs on autopilot.",
        link: "#",
    },
    {
        title: "Social Media Management",
        description: "End-to-end social strategy, content scheduling, and community growth.",
        link: "#",
    },
];

export function ServicesSection() {
    return (
        <section className="py-24 px-4 max-w-5xl mx-auto w-full relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent pb-2">
                    WHAT WE DO
                </h2>
                <div className="h-1 w-24 bg-indigo-500/50 mx-auto mt-4 rounded-full"></div>
            </div>
            <HoverEffect items={services} />
        </section>
    );
}
