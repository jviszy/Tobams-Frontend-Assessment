import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  'Organizational Assessment',
  'Strategic Planning Workshops',
  'Performance Management Systems',
  'Change Management Support',
  'Long-term Sustainability Planning',
];

export function CapacityDevelopment() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-[#FFF8E1] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7C1E6B]">
              Capacity Development
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Build lasting organizational capability with our comprehensive capacity development programs. We work alongside your team to assess current strengths, identify growth opportunities, and implement sustainable solutions that drive long-term success.
            </p>

            {/* Highlighted Statement */}
            <div className="mt-5 p-4 bg-[#F5B800]/20 border-l-4 border-[#F5B800] rounded-r-md">
              <p className="text-sm font-medium text-gray-800">
                Building capacity for sustainable growth and organizational excellence
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#7C1E6B] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-600 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/capacity-workshop.jpg"
                alt="Group of professionals in collaborative workshop"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
