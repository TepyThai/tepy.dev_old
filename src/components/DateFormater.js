import { parseISO, format } from 'date-fns';

export default function DateFormater({ dateStr, className, ...rest }) {
  const date = parseISO(dateStr);
  return (
    <time
      dateTime={dateStr}
      className={`mt-1 text-sm block text-gray-600 ${className}`}
      {...rest}
    >
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
}
