import { Link } from 'react-router-dom';
import { Rocket, Github, Code2 } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="relative z-20 py-32 px-4">
      {/* Card Wrapper with Gradient Border */}
      <div className="relative rounded-[2.5rem] p-[1.5px] bg-gradient-to-r from-purple-600/60 via-[#0a0a14] to-emerald-500/60 max-w-5xl mx-auto shadow-[0_0_80px_rgba(168,85,247,0.15)]">
        
        {/* Floating Top Icon */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-[#0a0a14] rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] z-30">
           <Code2 className="w-7 h-7 text-indigo-400" />
        </div>

        {/* Inner Card */}
        <div className="relative rounded-[2.5rem] p-12 sm:p-24 bg-[#05050a]/90 backdrop-blur-2xl text-center h-full overflow-hidden">
          
          {/* Subtle inner ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-purple-500/5 blur-[80px] pointer-events-none"></div>

          <h2 className="text-white text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] relative z-10">
            Ready to Build
            <br />
            Something <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">Amazing?</span>
          </h2>
          
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg sm:text-xl font-medium leading-relaxed relative z-10">
            Join thousands of frontend developers using AI-powered code review and intelligent completions. Free to start.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10 relative z-10">
            <Link to="/ide" className="group">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl text-black font-bold text-[17px] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                <Rocket className="w-5 h-5" />
                Launch DevPilot
              </button>
            </Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#0e0e15] border border-white/10 rounded-xl text-white font-semibold text-[17px] transition-all duration-300 hover:border-white/30 hover:bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                <Github className="w-5 h-5" />
                View on GitHub
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Glowing Platform */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-48 pointer-events-none z-10">
         <div className="absolute inset-0 bg-purple-600/10 blur-[60px] rounded-[100%]"></div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-24 border-b border-purple-500/40 rounded-[100%] opacity-80 border-dashed"></div>
         <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[60%] h-16 border-b border-teal-400/40 rounded-[100%] opacity-60"></div>
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[40%] h-10 border-b border-green-400/30 rounded-[100%] opacity-40"></div>
         
         <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 h-8 bg-purple-500/50 blur-[40px] rounded-[100%]"></div>
         <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-24 h-4 bg-white/50 blur-[15px] rounded-[100%]"></div>
      </div>
    </div>
  );
}
