'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CreateChallengePage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [challengeData, setChallengeData] = useState({
    type: '',
    game: '',
    amount: '',
    description: '',
    opponent: 'anyone' // 'anyone' or 'specific'
  });

  const challengeTypes = [
    {
      id: 'videogames',
      name: 'Videogames',
      emoji: '🎮',
      description: 'FIFA, COD, Fortnite, etc.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'sports',
      name: 'Sports',
      emoji: '⚽',
      description: 'Football, Basketball, Tennis',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'events',
      name: 'Events',
      emoji: '📺',
      description: 'TV shows, Movies, Awards',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'personal',
      name: 'Personal',
      emoji: '🎯',
      description: 'Custom challenges',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const handleTypeSelect = (type: string) => {
    setChallengeData({ ...challengeData, type });
    setStep(2);
  };

  const handleBack = () => {
    if (step === 1) {
      router.back();
    } else {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    // TODO: Submit challenge to backend
    console.log('Creating challenge:', challengeData);
    router.push('/feed');
  };

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

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-black">Create Challenge</h1>
            <p className="text-sm text-gray-500">Step {step} of 4</p>
          </div>
          <div className="w-10"></div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#B5FD1E] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Challenge Type */}
        {step === 1 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-black mb-2">What type of challenge?</h2>
              <p className="text-gray-500">Choose the category for your bet</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {challengeTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className="aspect-square bg-white border border-gray-200 rounded-2xl p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col items-center justify-center text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-3`}>
                    <span className="text-2xl">{type.emoji}</span>
                  </div>
                  <h3 className="font-semibold text-black mb-1">{type.name}</h3>
                  <p className="text-xs text-gray-500">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Game/Details */}
        {step === 2 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-black mb-2">Game Details</h2>
              <p className="text-gray-500">What are you betting on?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Game/Event</label>
                <input
                  type="text"
                  value={challengeData.game}
                  onChange={(e) => setChallengeData({ ...challengeData, game: e.target.value })}
                  placeholder="e.g., FIFA 24, Call of Duty"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5FD1E] focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Description</label>
                <textarea
                  value={challengeData.description}
                  onChange={(e) => setChallengeData({ ...challengeData, description: e.target.value })}
                  placeholder="Describe the challenge rules..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5FD1E] focus:border-transparent resize-none"
                />
              </div>

              <button
                onClick={handleNext}
                disabled={!challengeData.game || !challengeData.description}
                className="w-full bg-[#B5FD1E] text-black font-semibold py-3 rounded-xl hover:bg-[#A0E01A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Bet Amount */}
        {step === 3 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-black mb-2">Bet Amount</h2>
              <p className="text-gray-500">How many coins do you want to bet?</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Amount (coins)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={challengeData.amount}
                    onChange={(e) => setChallengeData({ ...challengeData, amount: e.target.value })}
                    placeholder="50"
                    min="1"
                    max="1000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B5FD1E] focus:border-transparent pl-12"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 bg-[#B5FD1E] rounded-full flex items-center justify-center">
                      <span className="text-black text-xs font-bold">$</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Amount Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {[25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setChallengeData({ ...challengeData, amount: amount.toString() })}
                    className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                      challengeData.amount === amount.toString()
                        ? 'bg-[#B5FD1E] border-[#B5FD1E] text-black'
                        : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500">Your balance: 234 coins</p>
              </div>

              <button
                onClick={handleNext}
                disabled={!challengeData.amount || parseInt(challengeData.amount) < 1}
                className="w-full bg-[#B5FD1E] text-black font-semibold py-3 rounded-xl hover:bg-[#A0E01A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Opponent Selection */}
        {step === 4 && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-black mb-2">Who can accept?</h2>
              <p className="text-gray-500">Choose who can join your challenge</p>
            </div>

            <div className="space-y-4 mb-8">
              <button
                onClick={() => setChallengeData({ ...challengeData, opponent: 'anyone' })}
                className={`w-full p-4 border rounded-xl transition-colors ${
                  challengeData.opponent === 'anyone'
                    ? 'border-[#B5FD1E] bg-[#B5FD1E]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-black">Anyone can accept</h3>
                    <p className="text-sm text-gray-500">Open challenge for all users</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setChallengeData({ ...challengeData, opponent: 'specific' })}
                className={`w-full p-4 border rounded-xl transition-colors ${
                  challengeData.opponent === 'specific'
                    ? 'border-[#B5FD1E] bg-[#B5FD1E]/10'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-black">Specific opponent</h3>
                    <p className="text-sm text-gray-500">Challenge a specific user</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h4 className="font-medium text-black mb-2">Challenge Summary</h4>
              <div className="space-y-1 text-sm">
                <p><span className="text-gray-500">Type:</span> {challengeData.type}</p>
                <p><span className="text-gray-500">Game:</span> {challengeData.game}</p>
                <p><span className="text-gray-500">Amount:</span> {challengeData.amount} coins</p>
                <p><span className="text-gray-500">Open to:</span> {challengeData.opponent === 'anyone' ? 'Anyone' : 'Specific user'}</p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-[#B5FD1E] text-black font-semibold py-3 rounded-xl hover:bg-[#A0E01A] transition-colors"
            >
              Create Challenge
            </button>
          </div>
        )}

      </div>
    </div>
  );
}