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
      <div className="mt-10 flex justify-center items-center">
        {loading && <Logo className="h-64 w-64" />}
        {!loading && (
          <div>
            <div>
              My name is <span>Tepy</span>.
            </div>
            <div>
              I'm from Cambodia. I speak Khmer 🇰🇭, English 🏴󠁧󠁢󠁥󠁮󠁧󠁿, Japanese 🇯🇵.
            </div>
            <div>I call myself a Web Developer who focus on Frontend. </div>
            <div>
              I work mostly with <span>React</span> and <span>Node</span>{' '}
              sometimes as my Backend.
            </div>
            <div>
              I'm currently finding my first job as a Frontend Developer after
              my graduation in 2021.
            </div>
            <div>
              If you are looking for a developer who is passionate about
              Frontend and eager to learn <span>New Technologies</span>, I'm
              more than happy if you would consider me.
            </div>
            <div>You can contact me via the following options:</div>

            <Link href="/posts/my-journey">
              <div className="bg-primary text-white px-4 py-2 rounded-md font-bold hover:text-primary hover:bg-gray-200 max-w-xs text-center shadow cursor-pointer transform hover:translate-x-1 transition duration-300 ease-in-out">
                Read About My Journey Here
              </div>
            </Link>
            <div className="flex flex-col"></div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default About;
