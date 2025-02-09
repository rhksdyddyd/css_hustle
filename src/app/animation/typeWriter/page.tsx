'use client';

import './page.css';
import { useRef } from 'react';

const TypeWriter = () => {
  const str = 'CSS Typewriter Effect!@#$';
  const wrapperDiv = useRef<HTMLDivElement>(null);
  return (
    <>
      <section ref={wrapperDiv} className="type-writer-wrapper">
        <div className="type-writer justify-left">
          <div className="paragraph-wrapper justify-left">
            <p
              className="text-writer-animation"
              style={{ '--str-len': str.length } as React.CSSProperties}
            >
              {str}
            </p>
          </div>
        </div>
        <div className="type-writer justify-center">
          <div className="paragraph-wrapper justify-center">
            <p
              className="text-writer-animation"
              style={{ '--str-len': str.length } as React.CSSProperties}
            >
              {str}
            </p>
          </div>
        </div>
        <div className="type-writer justify-right">
          <div className="paragraph-wrapper justify-right">
            <p
              className="text-writer-animation"
              style={{ '--str-len': str.length } as React.CSSProperties}
            >
              {str}
            </p>
          </div>
        </div>
        <div className="button-wrapper">
          <button
            onClick={() => {
              if (wrapperDiv.current !== null) {
                Array.from(
                  wrapperDiv.current.getElementsByClassName('paragraph-wrapper')
                ).forEach(el => {
                  el.classList.toggle('paragraph-border');
                });
              }
            }}
          >
            Toggle Border
          </button>
          <button
            onClick={() => {
              if (wrapperDiv.current !== null) {
                Array.from(
                  wrapperDiv.current.getElementsByClassName(
                    'text-writer-animation'
                  )
                ).forEach(el => {
                  el.classList.toggle('text-writer-animation');
                  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                  el.clientLeft;
                  el.classList.toggle('text-writer-animation');
                });
              }
            }}
          >
            Restart
          </button>
        </div>
      </section>
    </>
  );
};

export default TypeWriter;
