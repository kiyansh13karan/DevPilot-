import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HLSVideo from './HLSVideo';

export default function ChessSection() {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-[1400px] mx-auto relative z-20">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left — Visual/Video with Hover Animation */}
        <div className="relative group w-full transform transition-transform duration-500 hover:-translate-y-2">
          
          {/* Animated Glowing Shadow */}
          <div className="absolute -inset-[2px] rounded-2xl overflow-hidden opacity-30 group-hover:opacity-80 transition-opacity duration-500 blur-xl z-0">
            <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(168,85,247,1)_25%,transparent_50%,rgba(59,130,246,1)_75%,transparent_100%)]" />
          </div>

          {/* Animated Border */}
          <div className="absolute -inset-[1px] rounded-2xl overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,#a855f7_25%,transparent_50%,#3b82f6_75%,transparent_100%)]" />
          </div>
          
          {/* Inner Video Container */}
          <div className="relative bg-[#0B0B14] rounded-2xl overflow-hidden aspect-[4/3] z-10">
            <HLSVideo
              src="https://stream.mux.com/1CCfG6mPC7LbMOAs6iBOfPeNd3WaKlZuHuKHp00G62j8.m3u8"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex flex-col items-start">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 p-1 text-sm text-gray-400 mb-8 hover:bg-gray-800/80 transition-colors cursor-default">
            <span className="px-3 py-1 rounded-full bg-[#1A1A24] text-gray-200">Inline AI</span>
            <span className="px-3 py-1 text-purple-400 flex items-center gap-1">New <ChevronRight className="w-3 h-3" /></span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.15] tracking-tight text-white mb-6">
            Code Completions That<br />
            Actually <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Understand Context</span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Powered by ASI-1 Mini, get intelligent inline suggestions that consider your entire
            workspace — not just the current file. Accept with <kbd className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-sm font-mono border border-gray-700">Tab</kbd>, dismiss with <kbd className="bg-gray-800 text-gray-300 px-2 py-0.5 rounded text-sm font-mono border border-gray-700">Esc</kbd>.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              'Full workspace context awareness',
              'Framework-specific suggestions',
              'Learns your coding patterns',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 group/item">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] group-hover/item:scale-125 transition-transform" />
                <span className="text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/ide" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium h-12 px-8 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.2)] transition-all">
                Try It Now
              </button>
            </Link>
            <button className="w-full sm:w-auto border border-gray-800 hover:border-gray-700 hover:bg-gray-800/50 text-white h-12 px-8 rounded-xl bg-[#0B0B14] transition-all">
              Read the Docs
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
