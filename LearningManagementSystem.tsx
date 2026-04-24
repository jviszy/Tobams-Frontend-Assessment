import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const features = [
  'Comprehensive Course Catalog',
  'Expert-Led Training',
  'Flexible Learning Options',
  'Industry-Recognized Certifications',
  'Personalized Learning Paths',
  'Continuous Skill Development',
];

export function LearningManagementSystem() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-[#FAF7F5] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`flex justify-center transition-all duration-600 delay-100 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden shadow-xl">
              <img
                src="/lms-professionals.jpg"
                alt="Two business professionals in office hallway"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7C1E6B]">
              Learning Management System
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.
            </p>

            {/* Feature Grid */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C1E6B] flex-shrink-0" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-6 inline-flex items-center px-6 py-3 bg-[#7C1E6B] text-white text-sm font-semibold rounded-md hover:bg-[#5A154D] hover:scale-[1.02] transition-all">
              Explore LMS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
