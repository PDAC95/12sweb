'use client';

import { FeedContainer } from '@/components/feed/FeedContainer';
import { StoriesSection } from '@/components/feed/StoriesSection';

// Mock data for development
const mockBets = [
  {
    id: '1',
    user: {
      name: 'Alex_Pro',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    game: 'FIFA 24',
    description: '1v1 Ultimate Team - Best of 3 matches',
    amount: 50,
    timeLeft: '2h',
    status: 'open' as const,
    participants: 1,
    maxParticipants: 2,
    evidence: null
  },
  {
    id: '2',
    user: {
      name: 'GamerGirl_22',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    game: 'Call of Duty',
    description: 'Warzone Duo - 5 kills minimum',
    amount: 100,
    timeLeft: '45m',
    status: 'active' as const,
    participants: 2,
    maxParticipants: 2,
    evidence: 'https://i.pravatar.cc/400?img=10'
  },
  {
    id: '3',
    user: {
      name: 'ProPlayer_X',
      avatar: 'https://i.pravatar.cc/150?img=3'
    },
    game: 'Fortnite',
    description: 'Solo Victory Royale - No building',
    amount: 25,
    timeLeft: '1h 30m',
    status: 'completed' as const,
    participants: 2,
    maxParticipants: 2,
    evidence: null,
    winner: 'ProPlayer_X'
  }
];


export default function FeedPage() {
  return (
    <div className="w-full">
      {/* Stories Section */}
      <StoriesSection />

      {/* Victory Cards Feed */}
      <FeedContainer />
    </div>
  );
}