'use client';

import './page.css';
import 'boxicons/css/boxicons.min.css';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="animated-login2-wrapper">
      <div ref={containerRef} className="wrapper">
        <span className="rotate-bg"></span>
        <span className="rotate-bg2"></span>

        <div className="form-box login">
          <h2
            className="title animation"
            style={{ '--i': 0, '--j': 21 } as React.CSSProperties}
          >
            Login
          </h2>
          <form action="#">
            <div
              className="input-box animation"
              style={{ '--i': 1, '--j': 22 } as React.CSSProperties}
            >
              <input type="text" required />
              <label htmlFor="">Username</label>
              <i className="bx bxs-user"></i>
            </div>

            <div
              className="input-box animation"
              style={{ '--i': 2, '--j': 23 } as React.CSSProperties}
            >
              <input type="password" required />
              <label htmlFor="">Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button
              type="submit"
              className="btn animation"
              style={{ '--i': 3, '--j': 24 } as React.CSSProperties}
            >
              Login
            </button>

            <div
              className="linkTxt animation"
              style={{ '--i': 5, '--j': 25 } as React.CSSProperties}
            >
              <p>
                Don&apos;t have an account?{' '}
                <Link
                  href=""
                  className="register-link"
                  onClick={e => {
                    e.preventDefault();
                    if (containerRef.current !== null) {
                      containerRef.current.classList.add('active');
                    }
                  }}
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="info-text login">
          <h2
            className="animation"
            style={{ '--i': 0, '--j': 20 } as React.CSSProperties}
          >
            Welcome Back!
          </h2>
          <p
            className="animation"
            style={{ '--i': 1, '--j': 21 } as React.CSSProperties}
          >
            CSS Hustle Welcome you to Our lovely Family thanks For joining
          </p>
        </div>

        <div className="form-box register">
          <h2
            className="title animation"
            style={{ '--i': 17, '--j': 0 } as React.CSSProperties}
          >
            Sign Up
          </h2>

          <form action="#">
            <div
              className="input-box animation"
              style={{ '--i': 18, '--j': 1 } as React.CSSProperties}
            >
              <input type="text" required />
              <label htmlFor="">Username</label>
              <i className="bx bxs-user"></i>
            </div>

            <div
              className="input-box animation"
              style={{ '--i': 19, '--j': 2 } as React.CSSProperties}
            >
              <input type="email" required />
              <label htmlFor="">Email</label>
              <i className="bx bxs-envelope"></i>
            </div>

            <div
              className="input-box animation"
              style={{ '--i': 20, '--j': 3 } as React.CSSProperties}
            >
              <input type="password" required />
              <label htmlFor="">Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button
              type="submit"
              className="btn animation"
              style={{ '--i': 21, '--j': 4 } as React.CSSProperties}
            >
              Sign Up
            </button>

            <div
              className="linkTxt animation"
              style={{ '--i': 22, '--j': 5 } as React.CSSProperties}
            >
              <p>
                Already have an account?{' '}
                <Link
                  href="#"
                  className="login-link"
                  onClick={e => {
                    e.preventDefault();
                    if (containerRef.current !== null) {
                      containerRef.current.classList.remove('active');
                    }
                  }}
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="info-text register">
          <h2
            className="animation"
            style={{ '--i': 17, '--j': 0 } as React.CSSProperties}
          >
            CSS Hustle
          </h2>
          <p
            className="animation"
            style={{ '--i': 18, '--j': 1 } as React.CSSProperties}
          >
            Get more tutorial video on our channel and also Subscribe to our
            channel
          </p>
        </div>
      </div>
    </section>
  );
}
