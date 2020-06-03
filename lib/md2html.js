import remark from 'remark';
import html from 'remark-html';
// const unified = require('unified');
// const remarkParse = require('remark-parse');
// const remarkRehype = require('remark-rehype');
// const rehypePrism = require('@mapbox/rehype-prism');
const vfile = require('to-vfile');
var rehype = require('rehype');
var shiki = require('rehype-shiki');
// var doc = require('rehype-document');
// var format = require('rehype-format');
// var html = require('rehype-stringify');

export default async function md2html(md) {
  const htmlContent = await (await remark().use(html).process(md)).toString();
  return await (
    await rehype().use(shiki, { theme: 'zeit' }).process(htmlContent)
  ).toString();
}
