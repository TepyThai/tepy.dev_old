import remark from 'remark';
import html from 'remark-html';

export default async function md2html(md) {
  return await (await remark().use(html).process(md)).toString();
}
