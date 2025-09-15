'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { HexagonAvatar } from '@/components/ui/HexagonAvatar';

export default function PlayPage() {
  const router = useRouter();

  const handleCreateChallenge = () => {
    router.push('/challenge/create');
  };

  // Mock data for active challenges
  const activeChallenges = [
    {
      id: 1,
      game: "FIFA 24",
      opponent: "Alex_Pro",
      amount: 50,
      status: "In Progress",
      avatar: "https://i.pravatar.cc/150?img=1",
      timeRemaining: "2h 30m"
    },
    {
      id: 2,
      game: "Call of Duty",
      opponent: "GamerGirl23",
      amount: 25,
      status: "Waiting Evidence",
      avatar: "https://i.pravatar.cc/150?img=3",
      timeRemaining: "45m"
    }
  ];

  // Mock data for pending invites
  const pendingInvites = [
    {
      id: 1,
      game: "Fortnite",
      challenger: "ProPlayer99",
      amount: 75,
      avatar: "https://i.pravatar.cc/150?img=4",
      timeLeft: "6h"
    },
    {
      id: 2,
      game: "FIFA 24",
      challenger: "SoccerKing",
      amount: 30,
      avatar: "https://i.pravatar.cc/150?img=5",
      timeLeft: "2d"
    }
  ];

  return (
    <div className="max-w-[430px] mx-auto w-full h-full bg-white overflow-hidden">

      {/* Decorative Geometric Shapes */}
      <div className="fixed top-12 right-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] -mr-16 pointer-events-none z-0">
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/geometric_iufkpm.png"
          alt=""
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>

      <div className="fixed top-1/2 left-0 w-[180px] h-[180px] md:w-[252px] md:h-[252px] -ml-16 -translate-y-1/2 rotate-[20deg] pointer-events-none z-0">
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/geometric_iufkpm.png"
          alt=""
          fill
          className="object-contain opacity-20"
          priority
        />
      </div>

      <div className="fixed bottom-12 right-0 w-[400px] h-[400px] md:w-[560px] md:h-[560px] -mr-32 rotate-[-15deg] pointer-events-none z-0">
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/geometric_iufkpm.png"
          alt=""
          fill
          className="object-contain opacity-15"
          priority
        />
      </div>

      <div className="px-6 py-8 relative z-10">

        {/* Header with Coins */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">Challenge Arena</h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-[#B5FD1E] rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">$</span>
            </div>
            <span className="text-lg font-semibold text-black">234 coins</span>
          </div>
        </div>

        {/* Main CREATE CHALLENGE Button */}
        <button
          onClick={handleCreateChallenge}
          className="w-full bg-white border-2 border-[#B5FD1E] rounded-2xl p-6 mb-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">CREATE CHALLENGE</h3>
              <p className="text-gray-600 text-sm">Start a new bet</p>
            </div>
          </div>
        </button>

        {/* Active Challenges */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Active Challenges
          </h4>
          {activeChallenges.length > 0 ? (
            <div className="space-y-3">
              {activeChallenges.map((challenge) => (
                <div key={challenge.id} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <HexagonAvatar
                        src={challenge.avatar}
                        size="small"
                      />
                      <div>
                        <div className="font-medium text-sm text-black">{challenge.game} vs {challenge.opponent}</div>
                        <div className="text-xs text-gray-500">{challenge.amount} coins • {challenge.timeRemaining} left</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded mb-1">
                        {challenge.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <p className="text-sm">No active challenges</p>
            </div>
          )}
        </div>

        {/* Pending Invites */}
        <div>
          <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Pending Invites
          </h4>
          {pendingInvites.length > 0 ? (
            <div className="space-y-3">
              {pendingInvites.map((invite) => (
                <div key={invite.id} className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <HexagonAvatar
                        src={invite.avatar}
                        size="small"
                      />
                      <div>
                        <div className="font-medium text-sm text-black">{invite.game} from {invite.challenger}</div>
                        <div className="text-xs text-gray-500">{invite.amount} coins • Expires in {invite.timeLeft}</div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded hover:bg-green-600 transition-colors">
                        Accept
                      </button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded hover:bg-gray-300 transition-colors">
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500">
              <p className="text-sm">No pending invites</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}