# Social Playlists

Astro + MDX site for social-playlists.com.

## Add a post
1. Make a file in the right folder:
   - `src/content/posts/watch/`, `read/`, `listen/`, or `in-person/`
   - Name it like `my-post-title.md` (plain Markdown) or `.mdx` (to use components).
2. Start it with front matter:
   ```
   ---
   title: "My post title"
   date: 2026-11-12
   section: listen        # watch | read | listen | in-person
   dek: "One-line summary"
   cover: img/listen.jpg  # optional; file in /public or a full URL
   draft: false           # true hides it
   ---
   ```
3. Run `npm run dev` to preview, then push. The newest non-sample post shows up as "Latest drop" on the homepage.

## Components (MDX only, no imports needed)
- `<Track n="1" artist="" title="" href="" via="Bandcamp">notes</Track>`
- `<Spotify url="https://open.spotify.com/album/..." />`
- `<PullQuote>text</PullQuote>`
- `<BookCard title="" author="" href="" />`
- `<WhereToWatch title="" year="" services={["Netflix"]} />`
- `<EventCard title="" when="" where="" map="" rsvp="" />`
- `<Photo src="" caption="" />`, `<Poem>lines<br/></Poem>`, `<Note>text</Note>`

MDX tip: `{`, `}`, and `<` mean code. Escape them as `\{` or use plain `.md`.

## Settings
`src/site.config.ts`: name, email, Substack URL, highlights on/off, section blurbs.

## Publishing

The site is hosted on GitHub Pages. Every push to `main` runs
`.github/workflows/deploy.yml`, which builds the site and publishes it.
`public/CNAME` tells GitHub Pages to serve the site at social-playlists.com.

To publish a new post: add the `.mdx` file, commit, and push. The site
updates in a minute or two (see the repo's Actions tab).
