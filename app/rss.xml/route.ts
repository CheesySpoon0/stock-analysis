import { NextResponse } from 'next/server';
import RSS from 'rss';
import { getAllPosts } from '../../lib/posts';
import { siteConfig } from '../../lib/site';

export const revalidate = 3600;

export async function GET() {
  const feed = new RSS({
    title: siteConfig.name,
    description: siteConfig.description,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/rss.xml`,
    language: 'en',
  });

  const posts = await getAllPosts();

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `${siteConfig.url}/posts/${post.slug}`,
      date: post.date,
      description: post.excerpt ?? post.thesis,
      categories: post.tags,
      author: siteConfig.author,
    });
  });

  return new NextResponse(feed.xml({ indent: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
