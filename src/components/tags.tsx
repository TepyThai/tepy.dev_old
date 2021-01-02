export const H2 = ({ children, className = '', ...rest }) => (
  <h2
    {...rest}
    className={`font-body font-bold text-3xl mt-12 mb-4 leading-snug ${className}`}
  >
    {children}
  </h2>
);

export const P = ({ children, className = '', ...rest }) => (
  <p {...rest} className={`my-6 leading-8 tracking-wider ${className}`}>
    {children}
  </p>
);

export const BlockQuote = ({ children, className = '', ...rest }) => (
  <blockquote
    {...rest}
    className={`my-6 leading-8 tracking-wider border-l-4 .border-teal-600 px-3 opacity-75 .italic .rounded-sm ${className}`}
  >
    {children}
  </blockquote>
);

export const Ul = ({ children, className = '', ...rest }) => (
  <ul {...rest} className={`my-6 leading-8 tracking-wider ${className}`}>
    {children}
  </ul>
);

export const Ol = ({ children, className = '', ...rest }) => (
  <ul {...rest} className={`my-6 leading-8 tracking-wider ${className}`}>
    {children}
  </ul>
);

export const Li = ({ children, className = '', ...rest }) => (
  <ul {...rest} className={`ml-4 my-6 leading-8 tracking-wider ${className}`}>
    {children}
  </ul>
);
