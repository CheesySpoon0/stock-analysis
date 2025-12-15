import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { siteConfig } from '../lib/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  alternates: {
    types: {
      'application/rss+xml': `${siteConfig.url}/rss.xml`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="page-shell">
          <header className="site-header">
            <div className="container header-inner">
              <Link className="brand" href="/">
                {siteConfig.name}
              </Link>
              <nav className="nav-links">
                <Link href="/posts">Posts</Link>
                <Link href="/pitches">Pitch Ledger</Link>
                <Link href="/about">About</Link>
                <Link href="/disclosures">Disclosures</Link>
              </nav>
            </div>
          </header>
          <main className="container">{children}</main>
          <footer className="site-footer">
            <div className="container footer-inner">
              <div>
                <p className="brand">{siteConfig.name}</p>
                <p className="muted">{siteConfig.tagline}</p>
              </div>
              <div className="footer-links">
                <Link href="/rss.xml">RSS</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/about">About</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
