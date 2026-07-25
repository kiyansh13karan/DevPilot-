import HeroSection from './HeroSection';
import StatsAndFeaturesSection from './StatsAndFeaturesSection';
import ChessSection from './ChessSection';
import ReverseChessSection from './ReverseChessSection';
import NumbersSection from './NumbersSection';
import CTAFooterWrapper from './CTAFooterWrapper';

export default function LandingPage() {
  return (
    <main className="bg-[#050510] min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsAndFeaturesSection />
      <ChessSection />
      <ReverseChessSection />
      <NumbersSection />
      <CTAFooterWrapper />
    </main>
  );
}
