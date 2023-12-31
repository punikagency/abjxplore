'use client';

import Link from 'next/link';
import { FC } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useSearchContext } from '@/contexts/SearchContext';
import { LoginButton } from '@/components/(global)/Buttons.component';
import Image from 'next/image';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const { isActive, setActive } = useSearchContext();

  return (
    <header className="sticky top-0 shadow-sm z-50 bg-white flex items-center px-4 md:px-24 h-max justify-between">
      {/* Search enabler */}
      <div
        className="search-icon w-16 cursor-pointer hover:bg-gray-100 text-gray-900 py-3 rounded-xl transition-all m-0"
        onClick={() => setActive(!isActive)}
      >
        {isActive ? <FaTimes size={20} /> : <FaSearch size={20} />}
      </div>

      {/* Logo */}

      <Link
        href={'/'}
        className="flex flex-col text-center justify-center items-center"
      >
        <Image
          src="/images/logo.jpeg"
          alt="AbjXplore Logo"
          height={72}
          width={72}
        />
      </Link>

      {/* Login Button */}

      <LoginButton />
    </header>
  );
};

export default Header;
