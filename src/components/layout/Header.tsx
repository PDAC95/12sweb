'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HexagonAvatar } from '@/components/ui/HexagonAvatar';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleProfileClick = () => {
    setShowDropdown(false);
    router.push('/profile');
  };

  const handleLogoutClick = async () => {
    setShowDropdown(false);
    await logout();
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="flex items-center justify-between h-16 max-w-[430px] mx-auto px-4">
        
        {/* Left: User Avatar with Dropdown */}
        <div className="flex justify-start w-14 relative" ref={dropdownRef}>
          <HexagonAvatar
            src="https://i.pravatar.cc/150?img=3"
            size="header"
            onClick={handleAvatarClick}
            className="hover:scale-105 transition-transform duration-200 cursor-pointer"
          />

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-48 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="font-medium text-gray-900">{user?.username || 'User'}</p>
                <p className="text-sm text-gray-500">{user?.coins || 0} coins</p>
              </div>

              <button
                onClick={handleProfileClick}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-gray-700"
              >
                Profile
              </button>

              <button
                onClick={handleLogoutClick}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors text-red-600"
              >
                Logout
              </button>
            </div>
          )}
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