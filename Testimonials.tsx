import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Tobams Group transformed our team's capabilities. The customized training program addressed our specific needs and delivered measurable results within weeks.",
    name: 'Sarah Johnson',
    role: 'HR Director, TechCorp',
    initials: 'SJ',
    color: 'bg-[#7C1E6B]',
  },
  {
    quote: "The Management Development Program gave our leaders the tools they needed to drive organizational change. Highly recommended for any growing company.",
    name: 'Michael Chen',
    role: 'CEO, InnovateLabs',
    initials: 'MC',
    color: 'bg-[#5A154D]',
  },
  {
    quote: "Working with Tobams Group on our capacity development initiative was a game-changer. Their approach is practical, data-driven, and delivers real outcomes.",
    name: 'Amara Okafor',
    role: 'Operations Manager, GlobalNGO',
    initials: 'AO',
    color: 'bg-[#9C2789]',
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className={`text-3xl md:text-4xl font-semibold text-[#7C1E6B] text-center transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Testimonials
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white border border-gray-100 rounded-2xl p-8 shadow-card transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-sm font-medium`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
