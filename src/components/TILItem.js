import Link from 'next/link';
import DateFormater from './DateFormater';

function TILItem({ til, className, href = '#' }) {
  const { title, date, slug } = til;
  return (
    <Link as={`/til/${slug}`} href="/til/[slug]">
      <div
        className={`group hover:bg-white hover:border-pink-400 transition duration-300 ease-in-out cursor-pointer w-sm py-4 px-6 rounded-lg bg-pink-100 border-transparent border my-4 max-w-xl ${className}`}
      >
        <div className="flex justify-between items-center flex-wrap ">
          <div className="mb-4 sm:mb-0">
            <a className="group-hover:text-pink-600 transition duration-300 ease-in-out group-hover:underline font-medium">
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

export default TILItem;
