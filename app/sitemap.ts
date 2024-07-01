import { getBlogPosts } from 'app/resources/utils'

export const baseUrl = 'https://aurol.net/'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/resources'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
