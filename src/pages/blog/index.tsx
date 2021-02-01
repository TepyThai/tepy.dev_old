import Link from 'next/link';

import {
  postIsPublished,
} from '../../lib/blog-helpers';
import getNotionUsers from '../../lib/notion/getNotionUsers';
import getBlogIndex from '../../lib/notion/getBlogIndex';
import Layout from '../../components/Layout';
import BlogPost from '../../components/blog-post';

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex();

  const authorsToGet: Set<string> = new Set();
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug];
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null;
      }
      post.Authors = post.Authors || [];
      for (const author of post.Authors) {
        authorsToGet.add(author);
      }
      return post;
    })
    .filter(Boolean);

  const { users } = await getNotionUsers([...authorsToGet]);

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name);
  });

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  };
}

export default function Blog({ posts = [], preview }){
  return (
    <Layout>
      {preview && (
        <div>
          <div>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div>
        <h1 className="text-3xl mt-16 mb-8 font-space font-bold underline">
          All About What I Know In Here
        </h1>
        {posts.length === 0 && <p>There are no posts yet</p>}
        {posts.map((post) => {
          return <BlogPost post={post} />;
        })}
      </div>
    </Layout>
  );
};
