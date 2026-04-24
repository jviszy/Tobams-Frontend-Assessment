import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Hero() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Professional analyzing data dashboard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-[800px] mx-auto px-6 py-20 text-center transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.08em] uppercase text-white bg-black/30 rounded-full border border-white/20">
          What We Do
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
          Training and Development
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-[600px] mx-auto leading-relaxed">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>
        <button className="mt-6 inline-flex items-center px-6 py-3 bg-[#7C1E6B] text-white text-sm font-semibold rounded-md hover:bg-[#5A154D] hover:scale-[1.02] transition-all shadow-lg">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
