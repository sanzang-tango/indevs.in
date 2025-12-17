import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DashboardProvider } from "@/context/dashboard-context";
import {
    LayoutDashboard,
    Globe,
    BarChart3,
    Settings,
    HelpCircle,
    LogOut,
    Plus,
    Heart,
    Server
} from "lucide-react";
import { useAuth } from "@/context/auth-context";

const SidebarItem = ({ to, icon: Icon, label, active }) => (
    <Link
        to={to}
        className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-bold transition-all duration-200 text-sm ${active
            ? "bg-[#1A1A1A] text-white shadow-md"
            : "text-[#4A4A4A] hover:bg-[#FFF8F0] hover:text-[#1A1A1A]"
            }`}
    >
        <Icon className="w-4 h-4 flex-shrink-0" />
        <span>{label}</span>
    </Link>
);

export default function DashboardLayout() {
    const location = useLocation();
    const { logout } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <DashboardProvider>
            <div className="min-h-screen bg-[#FFF8F0] font-sans flex flex-col">
                <Header />

                <div className="flex flex-1 pt-16">
                    {/* Sidebar */}
                    <aside className="w-64 bg-white border-r-2 border-[#E5E3DF] hidden md:block fixed h-full z-10">
                        <div className="p-6 space-y-2">
                            <SidebarItem to="/dashboard" icon={LayoutDashboard} label="Overview" active={isActive("/dashboard")} />
                            <SidebarItem to="/my-domains" icon={Globe} label="My Domains" active={isActive("/my-domains")} />
                            <SidebarItem to="/dns" icon={Server} label="DNS Records" active={isActive("/dns")} />
                            <SidebarItem to="/register" icon={Plus} label="Register Domain" active={isActive("/register")} />
                            <div className="pt-4 border-t border-[#E5E3DF] my-2"></div>
                            {/* Analytics placeholder */}
                            <div className="opacity-50 pointer-events-none">
                                <SidebarItem to="#" icon={BarChart3} label="Analytics (Soon)" active={false} />
                            </div>
                            <SidebarItem to="/profile" icon={Settings} label="Settings" active={isActive("/profile")} />
                            <SidebarItem to="/donate" icon={Heart} label="Donate" active={isActive("/donate")} />
                            <SidebarItem to="/help" icon={HelpCircle} label="Help & Support" active={isActive("/help")} />
                        </div>

                        <div className="absolute bottom-20 left-0 w-full p-6 border-t border-[#E5E3DF]">
                            <button
                                onClick={logout}
                                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-bold text-[#E63946] hover:bg-[#FFF5F5] transition-colors text-sm"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 md:ml-64 p-6 md:p-10 mb-20 overflow-y-auto min-h-[calc(100vh-64px)]">
                        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
                            <Outlet />
                        </div>
                    </main>
                </div>

                {/* Mobile Footer/Sidebar substitute if needed, keeping simple for now */}
                {/* Or reuse Footer component but it might be overlapped by fixed sidebar? 
                    The original design had Footer at bottom. Fixed sidebar means Footer inside main or outside?
                    Original: Footer was outside main.
                    If sidebar is fixed, we need margin-left.
                    Fixed Footer is nice or just scrollable.
                */}
                <div className="md:ml-64">
                    <Footer />
                </div>
            </div>
        </DashboardProvider>
    );
}
