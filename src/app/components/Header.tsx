'use client';

import Link from 'next/link';
import { FC } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useSearchContext } from '../contexts/SearchContext';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { isActive, setActive } = useSearchContext();

  return (
    <header className="sticky top-0 shadow-sm z-50 bg-white flex items-center px-6 md:px-24 h-32 md:h-36 justify-between">
      <div
        className="search-icon w-16 cursor-pointer hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl transition-all"
        onClick={() => setActive(!isActive)}
      >
        {isActive ? <FaTimes size={20} /> : <FaSearch size={20} />}
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
