import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aurol Studios, LLC.
      </h1>
      <p className="mb-4">
        {`Aurol Studios is a media company. We make and buy social businesses.
        We help others with their projects (send an email).  Btw we also share resources for your own projects.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
