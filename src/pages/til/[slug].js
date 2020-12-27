import { getAllTILs, getTILBySlug } from '../../lib/api';
import md2html from '../../lib/md2html';
import Layout from '../../components/Layout';
import DateFormater from '../../components/DateFormater';
import PostBody from '../../components/PostBody';
import SocialMeta from '../../components/meta';

export default function TIL({ til }) {
  return (
    <Layout>
      <SocialMeta
        title={`${til.title} | Tepy Thai's Blog`}
        image={`${til.ogImage.url}`}
        keywords={`programming journey, tepythai, dev journey, dev story`}
        description={til.excerpt || ''}
      />
      <article>
        <div className="max-w-post mx-auto">
          {!til.isPublished && (
            <div className="text-center bg-red-600 text-white p-3 rounded mt-8">
              Hey, this is still a Draft 😄
            </div>
          )}
          <div className="my-24 p-2 text-center ">
            <div className="text-black font-medium text-3xl">{til.title}</div>
            <DateFormater dateStr={til.date} />
            <div className="flex justify-center items-center mt-2">
              <div className="mr-6">{til.author.name}</div>
              <img
                className="inline-block rounded-full w-12 h-12 object-cover border-2 border-teal-800 p-1"
                src={til.author.picture}
              />
            </div>
          </div>
          <PostBody markdown={til.content} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const til = getTILBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'author',
    'ogImage',
    'isPublished',
    'excerpt',
  ]);
  const content = await md2html(til.content || '');
  return {
    props: {
      til: {
        ...til,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const tils = getAllTILs(['slug']);

  return {
    paths: tils.map((til) => {
      return {
        params: {
          slug: til.slug,
        },
      };
    }),
    fallback: false,
  };
}
