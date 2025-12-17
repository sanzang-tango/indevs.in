import { useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { LayoutDashboard } from "lucide-react";

export function Header() {
  const location = useLocation();
  const { user } = useAuth();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0] border-b border-[#E5E3DF] w-full">
      <div className="w-full px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">

        {/* Left Side: Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-baseline gap-0.5 group">
            <div className="flex items-center font-extrabold text-4xl tracking-tighter gap-0.5 [-webkit-text-stroke:1px_#1A1A1A]">
              <span className="text-[#FF6B35]">IN</span>
              <span className="text-white">DE</span>
              <span className="text-[#138808]">VS</span>
            </div>
            <span className="text-xl font-bold text-[#1A1A1A] tracking-tight">.in</span>
          </a>
        </div>

        {/* Right Side: Nav + CTA */}
        <div className="flex items-center gap-8">
          {/* Navigation - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/about" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-medium text-sm lg:text-base">
              About
            </a>
            <a href="/docs" className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-medium text-sm lg:text-base">
              Docs
            </a>
            <a
              href="https://github.com/sudheerbhuvana/indevs.in.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-[#FF6B35] transition-colors duration-150 font-medium text-sm lg:text-base"
            >
              GitHub
            </a>
          </div>

          {/* CTA Button */}
          {user ? (
            <a
              href="/overview"
              className="bg-[#1A1A1A] text-white px-4 py-2 md:px-6 md:py-2.5 font-bold uppercase text-xs md:text-sm tracking-widest border-2 border-[#1A1A1A] hover:bg-[#FFD23F] hover:text-[#1A1A1A] transition-all duration-150 shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </a>
          ) : (
            <a
              href="/login"
              className="bg-[#FFD23F] text-[#1A1A1A] px-4 py-2 md:px-6 md:py-2.5 font-bold uppercase text-xs md:text-sm tracking-widest border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FFD23F] hover:border-[#1A1A1A] transition-all duration-150 shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Get Started
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
