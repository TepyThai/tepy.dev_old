import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import { getAllPosts } from '../../lib/api';
import TitleLabel from '../components/TitleLabel';

function Writing({ allPosts }) {
  return (
    <Layout>
      <TitleLabel className="mt-16">Recent Writing:</TitleLabel>
      <div className="my-8">
        {allPosts.length > 0 &&
          allPosts.map((post) => <PostItem post={post} key={post.slug} />)}
      </div>
    </Layout>
  );
}

export default Writing;

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'isPublished']);
  return {
    props: { allPosts },
  };
}
