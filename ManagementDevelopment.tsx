import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const accordionItems = [
  {
    title: 'Strategic Leadership',
    content: 'Developing visionary leadership skills to navigate complex business environments and drive organizational success.',
  },
  {
    title: 'Operational Management',
    content: 'Mastering operational excellence through process optimization, resource management, and quality assurance.',
  },
  {
    title: 'Team Development',
    content: 'Building high-performing teams through effective communication, conflict resolution, and motivational strategies.',
  },
  {
    title: 'Change Management',
    content: 'Leading organizational change with confidence, managing transitions, and fostering adaptability.',
  },
];

export function ManagementDevelopment() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="w-full bg-[#5A154D] py-16 md:py-24">
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
                src="/management-team.jpg"
                alt="Three diverse professionals collaborating"
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
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Management Development Program
            </h2>
            <p className="mt-4 text-white/85 leading-relaxed">
              Our Management Development Program equips current and aspiring managers with the skills, tools, and frameworks needed to lead effectively in today's dynamic business environment.
            </p>

            {/* Accordion */}
            <div className="mt-6 space-y-0">
              {accordionItems.map((item, index) => (
                <div
                  key={item.title}
                  className="border-b border-white/15"
                >
                  <button
                    className="flex items-center justify-between w-full py-4 text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-white font-medium">{item.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/70 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-white/70 text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
