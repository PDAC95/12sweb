'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function PostChallengePage() {
  const router = useRouter();

  const challengeTypes = [
    {
      id: 'videogames',
      title: 'Video Games',
      icon: (
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757708685/videogame_swuree.png"
          alt="Video Games"
          width={24}
          height={24}
        />
      ),
      description: 'Compete in your favorite game',
      examples: 'FIFA, COD, Fortnite, Rocket League',
      route: '/post-challenge/videogame'
    },
    {
      id: 'sports',
      title: 'Sports',
      icon: (
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757708685/sports_czn2hc.png"
          alt="Sports"
          width={24}
          height={24}
        />
      ),
      description: 'Bet on sports events',
      examples: 'Soccer, NBA, F1, UFC, Tennis',
      route: '/post-challenge/sports'
    },
    {
      id: 'public_events',
      title: 'Public Events',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Predict real world outcomes',
      examples: 'Awards, Elections, Celebrity, Markets',
      route: '/post-challenge/events'
    },
    {
      id: 'personal',
      title: 'Personal Challenge',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      description: 'Challenge anyone to anything',
      examples: '1v1 Sports, Physical feats, Skills, Creative',
      route: '/post-challenge/personal'
    }
  ];

  const handleBack = () => {
    router.back();
  };

  const handleSelectType = (route: string) => {
    router.push(route);
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
        <h1 className="text-lg font-semibold text-black">Post Challenge</h1>
        <div className="w-10 h-10"></div>
      </div>

      <div className="relative z-10 p-6 pb-32">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">Choose Challenge Type</h2>
          <p className="text-gray-500 text-sm">What kind of bet do you want to create?</p>
        </div>

        {/* Challenge Types */}
        <div className="space-y-4">
          {challengeTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleSelectType(type.route)}
              className="w-full bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative">
                    <div className="w-full h-full bg-[#B5FD1E]" style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-black">
                      {type.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black mb-1">{type.title}</h3>
                    <p className="text-gray-500 text-sm mb-1">{type.description}</p>
                    <p className="text-gray-400 text-xs">{type.examples}</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

      </div>

    </div>
  );
}