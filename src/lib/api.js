import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';

export const postsDirectory = join(process.cwd(), '_posts');
// til = Today I Learned
export const tilsDirectory = join(process.cwd(), '_tils');

export function getSlugsFrom(dir) {
  return readdirSync(dir);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getTILBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(tilsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = [], limit) {
  const slugs = getSlugsFrom(postsDirectory);
  // console.log(slugs);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => {
      if (!fields.includes('isPublished')) return true;
      return post.isPublished;
    })
    .sort((post1, post2) => (post1.date > post2.data ? '1' : '-1'));
  return limit ? posts.slice(0, limit) : posts;
}

export function getAllTILs(fields = [], limit) {
  const slugs = getSlugsFrom(tilsDirectory);
  // console.log(slugs);
  const tils = slugs
    .map((slug) => getTILBySlug(slug, fields))
    .filter((til) => {
      if (!fields.includes('isPublished')) return true;
      return til.isPublished;
    })
    .sort((til1, til2) => (til1.date > til2.data ? '1' : '-1'));
  return limit ? tils.slice(0, limit) : tils;
}
