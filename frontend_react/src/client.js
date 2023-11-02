import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'qpftw0ul',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'ski60GwvAOvEG2P7tdP5BfP2Vu9hJTajnZkZi3TI3fuylEV3ch52MEUQg9C6k6Crit3tp78Y7Hb7Zys5cQQVY4wjRwx0cSa2HE6fNcsBKZQepWXyrOZX27sRuvBmz5VV9XFGBZaMz6SuFefyqlx2ZPy3zgnuYLt9DhzAm1KGJ3lNc3G39tXO',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
