'use client';

import React from 'react';
import Image from 'next/image';

interface HexagonAvatarProps {
  src: string;
  size?: 'small' | 'medium' | 'large' | 'header';
  borderColor?: string;
  onClick?: () => void;
  className?: string;
}

export function HexagonAvatar({ 
  src, 
  size = 'medium', 
  borderColor = '#B5FD1E',
  onClick,
  className = ''
}: HexagonAvatarProps) {
  // Simple size configuration
  const sizeMap = {
    small: { 
      size: 32
    },
    medium: { 
      size: 55
    },
    large: { 
      size: 84
    },
    header: {
      size: 39 // 30% smaller than medium (55 * 0.7 = 38.5 ≈ 39)
    }
  };

  const config = sizeMap[size];

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* Hexagon clipped image */}
      <div
        className="relative overflow-hidden"
        style={{
          width: config.size,
          height: config.size,
          clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)',
          border: `2px solid ${borderColor}`
        }}
      >
        <Image
          src={src}
          alt="Avatar"
          fill
          className="object-cover hover:scale-105 transition-transform duration-200"
          style={{
            objectPosition: 'center center'
          }}
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200" />
      </div>
    </div>
  );
}