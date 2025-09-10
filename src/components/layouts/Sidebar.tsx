'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Trophy, 
  Wallet, 
  Users, 
  BarChart3 
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const menuItems = [
  { href: '/feed', label: 'Feed', icon: Home },
  { href: '/bets', label: 'Bets', icon: Trophy },
  { href: '/wallet', label: 'Wallet', icon: Wallet },
  { href: '/friends', label: 'Friends', icon: Users },
  { href: '/stats', label: 'Statistics', icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white h-[calc(100vh-4rem)] shadow-sm">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                isActive 
                  ? "bg-purple-100 text-purple-600" 
                  : "hover:bg-gray-100 text-gray-700"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}