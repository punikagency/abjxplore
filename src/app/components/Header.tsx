import Link from 'next/link';
import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="sticky top-0 shadow-sm bg-white flex items-center px-6 md:px-24 py-4 justify-between">
      <div className="search-icon w-16">
        <FaSearch />
      </div>
      <Link
        href={'/'}
        className="mb-3 flex flex-col text-center justify-center items-center"
      >
        <img
          src="/images/logo.jpeg"
          alt="AbjXplore Logo"
          height={72}
          width={72}
        />
        <h2 className="text-3xl pb-4">AbjXplore</h2>
      </Link>
      <Link
        href={'/'}
        className="user-login px-6 py-2 bg-yellow-700 text-gray-100 rounded-xl"
      >
        Sign in
      </Link>
    </header>
  );
};

export default Header;
