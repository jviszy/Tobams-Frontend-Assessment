import { ChevronDown, UserCircle } from 'lucide-react';
import { TobamsLogo } from '@/components/TobamsLogo';

export function TopBar() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <TobamsLogo />
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#7C1E6B] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5A154D] transition-colors">
            <UserCircle className="w-4 h-4" />
            Account
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="bg-[#E8443A] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D13A31] transition-colors">
            Take Assessment
          </button>
        </div>
      </div>
    </header>
  );
}
