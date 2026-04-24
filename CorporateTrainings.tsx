import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  'Leadership Development',
  'Team Building and Collaboration',
  'Technical Skills Training',
  'Customized Learning Paths',
  'Ongoing Support and Resources',
];

export function CorporateTrainings() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7C1E6B]">
              Corporate Trainings
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Empower your organization with customized training programs designed to upskill your teams, enhance productivity, and drive sustainable business growth. Our corporate training solutions are tailored to meet your organization's unique goals, operational needs, and industry requirements.
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

          {/* Image */}
          <div
            className={`transition-all duration-600 delay-150 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/corporate-training.jpg"
                alt="Professional training room with presenter and attendees"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
