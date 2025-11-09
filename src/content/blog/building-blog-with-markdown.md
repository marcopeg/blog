---
title: "Building a Blog with Markdown"
author: "Marco Pegoraro"
date: 2024-02-10
excerpt: "Learn how to create a markdown-based blog system. Explore content collections, frontmatter, and dynamic routing for a complete blogging solution."
tags: ["blogging", "markdown", "astro"]
---

# Building a Blog with Markdown

Markdown is the perfect format for blog content. It's simple to write, easy to read, and can be transformed into beautiful HTML.

## Why Markdown for Blogging?

Markdown offers several advantages:

- **Simple Syntax**: Focus on writing, not formatting
- **Version Control Friendly**: Plain text files work great with Git
- **Portable**: Easy to migrate between platforms
- **Extensible**: Support for frontmatter and custom components

## Content Collections

Modern static site generators like Astro use content collections to manage markdown files:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});
```

## Frontmatter

Frontmatter is metadata at the top of your markdown files:

```markdown
---
title: "My Post"
date: 2024-02-10
tags: ["blogging", "markdown"]
---

Your content here...
```

## Dynamic Routing

Generate pages dynamically from your markdown files:

```typescript
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
```

## Conclusion

Markdown-based blogging combines simplicity with power. Start writing today!
