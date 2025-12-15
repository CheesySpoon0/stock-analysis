import Link from 'next/link';
import Newsletter from '../../components/newsletter';
import PitchesTable from '../../components/pitches-table';

export const revalidate = 300;

export default function PitchesPage() {
  return (
    <div className="stack">
      <div className="section-title">
        <div>
          <h1 style={{ margin: 0 }}>Pitch Ledger</h1>
          <p className="muted" style={{ margin: 0 }}>
            Published date, ticker, thesis, and price at the moment we hit publish.
          </p>
        </div>
        <Link className="button" href="/rss.xml">
          RSS
        </Link>
      </div>
      <PitchesTable />
      <Newsletter />
    </div>
  );
}
