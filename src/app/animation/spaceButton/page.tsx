'use client';

import { useEffect, useRef } from 'react';
import './page.css';

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sizeRef = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (buttonRef.current !== null) {
      sizeRef.current = {
        width: buttonRef.current.getBoundingClientRect().width,
        height: buttonRef.current.getBoundingClientRect().height,
      };
    }
  }, []);

  const createStar = () => {
    if (buttonRef.current !== null) {
      for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style =
          `left:${Math.random() * sizeRef.current.width}px;` +
          `top:${Math.random() * sizeRef.current.height}px`;
        buttonRef.current.appendChild(star);
        setTimeout(() => {
          buttonRef.current?.removeChild(star);
        }, 1000);
      }
    }
  };

  return (
    <section className="space-button-wrapper">
      <button ref={buttonRef} className="space-button" onClick={createStar}>
        Launch
      </button>
    </section>
  );
}
