import { Link } from 'react-router-dom';
import { Play, ChevronRight, Sparkles, Shield, Zap, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';

const BOTTOM_FEATURES = [
  { icon: Shield, title: 'AI Multi-Agent', desc: 'Smart code review' },
  { icon: Zap, title: 'Real-time Assist', desc: 'Inline AI suggestions' },
  { icon: Globe, title: 'Live Preview', desc: 'Instant deployment' },
  { icon: Lock, title: 'Secure & Private', desc: 'Your code is safe' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#050510]">
      
      {/* Background Animated Globe Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Top & Bottom gradient fades for seamless blending */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050510] via-[#050510]/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050510] via-[#050510]/80 to-transparent z-10" />
        
        {/* Color Tint Overlay to match the deep purple/blue aesthetic */}
        <div className="absolute inset-0 bg-[#250040]/30 mix-blend-color z-10" />
        <div className="absolute inset-0 bg-[#050510]/40 z-10" />
        
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover [filter:hue-rotate(280deg)_saturate(1.5)]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260309_042944_4a2205b7-b061-490a-852b-92d9e9955ce9.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      
      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-8">
          <Navbar />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16 pb-32">
          
          {/* Pill Badge */}
          <div className="liquid-glass rounded-full px-5 py-2 inline-flex items-center gap-2 text-sm border border-purple-500/20 bg-[#110C1D]/80 backdrop-blur-md mb-8 animate-fade-in cursor-default hover:bg-[#1A142A]/80 transition-colors">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-gray-200 font-medium">AI Code Review</span>
            <span className="text-purple-400 font-medium ml-2 flex items-center gap-1">Explore <ChevronRight className="w-3.5 h-3.5" /></span>
          </div>

          {/* Centered Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-bold leading-[1.05] tracking-tight text-white max-w-5xl animate-fade-in" style={{ animationDelay: '100ms' }}>
            Build, Review, and Ship<br />
            Frontend Code <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">Faster</span>
          </h1>

          {/* Centered Subheading */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mt-6 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
            A browser-based IDE with AI-powered multi-agent<br className="hidden sm:block" />
            code review, inline completions, and one-click GitHub<br className="hidden sm:block" />
            integration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link to="/ide" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold h-14 px-10 text-lg rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all transform hover:scale-105">
                Launch IDE 🚀
              </Button>
            </Link>
            <Button variant="outline" className="w-full sm:w-auto border-gray-700/50 hover:bg-gray-800/80 text-white h-14 px-10 text-lg rounded-xl bg-[#110C1D]/50 backdrop-blur-md transition-all">
              <Play className="w-5 h-5 mr-2" /> Watch Demo
            </Button>
          </div>
          
        </div>

        {/* Bottom Features Glass Pill */}
        <div className="w-full max-w-[1200px] mx-auto px-6 mb-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="bg-[#0B0B14]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            {BOTTOM_FEATURES.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 flex-1 w-full justify-start md:justify-center border-b border-white/5 md:border-none pb-4 md:pb-0 last:border-0 last:pb-0">
                <div className="p-3.5 rounded-2xl bg-[#110C1D]/80 border border-purple-500/10 text-purple-500 shrink-0">
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-semibold text-[15px]">{feature.title}</span>
                  <span className="text-gray-400 text-[13px]">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
