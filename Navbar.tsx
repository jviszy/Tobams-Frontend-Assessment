import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', hasDropdown: true },
  { label: 'What We Do', hasDropdown: true },
  { label: 'Jobs', hasDropdown: true },
  { label: 'Projects', hasDropdown: false },
  { label: 'TG Academy', hasDropdown: false },
  { label: 'Strategic Partnership', hasDropdown: false },
  { label: 'Pricing', hasDropdown: false },
  { label: 'Book a Consultation', hasDropdown: false },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-[56px] flex items-center justify-between">
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#7C1E6B] transition-colors rounded-md hover:bg-gray-50 ${
                  link.label === 'About' ? 'text-[#7C1E6B] border-b-2 border-[#7C1E6B]' : ''
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-[#7C1E6B]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <ul className="px-6 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#7C1E6B] hover:bg-gray-50 rounded-md transition-colors">
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
