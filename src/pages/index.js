import Layout from '../components/Layout';
import Profile from '../components/Profile';
import PostItem from '../components/PostItem';
import { getAllPosts } from '../../lib/api';

export default function HomePage({ allPosts }) {
  return (
    <Layout>
      <div className="mx-auto">
        <Profile />
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div>
            <div className="text-gray-600 font-bold">Recent Writing:</div>
            <div className="mt-8">
              {allPosts.length > 0 &&
                allPosts.map((post) => (
                  <PostItem post={post} key={post.slug} />
                ))}
            </div>
          </div>
          <div className="min-w-xs mt-8 md:mt-0">
            <div className="md:text-center text-gray-600 font-bold">
              Portfolio:
            </div>
            <div className="px-4 py-8 flex flex-col justify-start md:items-center md:justify-center">
              <a
                href="https://tituy-client.now.sh/"
                target="_blank"
                rel="noopener"
              >
                <div
                  className="transform transition duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center justify-center py-8 px-4 min-w-xs max-w-sm border border-primary rounded-md hover:bg-gray-100 bg-white "
                  style={{ backdropFilter: 'blur(0.8)' }}
                >
                  <div className="font-bold pb-4 text-xl text-primary">
                    Tituy
                  </div>
                  <div className="text-gray-800 px-4">
                    Reading, Writing, Sharing online platform for Cambodian
                    people.
                  </div>
                  <img
                    src="/images/tituy.png"
                    className="w-48 h-48 rounded-full object-cover mt-4"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug']);
  return {
    props: { allPosts },
  };
}
