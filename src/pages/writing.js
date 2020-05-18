import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import { getAllPosts } from '../../lib/api';

function Writing({ allPosts }) {
  return (
    <Layout>
      <div className="text-gray-600 font-bold mt-16">Recent Writing:</div>
      <div className="my-8">
        {allPosts.length > 0 &&
          allPosts.map((post) => <PostItem post={post} key={post.slug} />)}
      </div>
    </Layout>
  );
}

export default Writing;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug']);
  return {
    props: { allPosts },
  };
}
