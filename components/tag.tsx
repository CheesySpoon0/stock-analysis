export default function Tag({ label }: { label: string }) {
  return <span className="badge" style={{ background: 'rgba(159, 179, 200, 0.15)', color: '#e5ecff' }}>{label}</span>;
}
