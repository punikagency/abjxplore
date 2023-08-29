'use client';

import React, { useState, useEffect, useRef } from 'react';
import './Marquee.css'; // You can define your own styles

interface MarqueeProps {
  text: string;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 50 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;

    const handleAnimation = () => {
      if (marqueeElement) {
        setPosition(
          (position + 1) %
            (marqueeElement.scrollWidth - marqueeElement.clientWidth)
        );
      }
    };

    const interval = setInterval(handleAnimation, speed);

    return () => {
      clearInterval(interval);
    };
  }, [position, speed]);

  return (
    <div className="marquee-container">
      <div
        className="marquee-content 0"
        ref={marqueeRef}
        style={{ transform: `translateX(-${position}px)` }}
      >
        {text}
      </div>
    </div>
  );
};

export default Marquee;
