import CTASection from './CTASection';
import FooterSection from './FooterSection';
import HLSVideo from './HLSVideo';

export default function CTAFooterWrapper() {
  return (
    <section className="relative overflow-hidden bg-[#05050a]">
      {/* Background HLS Video */}
      <HLSVideo
        src="https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      />

      <CTASection />
      <FooterSection />
    </section>
  );
}
