import { Button } from '@/components/ui/button';
import { ChevronRight, Github, Shield, LineChart, Users, CheckCircle2, Zap, MousePointerClick, ShieldCheck, Check } from 'lucide-react';

export default function ReverseChessSection() {
  return (
    <section 
      className="relative w-full text-white border-y border-white/[0.05]" 
      style={{
        background: `
          radial-gradient(circle at 78% 35%, rgba(124,58,237,0.14), transparent 45%),
          radial-gradient(circle at 15% 80%, rgba(79,70,229,0.10), transparent 40%),
          #06060a
        `
      }}
    >
      <div className="absolute top-0 inset-x-0 h-[640px] grid-overlay pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 py-24 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
      <div>
        <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] rounded-full pl-3 pr-4 py-1.5 text-[12.5px] text-gray-300 mb-7 font-medium">
          <Github className="w-4 h-4 text-gray-400" />
          GitHub Integration
          <span className="bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full text-[10.5px] font-semibold">Beta</span>
          <span className="text-gray-500">›</span>
        </div>

        <h2 className="text-[40px] sm:text-[52px] font-bold leading-[1.08] mb-6 tracking-tight text-white">
          Paste a Repo URL.<br />
          Get a <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Full Review.</span>
        </h2>

        <p className="text-gray-400 text-[15.5px] mb-9 leading-relaxed max-w-md">
          Import any GitHub repository and get a comprehensive multi-agent analysis in seconds. Security vulnerabilities, performance issues, and auto-generated documentation — all delivered as PR-ready fixes.
        </p>

        <div className="grid grid-cols-2 gap-3.5 mb-9 max-w-md">
          <div className="border border-white/[0.08] rounded-xl p-4 bg-white/[0.015] hover:border-purple-500/30 hover:bg-white/[0.02] hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 mb-3.5">
              <Users className="w-[17px] h-[17px]" />
            </div>
            <div className="text-[21px] font-bold tracking-tight text-white">4 agents</div>
            <div className="text-[12px] text-gray-500 mt-0.5">parallel analysis</div>
          </div>
          
          <div className="border border-white/[0.08] rounded-xl p-4 bg-white/[0.015] hover:border-indigo-500/30 hover:bg-white/[0.02] hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 mb-3.5">
              <Zap className="w-[17px] h-[17px]" />
            </div>
            <div className="text-[21px] font-bold tracking-tight text-white">&lt; 60s</div>
            <div className="text-[12px] text-gray-500 mt-0.5">full repo review</div>
          </div>
          
          <div className="border border-white/[0.08] rounded-xl p-4 bg-white/[0.015] hover:border-purple-500/30 hover:bg-white/[0.02] hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 mb-3.5">
              <MousePointerClick className="w-[17px] h-[17px]" />
            </div>
            <div className="text-[21px] font-bold tracking-tight text-white">1-click</div>
            <div className="text-[12px] text-gray-500 mt-0.5">PR generation</div>
          </div>
          
          <div className="border border-white/[0.08] rounded-xl p-4 bg-white/[0.015] hover:border-indigo-500/30 hover:bg-white/[0.02] hover:-translate-y-0.5 transition-all duration-200">
            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 mb-3.5">
              <ShieldCheck className="w-[17px] h-[17px]" />
            </div>
            <div className="text-[21px] font-bold tracking-tight text-white">100%</div>
            <div className="text-[12px] text-gray-500 mt-0.5">ASI-1 powered</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-black font-semibold px-6 py-6 rounded-xl text-[14px] hover:-translate-y-[1px] hover:shadow-[0_10px_30px_-6px_rgba(74,222,128,0.35)] transition-all">
            <Github className="w-[17px] h-[17px]" />
            Import a Repo
            <span className="opacity-60 ml-1">›</span>
          </Button>
          <span className="text-[12.5px] text-gray-500">No credit card required</span>
        </div>
      </div>

      {/* RIGHT: floating mockup */}
      <div className="relative h-[540px] flex items-center justify-center mt-10 lg:mt-0">

        <div className="absolute bottom-10 w-72 h-16 bg-purple-600/30 blur-[70px] rounded-full"></div>
        <div className="absolute bottom-4 w-[340px] h-12 border border-purple-400/15 rounded-[50%]"></div>

        <svg className="absolute w-[440px] h-[440px] animate-[spin_50s_linear_infinite] opacity-[0.18]" viewBox="0 0 440 440">
          <circle cx="220" cy="220" r="205" fill="none" stroke="url(#ring)" strokeWidth="1"/>
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c084fc"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
        </svg>

        {/* browser card */}
        <div className="relative w-[280px] h-[320px] bg-gradient-to-b from-[#111119] to-[#0a0a10] border border-purple-500/[0.18] rounded-2xl rotate-6 shadow-[0_30px_60px_-15px_rgba(88,28,135,0.5)] flex flex-col items-center justify-center">
          <div className="absolute top-4 left-4 flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80"></span>
          </div>
          <div className="w-24 h-24 rounded-full border border-purple-500/25 bg-white/[0.02] flex items-center justify-center">
            <Github className="w-10 h-10 text-white opacity-90" />
          </div>
        </div>

        {/* floating labeled badges */}
        <div 
          className="absolute top-10 left-0 sm:left-10 lg:left-0 bg-[#0e0e15]/85 backdrop-blur-md border border-white/[0.08] rounded-lg px-3 py-2 text-[12px] text-white font-medium flex items-center gap-2 shadow-xl animate-float"
          style={{ animationDuration: '6.5s' }}
        >
          <Shield className="w-[13px] h-[13px] text-purple-400" />
          Security Scan
          <Check className="w-[13px] h-[13px] text-green-400" strokeWidth={3} />
        </div>

        <div 
          className="absolute top-28 right-0 sm:right-10 lg:right-0 bg-[#0e0e15]/85 backdrop-blur-md border border-white/[0.08] rounded-lg px-3 py-2 text-[12px] text-white font-medium flex items-center gap-2 shadow-xl animate-float"
          style={{ animationDuration: '7.5s', animationDelay: '1s' }}
        >
          <LineChart className="w-[13px] h-[13px] text-indigo-400" />
          Performance Analysis
          <Check className="w-[13px] h-[13px] text-green-400" strokeWidth={3} />
        </div>

        <div 
          className="absolute bottom-28 left-0 sm:left-10 lg:left-0 bg-[#0e0e15]/85 backdrop-blur-md border border-white/[0.08] rounded-lg px-3 py-2 text-[12px] text-white font-medium flex items-center gap-2 shadow-xl animate-float"
          style={{ animationDuration: '7s', animationDelay: '2s' }}
        >
          <Users className="w-[13px] h-[13px] text-purple-400" />
          Multi-Agent Review
          <Check className="w-[13px] h-[13px] text-green-400" strokeWidth={3} />
        </div>

        <div 
          className="absolute bottom-14 right-0 sm:right-10 lg:right-0 bg-[#0e0e15]/85 backdrop-blur-md border border-white/[0.08] rounded-lg px-3 py-2 text-[12px] text-white font-medium flex items-center gap-2 shadow-xl animate-float"
          style={{ animationDuration: '8s', animationDelay: '1.5s' }}
        >
          <CheckCircle2 className="w-[13px] h-[13px] text-indigo-400" />
          PR Ready Fixes
          <Check className="w-[13px] h-[13px] text-green-400" strokeWidth={3} />
        </div>

      </div>
      </div>
    </section>
  );
}

