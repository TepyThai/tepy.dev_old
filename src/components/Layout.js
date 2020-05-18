import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <>
      <div className="max-w-6xl px-10 mx-auto font-body ">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
