import PostCard from '../../components/post-card';
import { getAllPosts } from '../../lib/posts';

export const revalidate = 60;

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="stack">
      <div className="section-title">
        <h1 style={{ margin: 0 }}>All posts</h1>
        <p className="muted" style={{ margin: 0 }}>
          Long-form investment write-ups with tags, publish price, and ticker.
        </p>
      </div>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
