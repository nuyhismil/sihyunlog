import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default async function Thoughts() {
  const posts = await getSortedPostsData();
  const thoughtPosts = posts.filter(post => post.category === 'thoughts');

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="prose">
        <h1 className="text-3xl font-bold">Thoughts</h1>
        <br/>
        <ul>
          {thoughtPosts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link> - <small>{post.date}</small>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}