import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Resources',
  description: 'Marketing Resources.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Articles</h1>
      <BlogPosts />
    </section>
  )
}
