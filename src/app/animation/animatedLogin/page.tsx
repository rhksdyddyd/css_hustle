'use client';

import './page.css';
import 'boxicons/css/boxicons.min.css';
import Link from 'next/link';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="animated-login-wrapper">
      <div ref={containerRef} className="container">
        <div className="form-container sign-up">
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <h1>Create Account</h1>
            <div className="social-icons">
              <Link href="" className="icons">
                <i className="bx bxl-google"></i>
              </Link>
              <Link href="" className="icons">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link href="" className="icons">
                <i className="bx bxl-github"></i>
              </Link>
              <Link href="" className="icons">
                <i className="bx bxl-linkedin"></i>
              </Link>
            </div>
            <span>Register with E-mail</span>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Enter E-mail"></input>
            <input type="password" placeholder="Enter Password"></input>
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <h1>Sign In</h1>
            <div className="social-icons">
              <Link href="" className="icons">
                <i className="bx bxl-google"></i>
              </Link>
              <Link href="" className="icons">
                <i className="bx bxl-facebook"></i>
              </Link>
              <Link href="" className="icons">
                <i className="bx bxl-github"></i>
              </Link>
              <Link href="" className="icons">
                <i className="bx bxl-linkedin"></i>
              </Link>
            </div>
            <span>Login With Email & Password</span>
            <input type="email" placeholder="Enter E-mail"></input>
            <input type="password" placeholder="Enter Password"></input>
            <Link href="">Forget Password?</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>
                Welcome To <br />
                Css Hustle
              </h1>
              <p>Sign in With ID & Password</p>
              <button
                className="hidden"
                onClick={() => {
                  if (containerRef.current !== null) {
                    // containerRef.current.offsetWidth;
                    containerRef.current.classList.remove('active');
                  }
                }}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hi Fellows!</h1>
              <p>Join &quot;CSS Hustle&quot; to Improve Your Skills</p>
              <button
                className="hidden"
                onClick={() => {
                  if (containerRef.current !== null) {
                    containerRef.current.classList.add('active');
                  }
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
