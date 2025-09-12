'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { HexagonAvatar } from '@/components/ui/HexagonAvatar';

export default function PlayPage() {
  const router = useRouter();

  const handleChallengeFriend = () => {
    router.push('/challenge-friend');
  };

  const handlePostChallenge = () => {
    router.push('/post-challenge');
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

      <div className="px-6 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">Create Challenge</h1>
          <p className="text-gray-500 text-sm">Choose how you want to bet</p>
        </div>

        {/* Two Main Options */}
        <div className="space-y-4 mb-8">
          
          {/* Challenge Friend */}
          <button
            onClick={handleChallengeFriend}
            className="w-full bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative">
                  <div className="w-full h-full bg-[#B5FD1E]" style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}></div>
                  <svg className="w-6 h-6 text-black absolute inset-0 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-black mb-1">Challenge Friend</h3>
                  <p className="text-gray-500 text-sm">Send direct challenge to someone</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Post Open Challenge */}
          <button
            onClick={handlePostChallenge}
            className="w-full bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative">
                  <div className="w-full h-full bg-[#B5FD1E]" style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}></div>
                  <svg className="w-6 h-6 text-black absolute inset-0 m-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-black mb-1">Post Challenge</h3>
                  <p className="text-gray-500 text-sm">Create open bet for anyone</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

        </div>

        {/* Your Stats */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8 relative z-10">
          <h4 className="text-lg font-semibold text-black mb-4">Your Stats</h4>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">12</div>
              <div className="text-sm text-gray-500">Wins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">3</div>
              <div className="text-sm text-gray-500">Losses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">234</div>
              <div className="text-sm text-gray-500">Coins</div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="text-lg font-semibold text-black mb-4">Recent Challenges</h4>
          <div className="space-y-3">
            
            <div className="bg-white border border-gray-100 rounded-xl p-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <HexagonAvatar
                    src="https://i.pravatar.cc/150?img=1"
                    size="small"
                  />
                  <div>
                    <div className="font-medium text-sm text-black">FIFA 24 vs Alex_Pro</div>
                    <div className="text-xs text-gray-500">Won 50 coins • 2h ago</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                  WON
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <HexagonAvatar
                    src="https://i.pravatar.cc/150?img=2"
                    size="small"
                  />
                  <div>
                    <div className="font-medium text-sm text-black">COD Challenge - Open</div>
                    <div className="text-xs text-gray-500">Waiting for opponent • 1d ago</div>
                  </div>
                </div>
                <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                  PENDING
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}