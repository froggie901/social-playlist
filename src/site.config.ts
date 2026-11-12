// Edit these values to personalize the site.
export const site = {
  name: 'Social Playlists',
  tagline: 'Things to watch, read, hear, and show up for.',
  email: 'hello@social-playlists.com',      // used for Contact + Propose an event
  substackUrl: 'https://pcavins.substack.com',                         // e.g. 'https://yourname.substack.com'
  annotations: true,                         // Hypothesis highlights + comments on posts
};

export const sections = [
  { slug: 'watch',     label: 'Watch',     blurb: 'TV, film, and whatever else is on the screen.', img: 'img/watch.jpg',    tone: 'red'  },
  { slug: 'read',      label: 'Read',      blurb: 'My own writing, plus books worth your shelf.',  img: 'img/read.jpg',     tone: 'blue' },
  { slug: 'listen',    label: 'Listen',    blurb: 'Music picks: records, mixes, and deep cuts.',   img: 'img/listen.jpg',   tone: 'mustard' },
  { slug: 'in-person', label: 'In Person', blurb: 'Events and live gatherings, IRL.',               img: 'img/inperson.jpg', tone: 'ink'  },
] as const;
