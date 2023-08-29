import React, { useRef, useState } from 'react';
import './CustomCarousel.css'; // Import your custom CSS file for styling

interface District {
  name: string;
}

interface CustomCarouselProps {
  districts: District[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ districts }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const newPosition = direction === 'left' ? -containerWidth : containerWidth;

    container.style.transform = `translateX(${newPosition}px)`;

    setTimeout(() => {
      if (!container) return;
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';

      if (direction === 'left') {
        setCurrentIndex((prevIndex) =>
          prevIndex === districts.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? districts.length - 1 : prevIndex - 1
        );
      }

      setTimeout(() => {
        if (!container) return;
        container.style.transition = '';
      }, 0);
    }, 300);
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      {districts.map((district, index) => (
        <div
          key={index}
          className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
        >
          <div className="carousel-item-content">
            <div className="w-32 h-32 rounded-full grid place-items-center shadow-md bg-slate-50">
              <p className="text-lg">{district.name}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        className="carousel-button left"
        onClick={() => handleSwipe('left')}
      >
        &lt;
      </button>
      <button
        className="carousel-button right"
        onClick={() => handleSwipe('right')}
      >
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
