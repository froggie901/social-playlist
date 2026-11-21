import { getCollection } from 'astro:content';
export async function allPosts() {
  const p = await getCollection('posts', (e) => !e.data.draft);
  return p.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
export const slugOf = (id: string) => id.split('/').pop()!;
export const urlOf = (e: { id: string; data: { section: string } }) => `${e.data.section}/${slugOf(e.id)}`;
