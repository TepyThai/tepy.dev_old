import Link from 'next/link';
import { getBlogLink, getDateStr } from '../lib/blog-helpers';
import { textBlock } from '../lib/notion/renderers';
import DateFormater from './DateFormater';

function BlogPost({ post, className = '', href = '#' }) {
  // console.log(post);
  return (
    <div>
      <Link as={getBlogLink(post.Slug)} href="/blog/[slug]">
        <div
          className={`group bg-white border-teal-400 transition duration-300 ease-in-out cursor-pointer w-sm py-4 px-6 rounded-lg hover:bg-teal-100 border-transparent border my-4 max-w-xl ${className}`}
        >
          <div className="flex justify-between items-center flex-wrap font-roboto">
            <div className="flex items-center justify-between w-full mb-2">
              {post.Date && (
                <div className="text-sm border-2 border-primary px-2 py-0 rounded-full">
                  {getDateStr(post.Date)}
                </div>
              )}
            </div>
            <div className="mb-6">
              <h3 className="text-2xlfont-bold font-space">
                <a className="group-hover:text-primary transition duration-300 ease-in-out group-hover:underline font-medium">
                  {post.Page}
                </a>
              </h3>
            </div>
            <div>
              <p>
                {post.preview && post.preview.length !== 0
                  ? (post.preview || []).map((block, idx) =>
                      textBlock(block, true, `${post.Slug}${idx}`)
                    )
                  : null}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPost;
