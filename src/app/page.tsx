// src/app/page.tsx
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { format } from 'date-fns'

export default function Home() {
  const allPosts = getSortedPostsData()

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-center mb-8"></h1>
      {allPosts.map(({ id, date, title }) => (
        <article key={id} className="mb-8">
          <Link href={`/posts/${id}`} className="no-underline">
            <h2 className="mb-1 text-xl">{title}</h2>
          </Link>
          <time dateTime={date} className="text-sm text-gray-500">
            {format(new Date(date), 'yyyy년 M월 d일')}
          </time>
        </article>
      ))}
    </div>
  )
}