import Link from 'next/link';

// 模拟的文章数据
const posts = [
  {
    id: '1',
    title: 'Next.js入门指南',
    date: '2024-07-26',
    excerpt: '本文将带你快速上手Next.js，了解其核心概念和优势。',
  },
  {
    id: '2',
    title: 'Tailwind CSS最佳实践',
    date: '2024-07-25',
    excerpt: '探索如何更高效地使用Tailwind CSS来构建美观的界面。',
  },
  {
    id: '3',
    title: 'React Hooks深入解析',
    date: '2024-07-24',
    excerpt: '深入理解useState、useEffect等常用React Hooks的原理和用法。',
  },
];

export default function PostsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">文章列表</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/posts/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}