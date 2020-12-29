import Head from 'next/head';

const PageHead = ({
  title = `Tepy Thai's Personal Site`,
  desc = `Personal website for Tepy Thai. He writes about Frontend and General Programming.`,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={desc} />
    </Head>
  );
};

export default PageHead;
