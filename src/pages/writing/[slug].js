import { getPostBySlug, getAllPosts } from '../../lib/api';
import md2html from '../../lib/md2html';
import Layout from '../../components/Layout';
import DateFormater from '../../components/DateFormater';
import PostBody from '../../components/PostBody';
import SocialMeta from '../../components/meta';

export default function Post({ post }) {
  return (
    <Layout>
      <SocialMeta
        title={`${post.title} | Tepy Thai's Blog`}
        image={`${post.ogImage.url}`}
        keywords={`programming journey, tepythai, dev journey, dev story`}
        description={post.excerpt || ''}
      />
      <article>
        <div className="max-w-post mx-auto">
          {!post.isPublished && (
            <div className="text-center bg-red-600 text-white p-3 rounded mt-8">
              Hey, this is still a Draft 😄
            </div>
          )}
          <div className="my-24 p-2 text-center ">
            <div className="text-black font-medium text-3xl">{post.title}</div>
            <DateFormater dateStr={post.date} />
            <div className="flex justify-center items-center mt-2">
              <div className="mr-6">{post.author.name}</div>
              <img
                className="inline-block rounded-full w-12 h-12 object-cover border-2 border-teal-800 p-1"
                src={post.author.picture}
              />
            </div>
          </div>
          <PostBody markdown={post.content} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'author',
    'ogImage',
    'isPublished',
    'excerpt',
  ]);
  const content = await md2html(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
