'use client';

import React from 'react';
import { VictoryCard } from './VictoryCard';

interface VictoryImage {
  id: string;
  url: string;
  alt: string;
}

interface VictoryCardData {
  id: string;
  user: {
    username: string;
    avatar: string;
  };
  images: VictoryImage[];
  likes: string;
  comments: string;
  timeAgo: string;
  gameTitle?: string;
}

interface FeedContainerProps {
  cards?: VictoryCardData[];
}

// Mock data for victory cards
const defaultCards: VictoryCardData[] = [
  {
    id: '1',
    user: {
      username: 'GamerPro_X',
      avatar: 'https://picsum.photos/150/150?random=10'
    },
    images: [
      {
        id: '1a',
        url: 'https://picsum.photos/800/450?random=101',
        alt: 'FIFA Victory Screenshot'
      },
      {
        id: '1b',
        url: 'https://picsum.photos/800/450?random=102',
        alt: 'FIFA Match Stats'
      }
    ],
    likes: '7.8K',
    comments: '398',
    timeAgo: '2h',
    gameTitle: 'FIFA 24 Ultimate Team'
  },
  {
    id: '2',
    user: {
      username: 'QueenOfWars',
      avatar: 'https://picsum.photos/150/150?random=11'
    },
    images: [
      {
        id: '2a',
        url: 'https://picsum.photos/800/450?random=103',
        alt: 'Call of Duty Victory'
      },
      {
        id: '2b',
        url: 'https://picsum.photos/800/450?random=104',
        alt: 'Kill Streak Achievement'
      },
      {
        id: '2c',
        url: 'https://picsum.photos/800/450?random=105',
        alt: 'Final Scoreboard'
      }
    ],
    likes: '12.3K',
    comments: '892',
    timeAgo: '4h',
    gameTitle: 'Call of Duty: Warzone'
  },
  {
    id: '3',
    user: {
      username: 'FortniteKing',
      avatar: 'https://picsum.photos/150/150?random=12'
    },
    images: [
      {
        id: '3a',
        url: 'https://picsum.photos/800/450?random=106',
        alt: 'Victory Royale'
      }
    ],
    likes: '5.2K',
    comments: '156',
    timeAgo: '6h',
    gameTitle: 'Fortnite Battle Royale'
  },
  {
    id: '4',
    user: {
      username: 'ApexLegend_99',
      avatar: 'https://picsum.photos/150/150?random=13'
    },
    images: [
      {
        id: '4a',
        url: 'https://picsum.photos/800/450?random=107',
        alt: 'Apex Legends Win'
      },
      {
        id: '4b',
        url: 'https://picsum.photos/800/450?random=108',
        alt: 'Champion Squad'
      }
    ],
    likes: '9.1K',
    comments: '443',
    timeAgo: '8h',
    gameTitle: 'Apex Legends'
  }
];

export function FeedContainer({ cards = defaultCards }: FeedContainerProps) {
  return (
    <div className="w-full">
      {/* Victory Cards with Stack Effect */}
      <div className="bg-gray-50 pb-24 pt-5 px-4">
        <div className="space-y-0">
          {cards.map((card, index) => (
            <VictoryCard
              key={card.id}
              card={card}
              className={`
                relative
                ${index > 0 ? '-mt-8' : ''}
                hover:scale-[1.02] 
                transition-transform 
                duration-200
              `}
              style={{ zIndex: index + 1 }}
            />
          ))}
        </div>

      </div>
    </div>
  );
}