import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>{`Tepy Thai's Personal Site`}</title>
        <meta
          property="description"
          content={`Personal website for Tepy Thai. He writes about Frontend and General Programming.`}
        />
      </Head>
      <div className="max-w-6xl px-6 md:px-10 mx-auto font-body ">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
