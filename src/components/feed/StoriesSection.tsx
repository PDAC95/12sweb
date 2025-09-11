'use client';

import React from 'react';
import { HexagonAvatar } from '@/components/ui/HexagonAvatar';

interface Story {
  id: string;
  username: string;
  avatar: string;
}

interface StoriesSectionProps {
  stories?: Story[];
}

// Mock data for stories - Full names for better UX
const defaultStories: Story[] = [
  {
    id: '1',
    username: 'Jane Cooper',
    avatar: 'https://picsum.photos/150/150?random=1'
  },
  {
    id: '2',
    username: 'Robert Fox',
    avatar: 'https://picsum.photos/150/150?random=2'
  },
  {
    id: '3',
    username: 'Jenny Wilson',
    avatar: 'https://picsum.photos/150/150?random=3'
  },
  {
    id: '4',
    username: 'Albert Flores',
    avatar: 'https://picsum.photos/150/150?random=4'
  },
  {
    id: '5',
    username: 'Brooklyn Simmons',
    avatar: 'https://picsum.photos/150/150?random=5'
  },
  {
    id: '6',
    username: 'Devon Lane',
    avatar: 'https://picsum.photos/150/150?random=6'
  },
  {
    id: '7',
    username: 'Esther Howard',
    avatar: 'https://picsum.photos/150/150?random=7'
  },
  {
    id: '8',
    username: 'Wade Warren',
    avatar: 'https://picsum.photos/150/150?random=8'
  }
];

export function StoriesSection({ stories = defaultStories }: StoriesSectionProps) {
  return (
    <div className="w-full bg-white pt-6 pb-4 relative">
      {/* Stories Container */}
      <div 
        className="flex overflow-x-auto stories-container px-4"
        style={{
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',
          gap: '16px'
        }}
      >
        {/* My Victory - Add button */}
        <div 
          className="flex-shrink-0 flex flex-col items-center"
          style={{ 
            scrollSnapAlign: 'start',
            width: '80px'
          }}
        >
          <div
            className="relative flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
            style={{
              width: 55,
              height: 55,
              clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)',
              backgroundColor: '#B5FD1E',
              border: '2px solid #B5FD1E'
            }}
          >
            {/* Plus icon */}
            <div className="text-black text-xl font-bold leading-none">+</div>
          </div>
          <span className="text-xs text-gray-700 mt-2 text-center font-medium">My Victory</span>
        </div>

        {/* User Stories */}
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="flex-shrink-0 flex flex-col items-center"
            style={{ 
              scrollSnapAlign: 'start',
              width: '80px'
            }}
          >
            <HexagonAvatar
              src={story.avatar}
              size="medium"
              borderColor="#E5E7EB"
              className="mb-1"
            />
            <span className="text-xs text-gray-700 text-center font-medium leading-tight">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {/* Fade gradient indicator on right */}
      <div className="absolute right-0 top-6 bottom-4 w-6 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      
      <style jsx>{`
        .stories-container::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
          background: transparent;
        }
        .stories-container::-webkit-scrollbar-track {
          display: none;
        }
        .stories-container::-webkit-scrollbar-thumb {
          display: none;
        }
        .stories-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          overflow-y: hidden;
        }
      `}</style>
    </div>
  );
}