// src/app/posts/[id]/page.tsx
import { getPostData, getAllPostIds } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// 어떤 id(경로)들을 미리 생성할지 Next.js에게 알려줍니다.
export async function generateStaticParams() {
  return getAllPostIds().map(item => ({ id: item.params.id }));
}

// After (fixed)
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // ✅ Await params first
    const postData = await getPostData(id);
  if (!postData) {
    return notFound();
  }
  return {
    title: postData.title,
  };
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // ✅ Await params first
    const postData = await getPostData(id);

  if (!postData) {
    return notFound();
  }

  return (
    <article className="prose dark:prose-invert max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">{postData.title}</h1>
      <div className="text-gray-500 mb-4">{postData.date}</div>
      <MDXRemote source={postData.content} />
    </article>
  );
}