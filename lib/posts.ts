import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export type PostFrontmatter = {
  title: string;
  date: string;
  tags: string[];
  ticker: string;
  thesis: string;
  priceAtPublish: string;
  excerpt?: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export async function getPostSlugs(): Promise<string[]> {
  const entries = await fs.readdir(postsDirectory);
  return entries.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''));
}

export async function getPostBySlug(slug: string): Promise<{ frontmatter: PostMeta; content: string } | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      frontmatter: { ...(data as PostFrontmatter), slug },
      content,
    };
  } catch (error) {
    console.error(`Failed to load post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const entry = await getPostBySlug(slug);
      return entry?.frontmatter;
    })
  );

  return posts
    .filter(Boolean)
    .map((post) => post as PostMeta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
