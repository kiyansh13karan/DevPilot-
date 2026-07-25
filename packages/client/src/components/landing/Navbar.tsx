import { Link } from 'react-router-dom';
import { Code, ChevronDown, Sun, ChevronRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="relative z-20 flex justify-center pt-6 px-4 w-full">
      <div className="bg-[#050510]/60 backdrop-blur-xl border border-white/5 rounded-3xl px-6 py-3 flex items-center justify-between w-full max-w-[1200px] shadow-2xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center text-purple-600">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 3 12 9 6"></polyline>
              <polyline points="15 6 21 12 15 18"></polyline>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">DevPilot</span>
        </Link>

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">Overview</button>
          <button className="text-[15px] font-medium text-purple-500 hover:text-purple-400 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Agents</button>
          <button className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">Features</button>
          <button className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">Docs</button>
          <button className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">Pricing</button>
          <button className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">Community</button>
        </div>

        {/* Right Section (Theme, Auth, CTA) */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-800/80 text-gray-400 hover:text-white hover:border-gray-700 transition-colors bg-transparent">
            <Sun className="w-4 h-4" />
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          
          <button className="hidden sm:block px-6 py-2 rounded-xl border border-gray-800/80 text-[15px] font-medium text-white hover:bg-gray-800/50 transition-colors bg-transparent">
            Sign In
          </button>
          
          <Link to="/ide">
            <button className="flex items-center gap-1.5 px-6 py-2 rounded-xl text-[15px] font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              Get Started
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
