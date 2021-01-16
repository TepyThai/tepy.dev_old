const ExtLink = (props) => (
  <a {...props} className="border-b transition duration-200 ease-in-out border-primary text-primary px-1 hover:border-none hover:bg-teal-600 hover:text-white rounded-none hover:rounded-sm" rel="noopener" target={props.target || '_blank'} />
);

export default ExtLink;
