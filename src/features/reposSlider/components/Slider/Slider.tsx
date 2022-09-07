import React, { FC, useEffect, useState } from 'react';
import './Slider.css';
import { ArrowRight } from '@components/Icons/ArrowRight';
import { ArrowLeft } from '@components/Icons/ArrowLeft';

export const Slider: FC = ({ children }) => {
  const childrens = children as React.ReactChildren[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(childrens.length);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    setLength(childrens.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex === length - 1) {
      setCurrentIndex(0);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <button className="left-arrow" onClick={prev}>
          <ArrowRight />
        </button>
        <div className="slider-content-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
          <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {childrens}
          </div>
        </div>
        <button className="right-arrow" onClick={next}>
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
};
