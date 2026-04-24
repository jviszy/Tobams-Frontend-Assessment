import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CTABanner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-[#7C1E6B] py-12 md:py-16">
      <div
        className={`max-w-[800px] mx-auto px-6 text-center transition-all duration-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
          Ready to transform your workforce and unlock the full potential of your organization? Let's talk training.
        </h2>
        <button className="mt-6 inline-flex items-center px-6 py-3 bg-transparent text-white text-sm font-semibold rounded-md border-2 border-white hover:bg-white hover:text-[#7C1E6B] transition-all">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}
