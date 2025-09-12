'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // TODO: Add proper auth check
    // For now, check if we came from login (temporary)
    const isAuthenticated = true; // Temporary - replace with real auth check
    
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Main content */}
      <main className="flex-1 overflow-y-auto scrollbar-hide pt-20 pb-24">
        {children}
      </main>
      
      {/* Bottom navigation - shared across protected pages */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t border-gray-200 shadow-lg rounded-t-3xl z-50">
        <div className="flex justify-around items-center h-full max-w-[430px] mx-auto px-2">
          
          {/* Home */}
          <button 
            onClick={() => navigateTo('/feed')}
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] p-1 group"
          >
            <div className="mb-1">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757514700/home_rufbjb.png"
                alt="Home"
                width={24}
                height={24}
                className={`transition-opacity group-hover:opacity-80 ${
                  isActive('/feed') ? 'opacity-100' : 'opacity-60'
                }`}
              />
            </div>
            <span className={`text-xs font-medium ${
              isActive('/feed') ? 'text-gray-700' : 'text-gray-400'
            }`}>Home</span>
          </button>

          {/* Chat */}
          <button 
            onClick={() => navigateTo('/chat')}
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] p-1 group"
          >
            <div className="mb-1">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757514700/chat_vgmna6.png"
                alt="Chat"
                width={24}
                height={24}
                className={`transition-opacity group-hover:opacity-80 ${
                  isActive('/chat') ? 'opacity-100' : 'opacity-60'
                }`}
              />
            </div>
            <span className={`text-xs font-medium ${
              isActive('/chat') ? 'text-gray-700' : 'text-gray-400'
            }`}>Chat</span>
          </button>

          {/* Play Button */}
          <button 
            onClick={() => navigateTo('/play')}
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] p-1 group"
          >
            <div className="mb-1">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757514700/play_dg51hd.png"
                alt="Play"
                width={32}
                height={32}
                className={`transition-opacity group-hover:opacity-80 ${
                  isActive('/play') ? 'opacity-100' : 'opacity-60'
                }`}
              />
            </div>
            <span className={`text-xs font-medium ${
              isActive('/play') ? 'text-gray-700' : 'text-gray-400'
            }`}>Play</span>
          </button>

          {/* Tournaments */}
          <button 
            onClick={() => navigateTo('/tournaments')}
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] p-1 group"
          >
            <div className="mb-1">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757514700/tournament_m4x1or.png"
                alt="Tournaments"
                width={24}
                height={24}
                className={`transition-opacity group-hover:opacity-80 ${
                  isActive('/tournaments') ? 'opacity-100' : 'opacity-60'
                }`}
              />
            </div>
            <span className={`text-xs font-medium ${
              isActive('/tournaments') ? 'text-gray-700' : 'text-gray-400'
            }`}>Tournaments</span>
          </button>

          {/* Stats */}
          <button 
            onClick={() => navigateTo('/stats')}
            className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] p-1 group"
          >
            <div className="mb-1">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757514700/trophy_envcan.png"
                alt="Stats"
                width={24}
                height={24}
                className={`transition-opacity group-hover:opacity-80 ${
                  isActive('/stats') ? 'opacity-100' : 'opacity-60'
                }`}
              />
            </div>
            <span className={`text-xs font-medium ${
              isActive('/stats') ? 'text-gray-700' : 'text-gray-400'
            }`}>Stats</span>
          </button>

        </div>
      </nav>
    </div>
  );
}