import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  'Mindset Transformation',
  'Skill Acquisition',
  'Behavioral Change',
  'Performance Optimization',
  'Sustainable Growth',
  'Personal Mastery',
];

export function TransformativePath() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-[#FDE8E7] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left side */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            <span className="text-xs font-medium tracking-[0.08em] uppercase text-[#E8443A]">
              Unlock Your Potential
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[#E8443A]">
              Transformative Path With De-Yau Method
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The De-Yau Method is our proprietary approach to transformative learning that combines evidence-based techniques with personalized coaching. This methodology ensures lasting behavioral change and measurable professional growth.
            </p>

            {/* Image below text on mobile, hidden on desktop (image is on right) */}
            <div className="mt-6 lg:hidden rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/deyau-future.jpg"
                alt="Professional with futuristic holographic data"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Features Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className={`flex items-center gap-2 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#7C1E6B] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 inline-flex items-center px-6 py-3 bg-[#7C1E6B] text-white text-sm font-semibold rounded-md hover:bg-[#5A154D] hover:scale-[1.02] transition-all">
              Enroll Now
            </button>
          </div>

          {/* Image - Right side (desktop only) */}
          <div
            className={`hidden lg:block transition-all duration-600 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/deyau-future.jpg"
                alt="Professional with futuristic holographic data"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
