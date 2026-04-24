import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { TobamsLogo } from '@/components/TobamsLogo';

const companyLinks = [
  'About',
  'Jobs',
  'Projects',
  'Our Founder',
  'Business Model',
  'The Team',
  'Contact Us',
  'Blog',
  'FAQs',
  'Testimonials',
];

const solutionLinks = [
  'Products',
  'Tobams Group Academy',
  'Help a Tech Talent',
  'Campus Ambassadors Program',
  'Join Our Platform',
  'Pricing',
  'Book a Consultation',
  'Join Our Slack Community',
];

export function Footer() {
  return (
    <footer className="w-full bg-[#5A154D]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <TobamsLogo variant="white" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Tobams Group is a global innovation and talent development company transforming tech talent development, specializing in talent acquisition, internships, and skill development with a global perspective.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solution</h3>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="text-sm text-white/70">
                <span className="block text-white/50 text-xs mb-1">Email</span>
                theteam@tobamsgroup.com
              </p>
              <p className="text-sm text-white/70">
                <span className="block text-white/50 text-xs mb-1">Phone</span>
                +447886600748
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-white/50 text-xs mb-2">Registered Offices</h4>
              <div className="space-y-3 text-sm text-white/70">
                <div>
                  <p className="text-white text-xs font-medium">United Kingdom</p>
                  <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                </div>
                <div>
                  <p className="text-white text-xs font-medium">Nigeria</p>
                  <p>4, Muaz Close, Angwa-Rimi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; 2021 Tobams Group, 2024. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
