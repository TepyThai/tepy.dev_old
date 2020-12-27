import Layout from '../components/Layout';
import TitleLabel from '../components/TitleLabel';
import TILItem from '../components/TILItem';
import { getAllTILs } from '../lib/api';

function TIL({ allTILs }) {
  return (
    <Layout>
      <TitleLabel className="mt-16">Today I Learned:</TitleLabel>
      <div className="my-8">
        {allTILs.length > 0 &&
          allTILs.map((til) => <TILItem til={til} key={til.slug} />)}
      </div>
    </Layout>
  );
}

export default TIL;

export async function getStaticProps() {
  const allTILs = getAllTILs(['title', 'date', 'slug', 'isPublished']);
  return {
    props: { allTILs },
  };
}
