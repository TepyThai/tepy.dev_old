function Footer() {
  return (
    <div className="h-48 flex justify-between items-end pb-8 flex-shrink-0">
      <ul className="flex">
        <li className="mr-6 font-medium">
          <a href="https://github.com/tepythai" target="_blank" rel="noopener">
            GitHub
          </a>
        </li>
        <li className="font-medium">
          <a href="https://twitter.com/TepyThai" target="_blank" rel="noopener">
            Twitter
          </a>
        </li>
      </ul>
      <div>
        <span>@2020,</span>
        <span>Tepy Thai</span>
      </div>
    </div>
  );
}

export default Footer;
