export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="stack">
      <h1>About</h1>
      <p>
        PitchBook is a minimalist stock-pitch journal built with Next.js. We focus on durable businesses, catalysts that
        change the growth curve, and transparent tracking of our ideas. Posts are written in MDX so data, tables, and rich
        context can live alongside the thesis.
      </p>
      <p>
        The site is tuned for speed, mobile readability, and accountability—every pitch is logged in the ledger with the
        publish price and a link back to the original research.
      </p>
    </div>
  );
}
