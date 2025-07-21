import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default async function Writing() {
  const posts = await getSortedPostsData();
  const writingPosts = posts.filter(post => post.category === 'writing');

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="prose">
        <h1 className="text-3xl font-bold">Writing</h1>
        <ul>
          {writingPosts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link> - <small>{post.date}</small>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}