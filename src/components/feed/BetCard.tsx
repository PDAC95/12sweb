'use client';

import React from 'react';
import Image from 'next/image';
import { HexagonAvatar } from '@/components/ui/HexagonAvatar';

interface BetCardProps {
  bet: {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    game: string;
    description: string;
    amount: number;
    timeLeft: string;
    status: 'open' | 'active' | 'completed';
    participants: number;
    maxParticipants: number;
    evidence?: string | null;
    winner?: string;
  };
}

export function BetCard({ bet }: BetCardProps) {
  const getStatusColor = () => {
    switch (bet.status) {
      case 'open':
        return 'bg-green-100 text-green-800';
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = () => {
    switch (bet.status) {
      case 'open':
        return 'Open';
      case 'active':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="bg-white border-b border-gray-100 p-4">
      {/* Header with user info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <HexagonAvatar
            src={bet.user.avatar}
            size="small"
            className="mr-3"
          />
          <div>
            <p className="font-semibold text-gray-800 text-sm">{bet.user.name}</p>
            <p className="text-xs text-gray-500">{bet.timeLeft} left</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </span>
      </div>

      {/* Game info */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-bold text-gray-800">{bet.game}</h3>
          <div className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/coin_znnvqr.png"
              alt="Coins"
              width={16}
              height={16}
              className="mr-1"
            />
            <span className="font-bold text-gray-800">{bet.amount}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600">{bet.description}</p>
      </div>

      {/* Evidence section (if available) */}
      {bet.evidence && (
        <div className="mb-3">
          <div className="relative w-full h-32 rounded-lg overflow-hidden">
            <Image
              src={bet.evidence}
              alt="Bet evidence"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium">
                Evidence
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <span>{bet.participants}/{bet.maxParticipants} players</span>
          {bet.status === 'completed' && bet.winner && (
            <span className="ml-3 font-medium text-green-600">
              🏆 {bet.winner}
            </span>
          )}
        </div>
        
        {bet.status === 'open' && (
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            Join Bet
          </button>
        )}
        
        {bet.status === 'active' && (
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            View Details
          </button>
        )}
        
        {bet.status === 'completed' && (
          <button className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            View Results
          </button>
        )}
      </div>
    </div>
  );
}