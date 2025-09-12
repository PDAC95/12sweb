'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HexagonAvatar } from '../ui/HexagonAvatar';

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

interface VictoryCardProps {
  card: VictoryCardData;
  className?: string;
  style?: React.CSSProperties;
}

export function VictoryCard({ card, className = '', style }: VictoryCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % card.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + card.images.length) % card.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={`bg-white rounded-3xl shadow-xl w-full border border-gray-100 ${className}`} style={style}>
      <div className="overflow-hidden rounded-t-3xl">
      {/* Image Carousel with Overlaid User Info */}
      <div className="relative w-full aspect-[3/4] bg-gray-100">
        {/* Current Image */}
        <Image
          src={card.images[currentImageIndex].url}
          alt={card.images[currentImageIndex].alt}
          fill
          className="object-cover"
          priority={currentImageIndex === 0}
        />

        {/* User Info Overlay */}
        <div className="absolute top-4 left-4 flex items-center">
          <HexagonAvatar
            src={card.user.avatar}
            size="small"
            borderColor="white"
            className="mr-3 drop-shadow-md"
          />
          <div>
            <h3 className="font-semibold text-white text-sm drop-shadow-lg">{card.user.username}</h3>
            {card.gameTitle && (
              <p className="text-xs text-white text-opacity-90 drop-shadow-lg">{card.gameTitle}</p>
            )}
          </div>
        </div>

        {/* Time Overlay */}
        <div className="absolute top-4 right-4">
          <span className="text-xs text-white bg-black bg-opacity-30 px-2 py-1 rounded-full">{card.timeAgo}</span>
        </div>

        {/* Navigation Buttons (only show if multiple images) */}
        {card.images.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white hover:bg-opacity-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-white hover:bg-opacity-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator - Top Right */}
        {card.images.length > 1 && (
          <div className="absolute top-16 right-4 flex space-x-2 items-center">
            {card.images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'w-6 bg-white'
                    : 'w-2 bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>
        )}

        {/* Comment Bubble */}
        <div className="absolute bottom-20 left-4 right-16">
          <div className="relative">
            {/* Chat bubble with tail */}
            <div className="bg-gray-200 bg-opacity-60 backdrop-blur-md rounded-2xl rounded-bl-md px-4 py-3 border border-white border-opacity-30">
              <p className="text-gray-800 text-sm font-medium">
                ¡Increíble partida! 🔥 Ese último gol fue espectacular
              </p>
            </div>
            {/* Chat bubble tail */}
            <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-6 border-l-transparent border-r-6 border-r-transparent border-t-8 border-t-gray-200 border-t-opacity-60"></div>
          </div>
        </div>

        {/* Interaction Bar - Overlaid on Image */}
        <div className="absolute bottom-10 left-3 right-3">
          <div className="flex items-center justify-between">
            {/* Crown - Likes */}
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:bg-opacity-60 hover:backdrop-blur-md hover:shadow-lg">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757603351/crown_tumzwq.png"
                alt="Crown"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-white drop-shadow-lg">{card.likes}</span>
            </button>

            {/* Comment */}
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:bg-opacity-60 hover:backdrop-blur-md hover:shadow-lg">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757603405/chatw_t3ar2b.png"
                alt="Chat"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-white drop-shadow-lg">{card.comments}</span>
            </button>

            {/* Play/Challenge */}
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:bg-opacity-60 hover:backdrop-blur-md hover:shadow-lg">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757603407/playw_wxrt2k.png"
                alt="Play"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-white drop-shadow-lg">Play</span>
            </button>

            {/* Fire - Streak */}
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:bg-opacity-60 hover:backdrop-blur-md hover:shadow-lg">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757603351/flame_jehqvn.png"
                alt="Flame"
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-sm font-medium text-white drop-shadow-lg">Streak</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}