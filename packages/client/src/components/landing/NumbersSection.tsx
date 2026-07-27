import { Bot, Activity } from 'lucide-react';

export default function NumbersSection() {
  return (
    <section className="relative overflow-hidden bg-[#05050a] py-32 border-y border-white/[0.02]">
      
      {/* Stars and Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
         {/* Animated SVG Stars pattern */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTIwIiByPSIxIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMjUwIiByPSIxLjUiIGZpbGw9IiNjMDg0ZmMiLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSI4MCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjMwMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjMzMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-repeat opacity-40 animate-[pulse_4s_ease-in-out_infinite]"></div>
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMTUwIiBjeT0iMTIwIiByPSIxIiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMjUwIiByPSIxLjUiIGZpbGw9IiNjMDg0ZmMiLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSI4MCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjMwMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjMyMCIgY3k9IjMzMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-repeat opacity-30 bg-[length:150px_150px] [transform:rotate(15deg)] animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
         
         {/* Deep radial gradient */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(88,28,135,0.08)_0%,_rgba(5,5,10,0)_100%)]"></div>
         
         {/* Slowly Rotating Curved Swooshes */}
         <div className="absolute w-[200%] h-[1200px] pointer-events-none opacity-60 animate-[spin_100s_linear_infinite]">
            <div className="absolute top-[40%] left-[-10%] w-[120%] h-[800px] border-t-[1.5px] border-purple-500/20 rounded-[100%] rotate-6"></div>
            <div className="absolute top-[45%] left-[-10%] w-[120%] h-[800px] border-t border-indigo-500/20 rounded-[100%] -rotate-3"></div>
            <div className="absolute top-[50%] left-[-5%] w-[110%] h-[800px] border-t border-purple-500/10 rounded-[100%] rotate-2"></div>
         </div>

         {/* Reverse Rotating Layer for complex parallax web effect */}
         <div className="absolute w-[200%] h-[1200px] pointer-events-none opacity-40 animate-[spin_140s_linear_infinite_reverse]">
            <div className="absolute top-[35%] left-[-15%] w-[130%] h-[900px] border-t border-fuchsia-500/15 rounded-[100%] rotate-12"></div>
            <div className="absolute top-[48%] left-[-8%] w-[115%] h-[750px] border-t border-blue-500/15 rounded-[100%] -rotate-6"></div>
         </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        
        {/* Giant Number Header */}
        <h2 className="text-[100px] sm:text-[130px] lg:text-[160px] font-bold tracking-tighter text-white leading-none drop-shadow-2xl">
          50K+
        </h2>
        
        <p className="text-green-500 text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 tracking-wide">
          Lines of code reviewed
        </p>
        
        <p className="text-gray-400 max-w-md mx-auto mt-6 text-base sm:text-lg leading-relaxed font-medium">
          Every day, DevPilot's AI agents analyze thousands of files to keep codebases secure and performant.
        </p>

        {/* Stats Card */}
        <div className="mt-20 relative w-full max-w-4xl mx-auto">
          
          <div className="relative rounded-[2rem] border border-purple-500/25 bg-[#0b0b14]/60 backdrop-blur-xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between shadow-[0_0_80px_rgba(168,85,247,0.15)] z-20">
            
            {/* Left Side: Agents */}
            <div className="flex items-center gap-5 sm:gap-6 flex-1 w-full justify-center md:justify-start">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-purple-500/20 flex items-center justify-center bg-purple-500/5 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                 <div className="absolute inset-0 rounded-full border border-purple-500/30 m-1.5 sm:m-2 opacity-60"></div>
                 <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400 relative z-10" />
              </div>
              <div className="text-left">
                <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">4</p>
                <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base font-medium">Specialized AI agents</p>
              </div>
            </div>

            {/* Vertical Divider for desktop */}
            <div className="hidden md:block w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent mx-8"></div>
            {/* Horizontal Divider for mobile */}
            <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>

            {/* Right Side: Uptime */}
            <div className="flex items-center gap-5 sm:gap-6 flex-1 w-full justify-center md:justify-start md:pl-8">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-green-500/20 flex items-center justify-center bg-green-500/5 shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                 <div className="absolute inset-0 rounded-full border border-green-500/30 m-1.5 sm:m-2 opacity-60"></div>
                 <Activity className="w-7 h-7 sm:w-8 sm:h-8 text-green-400 relative z-10" />
              </div>
              <div className="text-left">
                <p className="text-3xl sm:text-5xl font-bold text-white tracking-tight">99.9%</p>
                <p className="text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base font-medium">API uptime</p>
              </div>
            </div>

          </div>

          {/* Bottom Glowing Elliptical Platform */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120%] h-48 pointer-events-none z-10 animate-[pulse_6s_ease-in-out_infinite]">
             <div className="absolute inset-0 bg-purple-600/10 blur-[50px] rounded-[100%]"></div>
             
             {/* Glowing rings */}
             <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-24 border-b border-purple-500/30 rounded-[100%] opacity-80"></div>
             <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[70%] h-16 border-b border-indigo-400/30 rounded-[100%] opacity-60"></div>
             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[50%] h-8 border-b border-green-400/20 rounded-[100%] opacity-40"></div>
             
             {/* Center intense glow light */}
             <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-40 h-8 bg-purple-400/60 blur-[30px] rounded-[100%]"></div>
             <div className="absolute bottom-18 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 blur-[10px] rounded-[100%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
