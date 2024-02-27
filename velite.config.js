import { defineConfig, s } from 'velite'

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
    collections: {
        posts: {
            name: 'Post', // collection type name
            pattern: '*.mdx', // content files glob pattern
            schema: s
                .object({
                    title: s.string().max(99), // Zod primitive type
                    content: s.markdown() // transform markdown to html
                })
                // more additional fields (computed fields)
                .transform(data => data)
        }
    }
})