import Link from 'next/link';
import DateFormater from './DateFormater';

function PostItem({ post, className, href = '#' }) {
  const { title, date, slug } = post;
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div
        className={`group hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer w-sm py-4 px-6 rounded-lg bg-gray-200 my-4 max-w-xl ${className}`}
      >
        <div className="flex justify-between items-center flex-wrap ">
          <div className="mb-4 sm:mb-0">
            <a className="group-hover:text-primary transition duration-300 ease-in-out group-hover:underline font-medium">
              {title}
            </a>
            <DateFormater dateStr={date} />
          </div>
          {/* <div className="flex items-center">
            {['React', 'Javascript'].map((v) => (
              <div className="border border-teal border-2 px-2 py-1 rounded-full mr-2 text-sm bg-teal-200">
                {v}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
