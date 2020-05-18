export default function TitleLabel({ children, className, ...props }) {
  return (
    <div className={`text-gray-800 font-bold ${className}`} {...props}>
      {children}
    </div>
  );
}
