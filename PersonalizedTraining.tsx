import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  'One-on-One Coaching',
  'Skills Assessment and Gap Analysis',
  'Career Development Planning',
  'Progress Tracking and Feedback',
  'Flexible Scheduling',
];

export function PersonalizedTraining() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/individual-training.jpg"
                alt="Professional woman working on laptop"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-600 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7C1E6B]">
              Personalized Individual Training
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our personalized training programs are designed to address individual learning goals and career aspirations. Through one-on-one coaching and tailored learning paths, we help professionals unlock their full potential and achieve their desired outcomes.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#7C1E6B] flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
