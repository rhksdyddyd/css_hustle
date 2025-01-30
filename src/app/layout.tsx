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
            <Link href="/">Lists</Link>
          </h1>
          <ol>
            <li>
              <Link href="/read/1">Simple Tabs</Link>
            </li>
            <li>
              <Link href="/read/2">Simple Block Style</Link>
            </li>
          </ol>
        </nav>
        {children}
      </body>
    </html>
  );
}
