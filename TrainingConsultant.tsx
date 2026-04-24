import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const cards = [
  {
    number: '01',
    title: 'Core Consulting Skills',
    description: 'Master fundamental consulting skills including problem diagnosis, stakeholder management, data analysis, and solution presentation.',
    items: ['Problem-Solving Frameworks', 'Client Relationship Management', 'Data-Driven Insights', 'Effective Presentations'],
  },
  {
    number: '02',
    title: 'Advanced Consulting Practices',
    description: 'Develop advanced capabilities in change management, organizational design, digital transformation, and strategic advisory.',
    items: ['Change Management', 'Organizational Design', 'Digital Transformation', 'Strategic Advisory'],
  },
];

export function TrainingConsultant() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-[700px] mx-auto transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#7C1E6B]">
            Training The Consultant
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our consultant training program equips professionals with the skills, methodologies, and frameworks needed to deliver exceptional value to clients. From diagnostic techniques to solution design and implementation, we prepare consultants for real-world challenges.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.number}
              className={`bg-[#F3E8F0] rounded-2xl p-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <span className="text-5xl font-bold text-[#7C1E6B]/30">{card.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-[#7C1E6B]">{card.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{card.description}</p>
              <ul className="mt-4 space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C1E6B] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
