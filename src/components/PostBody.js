import mdStyle from './markdown.module.css';

export default function PostBody({ markdown }) {
  return (
    <div
      className={mdStyle['markdown']}
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
}
