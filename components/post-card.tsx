import Link from 'next/link';
import { formatDate } from '../lib/utils';
import type { PostMeta } from '../lib/posts';
import Tag from './tag';

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="card">
      <div className="flex" style={{ justifyContent: 'space-between' }}>
        <span className="badge">{post.ticker}</span>
        <span className="muted">{formatDate(post.date)}</span>
      </div>
      <h3 style={{ margin: '0' }}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h3>
      <p style={{ margin: 0 }}>{post.excerpt ?? post.thesis}</p>
      <div className="flex">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <Link className="button" href={`/posts/${post.slug}`}>
        Read pitch
      </Link>
    </article>
  );
}
