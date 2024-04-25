import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aurol Studios, LLC.
      </h1>
      <p className="mb-4">
        {`We help startups that we think are cool to grow simple, fast and at low cost. We’ve worked with many YC, VC-backed startups. 
        We only work with B2C companies. We’re not taking many deals at the moment, but you can send us an email
        about what you're working on, and if we think it's something cool, we will reply back :) `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
