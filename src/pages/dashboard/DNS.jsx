import { Server, Settings, AlertCircle, Wrench } from "lucide-react";

export default function DNSRecords() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-10">
                <h1 className="text-3xl font-bold text-[#1A1A1A] capitalize mb-2">DNS Management</h1>
                <p className="text-[#4A4A4A]">Manage your DNS records</p>
            </div>

            {/* Current DNS Delegation Model */}
            <div className="bg-white rounded-xl border-2 border-[#E5E3DF] p-8 mb-6">
                <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-[#FFF8F0] rounded-lg border-2 border-[#E5E3DF]">
                        <Server className="w-6 h-6 text-[#1A1A1A]" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">Current DNS Model: Delegation</h2>
                        <p className="text-lg text-[#4A4A4A] leading-relaxed mb-4">
                            At the moment, Indevs operates on a <strong>"Bring Your Own DNS"</strong> model. When you register a subdomain (e.g., <code className="bg-[#FFF8F0] px-2 py-1 rounded font-mono text-sm">yourname.indevs.in</code>), you provide your own <strong>Nameservers (NS records)</strong>.
                        </p>
                        <p className="text-[#4A4A4A] leading-relaxed">
                            This means you manage your DNS records at your preferred DNS provider (like Cloudflare, Route53, or any other), and we handle the NS delegation to point your subdomain to those nameservers.
                        </p>
                    </div>
                </div>

                <div className="bg-[#FFF8F0] border-2 border-[#E5E3DF] rounded-lg p-6">
                    <h3 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                        <Settings className="w-5 h-5" />
                        How It Works Now
                    </h3>
                    <ol className="space-y-2 text-[#4A4A4A] list-decimal list-inside">
                        <li>Register your subdomain on Indevs</li>
                        <li>Provide your DNS provider's nameservers (e.g., <code className="bg-white px-2 py-0.5 rounded font-mono text-xs">ns1.cloudflare.com</code>)</li>
                        <li>We create an NS delegation record pointing to your nameservers</li>
                        <li>You manage all DNS records (A, CNAME, TXT, etc.) at your DNS provider</li>
                    </ol>
                </div>
            </div>

            {/* Coming Soon: Managed DNS */}
            <div className="bg-gradient-to-br from-[#e6f4ea] to-[#d4edda] rounded-xl border-2 border-[#ceead6] p-8">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg border-2 border-[#ceead6] shadow-sm">
                        <Wrench className="w-6 h-6 text-[#1e8e3e]" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <h2 className="text-2xl font-bold text-[#1e8e3e]">🚀 Coming Soon: Managed DNS</h2>
                            <span className="bg-[#1e8e3e] text-white px-3 py-1 rounded-full text-xs font-bold uppercase">In Development</span>
                        </div>
                        <p className="text-lg text-[#166e30] leading-relaxed mb-4">
                            We are actively building native DNS infrastructure that will allow you to manage your DNS records <strong>directly from your Indevs dashboard</strong> — no external DNS provider needed!
                        </p>

                        <div className="bg-white/80 rounded-lg p-5 border border-[#ceead6] mb-4">
                            <h4 className="font-bold text-[#1A1A1A] mb-3">What's Coming:</h4>
                            <ul className="space-y-2 text-[#4A4A4A]">
                                <li className="flex items-center gap-2">
                                    <span className="text-[#1e8e3e] font-bold">✓</span>
                                    Add and edit <strong>A, AAAA, CNAME, TXT, MX</strong> records
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#1e8e3e] font-bold">✓</span>
                                    Manage everything from your dashboard
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#1e8e3e] font-bold">✓</span>
                                    No need for external DNS providers
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#1e8e3e] font-bold">✓</span>
                                    Fast propagation and updates
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[#1e8e3e] font-bold">✓</span>
                                    Built-in security and validation
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white/60 rounded-lg p-4 border border-[#ceead6]">
                            <p className="text-sm text-[#166e30] flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>
                                    <strong>Infrastructure in Progress:</strong> We're building the DNS servers, API, and management interface. This feature will be available soon. Stay tuned for updates!
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-3 text-blue-800 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>
                    <strong>For now:</strong> Continue managing your DNS records at your provider. Once managed DNS is ready, you'll have the option to migrate to our native infrastructure or keep using your own nameservers.
                </p>
            </div>
        </div>
    );
}
