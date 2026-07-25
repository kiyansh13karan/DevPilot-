import { Shield, Activity, FileText, Box, ChevronRight, Zap, TrendingUp, Code, User, Folder, Star } from 'lucide-react';

const AGENTS = [
  {
    title: 'Security Agent',
    desc: 'Scans for XSS, CSRF, secrets exposure, and 15+ vulnerability categories. Get OWASP-referenced findings with one-click fixes.',
    icon: Shield,
    theme: 'purple',
    metric: '< 30s',
    metricLabel: 'full repo scan',
    metricIcon: Zap,
    colors: {
      border: 'border-purple-500/20',
      hoverBorder: 'group-hover:border-purple-500/50',
      bg: 'bg-[#0F0A1F]', // Subtle purple tint
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    }
  },
  {
    title: 'Performance Agent',
    desc: 'Detects memory leaks, unnecessary re-renders, bundle bloat, and missing optimizations. Every finding includes before/after code.',
    icon: Zap,
    theme: 'green',
    metric: '148%',
    metricLabel: 'avg. performance improvement',
    metricIcon: TrendingUp,
    colors: {
      border: 'border-green-500/20',
      hoverBorder: 'group-hover:border-green-500/50',
      bg: 'bg-[#0A1A12]', // Subtle green tint
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
    }
  },
  {
    title: 'Auto Documentation',
    desc: 'Generates README, component API docs, and architecture overviews from your code. Never write docs from scratch again.',
    icon: FileText,
    theme: 'blue',
    metric: '100%',
    metricLabel: 'documentation coverage',
    metricIcon: FileText,
    colors: {
      border: 'border-blue-500/20',
      hoverBorder: 'group-hover:border-blue-500/50',
      bg: 'bg-[#0A121F]', // Subtle blue tint
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    }
  },
  {
    title: 'Architecture Agent',
    desc: 'Analyzes your codebase structure and suggests better patterns, modularization, and scalable architectural improvements.',
    icon: Box,
    theme: 'orange',
    metric: '95%',
    metricLabel: 'better codebase structure',
    metricIcon: Box,
    colors: {
      border: 'border-orange-500/20',
      hoverBorder: 'group-hover:border-orange-500/50',
      bg: 'bg-[#1F150A]', // Subtle orange tint
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
      shadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
    }
  },
];

const STATS = [
  { icon: User, value: '10K+', label: 'Developers' },
  { icon: Folder, value: '25K+', label: 'Projects' },
  { icon: Code, value: '1M+', label: 'Lines of Code' },
  { icon: Shield, value: '99.9%', label: 'Uptime' },
  { icon: Star, value: '4.9/5', label: 'User Rating', isPurple: true },
];

export default function StatsAndFeaturesSection() {
  return (
    <section className="bg-[#050510] pb-24 pt-12 px-6 lg:px-8 relative z-20 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 -left-[200px] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 -right-[200px] w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16 animate-fade-in">
          <div className="inline-flex items-center rounded-full border border-gray-800 bg-gray-900/50 p-1 text-sm text-gray-400">
            <span className="px-3 py-1 rounded-full bg-[#1A1A24] text-gray-200">Core Platform</span>
            <span className="px-3 py-1">Overview</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.1]">
            Built for Developers<br />
            Who <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 bg-clip-text text-transparent">Ship Relentlessly</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl">
            Four AI agents that keep your codebase clean, secure,<br className="hidden sm:block" />
            and well-documented without slowing you down.
          </p>
          
          {/* Animated pulsing dot connector */}
          <div className="flex items-center justify-center mt-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-purple-500/50" />
            <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </div>

        {/* 4 Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {AGENTS.map((agent, idx) => (
            <div 
              key={idx} 
              className={`group flex flex-col p-6 rounded-2xl border ${agent.colors.border} ${agent.colors.hoverBorder} ${agent.colors.bg} transition-all duration-300 hover:-translate-y-2 ${agent.colors.shadow} relative overflow-hidden`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl border ${agent.colors.border} ${agent.colors.iconBg} ${agent.colors.iconColor}`}>
                  <agent.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className={`p-1.5 rounded-lg border ${agent.colors.border} opacity-50 group-hover:opacity-100 transition-opacity`}>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">{agent.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{agent.desc}</p>
              </div>

              {/* Metric Footer */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <div className={`p-2.5 rounded-full ${agent.colors.iconBg} ${agent.colors.iconColor}`}>
                  <agent.metricIcon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xl font-bold ${agent.colors.iconColor}`}>
                    {agent.metric}
                  </span>
                  <span className="text-xs text-gray-500">
                    {agent.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="w-full bg-[#0B0B14] border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 xl:gap-4 shadow-xl">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-5 flex-1">
              <div className={`p-4 rounded-xl border ${stat.isPurple ? 'bg-[#110C1D] border-purple-500/30 text-purple-500' : 'bg-[#12121A] border-white/5 text-gray-400'}`}>
                <stat.icon className="w-6 h-6" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className={`text-3xl font-extrabold tracking-tight ${stat.isPurple ? 'bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent' : 'text-white'}`}>
                  {stat.value}
                </span>
                <span className={`text-[13px] mt-1 font-medium flex items-center gap-1.5 ${stat.isPurple ? 'text-purple-200/80' : 'text-gray-400'}`}>
                  {stat.label} {stat.isPurple && <Star className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
