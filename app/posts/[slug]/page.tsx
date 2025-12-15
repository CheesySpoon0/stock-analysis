import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { useMDXComponents } from '../../mdx-components';
import Tag from '../../../components/tag';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';
import { formatDate } from '../../../lib/utils';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post!;
  const mdx = await compileMDX({ source: content, options: { parseFrontmatter: false }, components: useMDXComponents({}) });

  return (
    <article className="stack">
      <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="flex">
          <span className="badge">{frontmatter.ticker}</span>
          {frontmatter.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <span className="muted">{formatDate(frontmatter.date)}</span>
      </div>
      <h1 style={{ margin: '0 0 0.5rem 0' }}>{frontmatter.title}</h1>
      <p className="muted" style={{ margin: '0 0 1rem 0' }}>
        {frontmatter.thesis}
      </p>
      <div className="post-body">{mdx.content}</div>
      <Link className="button" href="/pitches">
        Back to ledger
      </Link>
    </article>
  );
}
