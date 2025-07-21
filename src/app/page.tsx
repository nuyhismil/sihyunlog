import { getPostData } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Home() {
  const aboutPost = await getPostData('about');

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="prose">
        <MDXRemote source={aboutPost.content} />
      </div>
    </main>
  );
}