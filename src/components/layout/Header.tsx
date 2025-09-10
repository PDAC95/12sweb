'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HexagonAvatar } from '@/components/ui/HexagonAvatar';

export function Header() {
  const router = useRouter();

  const handleAvatarClick = () => {
    router.push('/profile');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between h-16 max-w-[430px] mx-auto px-4">
        
        {/* Left: User Avatar */}
        <div className="flex justify-start w-14">
          <HexagonAvatar
            src="https://i.pravatar.cc/150?img=3"
            size="header"
            onClick={handleAvatarClick}
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>

        {/* Center: Logo - Smaller size */}
        <div className="flex-1 flex justify-center">
          <button 
            onClick={() => router.push('/feed')}
            className="hover:scale-105 transition-transform duration-200"
          >
            <Image
              src="https://res.cloudinary.com/dxri4npkx/image/upload/v1754939469/logo-azulgris_spk9wg.png"
              alt="Soisi"
              width={40}
              height={14}
              className="object-contain"
              priority
            />
          </button>
        </div>

        {/* Right: Search - Fixed width matching left side */}
        <div className="flex justify-end w-14">
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
            <Image
              src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757518025/search_ustkon.png"
              alt="Search"
              width={24}
              height={24}
              className="object-contain"
            />
          </button>
        </div>

      </div>
    </header>
  );
}