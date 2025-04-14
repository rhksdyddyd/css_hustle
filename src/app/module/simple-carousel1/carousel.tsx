'use client';

import { useEffect, useRef, useState } from 'react';

const ChevronLeft = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M15 6L9 12L15 18"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ChevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

interface Props {
  carouselList: string[];
}

const Carousel = ({ carouselList }: Props) => {
  const [currIndex, setCurrIndex] = useState(1);
  const [currList, setCurrList] = useState<string[]>();

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];

      setCurrList(newList);
    }
  }, [carouselList]);

  useEffect(() => {
    if (carouselRef.current !== null) {
      const offset = 1030 * currIndex; // size of image
      carouselRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [currIndex]);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = '';
      }
    }, 500);
  };

  const handleSwipe = (direction: number) => {
    const newIndex = currIndex + direction;

    if (newIndex === carouselList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselList.length);
    }

    setCurrIndex(prev => prev + direction);
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = 'all 0.5s ease-in-out';
    }
  };

  return (
    <div className={'simple-carousel1-container'}>
      <div className={'carouselWrapper'}>
        <button
          type="button"
          className={'swipeLeft'}
          onClick={() => handleSwipe(-1)}
        >
          {ChevronLeft}
        </button>
        <button
          type="button"
          className={'swipeRight'}
          onClick={() => handleSwipe(1)}
        >
          {ChevronRight}
        </button>
        <ul className={'carousel'} ref={carouselRef}>
          {currList?.map((image, idx) => {
            const key = `${image}-${idx}`;
            return (
              <li key={key} className={'carouselItem'}>
                <img src={image} alt="carousel-img" width={1000} height={500} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
