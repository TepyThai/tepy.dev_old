import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './SVG/Logo';

function Header() {
  return (
    <>
      <nav className="transform -skew-x-6 flex justify-between h-16 border-2 px-4 my-2 border-teal-600 items-center">
        <Link href="/">
          <Logo className="cursor-pointer" />
        </Link>
        <ul className="flex items-center">
          <NavLink href="/writing" className="mr-8">
            Writing
          </NavLink>
          <NavLink href="/til" className="mr-8">
            TIL
          </NavLink>
          <NavLink href="/about">About</NavLink>
        </ul>
      </nav>
    </>
  );
}

function NavLink(props) {
  const router = useRouter();
  const { href, className, children, ...rest } = props;

  return (
    <Link href={href}>
      <li
        className={`${
          router.pathname === href ? 'text-primary' : 'text-black'
        } hover:text-primary cursor-pointer font-medium ${className}`}
        {...rest}
      >
        {children}
      </li>
    </Link>
  );
}

export default Header;
