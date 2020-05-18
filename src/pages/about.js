import Layout from '../components/Layout';
import Logo from '../components/SVG/Logo';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function About() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 1500);
    }
  }, [loading]);

  return (
    <Layout>
      <div className="pt-10 flex max-w-post mx-auto justify-center items-center">
        {loading && <Logo className="h-64 w-64" />}
        {!loading && (
          <div className="leading-10">
            <div>Hi, thanks for checking out about me.</div>
            <div>
              I'm{' '}
              <span className="font-bold text-primary text-xl underline">
                Tepy
              </span>
              . I'm from Cambodia.
            </div>
            <div>I speak Khmer 🇰🇭, English 🏴󠁧󠁢󠁥󠁮󠁧󠁿, Japanese 🇯🇵.</div>
            <div>I call myself a Web Developer who focus on Frontend. </div>
            <div>
              I work mostly with <span className="text-primary">React</span> and{' '}
              <span className="text-primary">Node</span> sometimes as my
              Backend.
            </div>
            <div>
              I'm currently finding my first job as a Frontend Developer after
              my graduation in 2021.
            </div>
            <div>
              If you are looking for a developer who is passionate about
              Frontend and eager to learn about{' '}
              <span className="text-primary">New Technologies</span>, I'm more
              than happy if you would consider me.
            </div>
            <div>You can contact me via the following options:</div>
            <div className="flex flex-col"></div>

            <Link href="/posts/my-journey-to-the-programming-world">
              <div className="border-2 border-primary hover:text-white hover:bg-primary bg-white px-4 py-2 mx-auto rounded-md mt-8 text-primary max-w-xs text-center cursor-pointer transform hover:-translate-y-1 transition duration-200 ease-in-out">
                Read About My Journey Here
              </div>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default About;
