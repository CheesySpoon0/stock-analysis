import Link from 'next/link';
import Newsletter from '../components/newsletter';
import PostCard from '../components/post-card';
import { pitchLedger } from '../lib/pitches';
import { getAllPosts } from '../lib/posts';

export const revalidate = 60;

export default async function HomePage() {
  const posts = await getAllPosts();
  const featured = posts.slice(0, 3);
  const ledgerPreview = pitchLedger.slice(0, 3);

  return (
    <div className="stack">
      <section className="hero">
        <div>
          <div className="badge">Stock Pitch Blog</div>
          <h1>Concise, conviction-driven research.</h1>
          <p>
            Deep dives on durable businesses, catalysts we care about, and a transparent ledger that holds us accountable to
            the market.
          </p>
          <div className="flex" style={{ gap: '0.75rem' }}>
            <Link className="button" href="/posts">
              Read the pitches
            </Link>
            <Link className="button" href="/pitches">
              View ledger
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <p className="muted" style={{ margin: '0 0 0.35rem 0' }}>
            Latest ledger snapshot
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.4rem' }}>
            {ledgerPreview.map((pitch) => (
              <li key={pitch.slug} className="flex" style={{ justifyContent: 'space-between' }}>
                <span className="badge">{pitch.ticker}</span>
                <span className="muted">{pitch.priceAtPublish}</span>
                <Link href={`/posts/${pitch.slug}`}>View</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="section-title">
        <h2>Latest posts</h2>
        <Link className="button" href="/rss.xml">
          RSS
        </Link>
      </div>
      <div className="card-grid">
        {featured.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="section-title">
        <h2>Ledger accountability</h2>
        <Link className="button" href="/pitches">
          View all pitches
        </Link>
      </div>
      <div className="card">
        <p style={{ margin: 0 }}>
          We log every pitch with the publish price and keep performance transparent. Each entry links back to the original
          write-up so you can follow the thesis and track updates.
        </p>
      </div>

      <Newsletter />
    </div>
  );
}
