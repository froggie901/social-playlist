import rss from '@astrojs/rss';
import { allPosts, urlOf } from '../lib/posts';
import { site } from '../site.config';
export async function GET(context) {
  const posts = (await allPosts()).filter((p) => !p.data.sample);
  return rss({
    title: site.name, description: site.tagline, site: context.site,
    items: posts.map((p) => ({ title: p.data.title, pubDate: p.data.date, description: p.data.dek ?? '', link: `/${urlOf(p)}.html` })),
  });
}
