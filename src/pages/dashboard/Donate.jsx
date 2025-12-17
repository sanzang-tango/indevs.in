import { Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Donate() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center bg-white border-2 border-[#E5E3DF] rounded-xl p-12 text-center">
                <div className="w-24 h-24 bg-[#fce8e6] rounded-full flex items-center justify-center mb-8">
                    <Heart className="w-12 h-12 text-[#c5221f] fill-[#c5221f]" />
                </div>
                <h3 className="text-4xl font-bold text-[#1A1A1A] mb-4">Support Indevs</h3>
                <p className="text-xl text-[#4A4A4A] max-w-2xl mb-8 leading-relaxed">
                    Indevs is a free service maintained by volunteers. Your support helps us keep the infrastructure running and improve the platform for everyone.
                </p>

                <Button
                    asChild
                    className="bg-[#1A1A1A] text-white hover:bg-[#333] font-bold text-lg px-8 py-6 h-auto"
                >
                    <a
                        href="https://github.com/sponsors/sudheerbhuvana"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3"
                    >
                        <Heart className="w-5 h-5" />
                        Sponsor on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </Button>
            </div>

            <div className="bg-[#FFF8F0] border-2 border-[#E5E3DF] rounded-xl p-8 mt-8 text-center">
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-4">Other Ways to Help</h4>
                <p className="text-[#4A4A4A] mb-6">
                    Can't sponsor financially? No problem! You can still help by:
                </p>
                <ul className="text-left max-w-md mx-auto space-y-2 text-[#4A4A4A]">
                    <li>⭐ Star our <a href="https://github.com/sudheerbhuvana/indevs.in.git" className="font-bold text-[#1A1A1A] hover:text-[#FF6B35]" target="_blank" rel="noreferrer">GitHub repository</a></li>
                    <li>🐛 Report bugs and suggest features</li>
                    <li>📝 Contribute to documentation</li>
                    <li>💬 Spread the word about Indevs</li>
                </ul>
            </div>
        </div>
    );
}
