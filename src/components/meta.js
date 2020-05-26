import Head from 'next/head';

export default ({ title, description, image, url, keywords }) => (
  <Head>
    <meta name="twitter:site" content={`@TepyThai`} />
    <meta
      name="twitter:card"
      content={image ? 'summary_large_image' : 'summary'}
    />
    {title && <meta property="og:title" content={title} />}
    {url && <meta property="og:url" content={url} />}
    {/* {description && <meta property="description" content={description} />} */}
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={`https://tepy.dev${image}`} />}
    {keywords && <meta property="keywords" content={keywords} />}
  </Head>
);
