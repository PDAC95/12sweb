'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Search } from 'lucide-react';
import { HexagonAvatar } from '@/components/ui/HexagonAvatar';

type TabType = 'online' | 'friends' | 'top' | 'recent';

export default function ChallengeFriendPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('online');

  // Mock data for all players
  const allPlayers = [
    // Online players
    {
      id: '1',
      username: 'alex_gamer',
      avatar: 'https://i.pravatar.cc/150?img=1',
      status: 'online',
      lastPlayed: '2 hours ago',
      winRate: '75%',
      category: ['online', 'friends', 'recent'],
      ranking: 15
    },
    {
      id: '2',
      username: 'fifa_master',
      avatar: 'https://i.pravatar.cc/150?img=3',
      status: 'online',
      lastPlayed: '30 min ago',
      winRate: '92%',
      category: ['online', 'top'],
      ranking: 3
    },
    {
      id: '3',
      username: 'cod_legend',
      avatar: 'https://i.pravatar.cc/150?img=4',
      status: 'online',
      lastPlayed: '1 hour ago',
      winRate: '88%',
      category: ['online', 'top', 'recent'],
      ranking: 5
    },
    {
      id: '4',
      username: 'pro_player_x',
      avatar: 'https://i.pravatar.cc/150?img=5',
      status: 'online',
      lastPlayed: '15 min ago',
      winRate: '95%',
      category: ['online', 'top'],
      ranking: 1
    },
    // Friends (offline)
    {
      id: '5',
      username: 'ninja_pro',
      avatar: 'https://i.pravatar.cc/150?img=2',
      status: 'offline',
      lastPlayed: '1 day ago',
      winRate: '68%',
      category: ['friends', 'recent'],
      ranking: 28
    },
    {
      id: '6',
      username: 'best_friend',
      avatar: 'https://i.pravatar.cc/150?img=6',
      status: 'offline',
      lastPlayed: '3 hours ago',
      winRate: '73%',
      category: ['friends'],
      ranking: 22
    },
    // Top players
    {
      id: '7',
      username: 'champion_99',
      avatar: 'https://i.pravatar.cc/150?img=7',
      status: 'offline',
      lastPlayed: '2 hours ago',
      winRate: '96%',
      category: ['top'],
      ranking: 2
    },
    {
      id: '8',
      username: 'elite_gamer',
      avatar: 'https://i.pravatar.cc/150?img=8',
      status: 'offline',
      lastPlayed: '4 hours ago',
      winRate: '89%',
      category: ['top'],
      ranking: 4
    },
    // Recent opponents
    {
      id: '9',
      username: 'last_match',
      avatar: 'https://i.pravatar.cc/150?img=9',
      status: 'offline',
      lastPlayed: '5 hours ago',
      winRate: '65%',
      category: ['recent'],
      ranking: 45
    }
  ];

  // Tab configuration
  const tabs = [
    { 
      id: 'online' as TabType, 
      label: 'Online',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
        </svg>
      )
    },
    { 
      id: 'friends' as TabType, 
      label: 'Friends',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    { 
      id: 'top' as TabType, 
      label: 'Top',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      id: 'recent' as TabType, 
      label: 'Recent',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Filter players based on active tab and search query
  const filteredPlayers = allPlayers
    .filter(player => player.category.includes(activeTab))
    .filter(player => player.username.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (activeTab === 'top') return a.ranking - b.ranking;
      if (activeTab === 'online') return a.status === 'online' ? -1 : 1;
      return 0;
    });

  const handleBack = () => {
    router.back();
  };

  const handleSelectFriend = (friendId: string) => {
    setSelectedFriend(friendId);
  };

  const handleContinue = () => {
    if (selectedFriend) {
      // TODO: Navigate to challenge creation form with selected friend
      router.push(`/create-challenge?friend=${selectedFriend}`);
    }
  };

  return (
    <div className="max-w-[430px] mx-auto w-full h-full bg-white overflow-hidden">
      
      {/* Top-Right Geometric Shape - Decorative only */}
      <div className="fixed top-12 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] -mr-16 pointer-events-none z-0">
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/geometric_iufkpm.png"
          alt=""
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>

      {/* Center-Left Geometric Shape - Decorative only */}
      <div className="fixed top-1/2 left-0 w-[180px] h-[180px] md:w-[252px] md:h-[252px] -ml-16 -translate-y-1/2 rotate-[20deg] pointer-events-none z-0">
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/geometric_iufkpm.png"
          alt=""
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>

      {/* Bottom-Right Geometric Shape - Decorative only */}
      <div className="fixed bottom-12 right-0 w-[400px] h-[400px] md:w-[560px] md:h-[560px] -mr-32 rotate-[-15deg] pointer-events-none z-0">
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/geometric_iufkpm.png"
          alt=""
          fill
          className="object-contain opacity-15"
          priority
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <button 
          onClick={handleBack}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-black">Challenge Friend</h1>
        <div className="w-10 h-10"></div> {/* Spacer */}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="p-6 pb-4">
        
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search players..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#B5FD1E] text-black'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-black'
                }`}
              >
                <span className="text-sm font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-black">
            {tabs.find(tab => tab.id === activeTab)?.label}
            {activeTab === 'top' && (
              <span className="text-sm text-gray-500 font-normal ml-2">
                (by ranking)
              </span>
            )}
          </h2>
          <span className="text-sm text-gray-500">
            {filteredPlayers.length} players
          </span>
        </div>

        {/* Players List - Scrollable */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pb-28 px-6">
          <div className="space-y-2">
          {filteredPlayers.map((player) => (
            <button
              key={player.id}
              onClick={() => handleSelectFriend(player.id)}
              className={`w-full p-3 rounded-xl border transition-all duration-200 ${
                selectedFriend === player.id
                  ? 'border-[#B5FD1E] bg-[#B5FD1E] bg-opacity-100'
                  : 'border-gray-100 hover:border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <HexagonAvatar
                      src={player.avatar}
                      size="small"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      player.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-black">@{player.username}</div>
                    <div className="text-xs text-gray-500">{player.lastPlayed}</div>
                  </div>
                </div>
                <div className="text-right">
                  {activeTab === 'top' ? (
                    <>
                      <div className="text-sm text-gray-500">Rank #{player.ranking}</div>
                      <div className="text-lg font-bold text-black">{player.winRate}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-sm text-gray-500">Win Rate</div>
                      <div className="text-lg font-bold text-black">{player.winRate}</div>
                    </>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

            {/* No results */}
            {filteredPlayers.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">No players found</h3>
                <p className="text-gray-500">Try searching with a different name</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Continue Button - Fixed at bottom */}
      <div className="fixed bottom-24 left-0 right-0 p-6">
        <button
          onClick={handleContinue}
          disabled={!selectedFriend}
          className={`w-full py-4 rounded-full font-semibold transition-all duration-200 ${
            selectedFriend
              ? 'bg-[#B5FD1E] hover:bg-[#a5ed0e] text-black'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {selectedFriend 
            ? `Challenge @${filteredPlayers.find(p => p.id === selectedFriend)?.username}` 
            : 'Select a player to continue'}
        </button>
      </div>

    </div>
  );
}