import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CSS HUSTLE',
  description: 'CSS Examples',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body style={{ display: 'flex', margin: '0' }}>
        <nav
          style={{
            padding: '0 5px',
            width: '20%',
            height: '100vh',
            boxSizing: 'border-box',
            borderRight: '3px solid #efefef',
            marginRight: '15px',
          }}
        >
          <h1>
            <Link href="/">#</Link>
          </h1>
          <h2>Tutorial</h2>
          <ol>
            <li>
              <Link href="/tutorial/simpleStyle1">Simple Style 1</Link>
            </li>
          </ol>
          <h2>Module</h2>
          <ol>
            <li>
              <Link href="/module/tabs1">Tabs 1</Link>
            </li>
            <li>
              <Link href="/module/infinite-carousel1">Infinite Carousel 1</Link>
            </li>
          </ol>
          <h2>Animation</h2>
          <ol>
            <li>
              <Link href="/animation/spaceButton">Space Button</Link>
            </li>
            <li>
              <Link href="/animation/watermelon">Watermelon</Link>
            </li>
            <li>
              <Link href="/animation/rotatingCard">Rotating Card</Link>
            </li>
            <li>
              <Link href="/animation/animatedLogin">Animated Login</Link>
            </li>
            <li>
              <Link href="/animation/animatedLogin2">Animated Login 2</Link>
            </li>
            <li>
              <Link href="/animation/typeWriter">Type Writer</Link>
            </li>
            <li>
              <Link href="/animation/likeButton">Like Button</Link>
            </li>
            <li>
              <Link href="/animation/soundWave">Sound Wave</Link>
            </li>
            <li>
              <Link href="/animation/wave">Wave</Link>
            </li>
            <li>
              <Link href="/animation/spin">Spin</Link>
            </li>
          </ol>
          <h2>3d</h2>
          <ol>
            <li>
              <Link href="/3d/first-step">first-step</Link>
            </li>
            <li>
              <Link href="/3d/orbit-controls">orbit-controls</Link>
            </li>
            <li>
              <Link href="/3d/rotate-animation">rotate-animation</Link>
            </li>
          </ol>
        </nav>
        {children}
      </body>
    </html>
  );
}
