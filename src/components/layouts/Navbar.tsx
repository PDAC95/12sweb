'use client';

import Link from 'next/link';
import { Coins, Bell, User } from 'lucide-react';

export function Navbar() {

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/feed" className="text-2xl font-bold text-purple-600">
              Soisi
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-100 rounded-full">
              <Coins className="h-5 w-5 text-yellow-600" />
              <span className="font-semibold">100</span>
            </div>

            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>

            <Link href="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </Link>

            <Link 
              href="/api/auth/logout"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}