import { SkipNavContent } from '@reach/skip-nav';
import Layout from '../components/Layout';
import SocialMeta from '../components/meta';
import TitleLabel from '../components/TitleLabel';
import PageHead from '../components/page-head';

export default function HomePage() {
  return (
    <Layout>
      <PageHead />
      <SocialMeta
        image="/images/og-image.png"
        title="Tepy Thai's Personal Site"
        url="https://tepy.dev"
        description={`Personal website for Tepy Thai. He writes about Frontend and General Programming.`}
        keywords="Tepy Thai, tepy, tepythai,tepythai react, tepythai blog, reactjs, react.js, next.js, gatsby.js,frontend"
      />
      <SkipNavContent />
      <div className="mx-auto">
        {/* <Profile /> */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="min-w-xs mt-8 md:mt-0">
            <TitleLabel className="md:text-center uppercase">
              Portfolio
            </TitleLabel>
            <div className="px-4 py-8 flex flex-col justify-start md:items-center md:justify-center">
              <a href="https://teatui.com" target="_blank" rel="noopener">
                <div
                  className="transform transition duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center justify-center py-8 px-4 min-w-xs max-w-sm border border-primary rounded-md hover:bg-gray-100 bg-white "
                  style={{ backdropFilter: 'blur(0.8)' }}
                >
                  <div className="font-bold pb-4 text-xl text-primary">
                    Teatui
                  </div>
                  <div className="text-gray-800 px-4">
                    Reading, Writing, Sharing online platform for Cambodian
                    people.
                  </div>
                  <img
                    src="/images/tituy.jpg"
                    className="w-48 h-48 rounded-full object-cover mt-4"
                    alt="Screenshot for Teatui"
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
