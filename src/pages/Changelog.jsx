import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BadgeCheck, Rocket, Zap, Bug } from "lucide-react";

export function Changelog() {
    const changes = [
        {
            version: "v1.0.0",
            date: "December 12, 2025",
            title: "Indevs Official Launch",
            description: "The initial release of Indevs.in, bringing free subdomains to the developer community.",
            items: [
                { type: "new", text: "Launched creating and claiming .indevs.in subdomains." },
                { type: "new", text: "Integrated with Oracle Cloud & DigitalOcean DNS." },
                { type: "new", text: "Comprehensive Legal Center (Terms, Privacy, Abuse)." },
                { type: "improvement", text: "Refactored About page with Mission and Values." },
            ]
        },
        {
            version: "Beta",
            date: "November 2025",
            title: "Public Beta",
            description: "Testing the core infrastructure with early adopters.",
            items: [
                { type: "new", text: "Basic dashboard for domain management." },
                { type: "fix", text: "Resolved DNS propagation delays." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFF8F0] flex flex-col">
            <Header />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-[#FF6B35] font-bold uppercase tracking-widest mb-4">What's New</p>
                        <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-6">Changelog</h1>
                        <p className="text-xl text-[#4A4A4A]">
                            Stay updated with the latest improvements, features, and fixes.
                        </p>
                    </div>

                    <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#1A1A1A] before:to-transparent">
                        {changes.map((change, index) => (
                            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                {/* Icon/Dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FFF8F0] bg-[#1A1A1A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <Rocket className="w-5 h-5" />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] transition-transform hover:-translate-y-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-mono text-sm font-bold text-[#FF6B35] bg-[#FFF8F0] px-3 py-1 rounded border border-[#FF6B35]">
                                            {change.version}
                                        </span>
                                        <time className="font-mono text-sm text-[#6B6B6B]">{change.date}</time>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{change.title}</h3>
                                    <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                                        {change.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {change.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#4A4A4A]">
                                                {item.type === 'new' && <BadgeCheck className="w-5 h-5 text-[#138808] shrink-0 mt-0.5" />}
                                                {item.type === 'improvement' && <Zap className="w-5 h-5 text-[#FFD23F] shrink-0 mt-0.5" />}
                                                {item.type === 'fix' && <Bug className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" />}
                                                <span className="leading-snug">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
