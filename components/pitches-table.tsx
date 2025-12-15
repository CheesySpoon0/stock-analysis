import Link from 'next/link';
import { pitchLedger } from '../lib/pitches';
import { formatDate } from '../lib/utils';

export default function PitchesTable() {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Ticker</th>
            <th>Thesis</th>
            <th>Price at publish</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {pitchLedger.map((pitch) => (
            <tr key={pitch.slug}>
              <td>{formatDate(pitch.date)}</td>
              <td>{pitch.ticker}</td>
              <td>{pitch.thesis}</td>
              <td>{pitch.priceAtPublish}</td>
              <td>
                <Link href={`/posts/${pitch.slug}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
