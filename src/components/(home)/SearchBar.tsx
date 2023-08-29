'use client';

import { FC } from 'react';
import { useSearchContext } from '../../contexts/SearchContext';

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const { searchQuery, updateSearchQuery, isActive, setActive } =
    useSearchContext();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchQuery(event.target.value);
  };

  const handleFocus = () => {
    setActive(true);
  };

  const handleBlur = () => {
    setActive(false);
  };

  return (
    <div
      className={`search-bar z-30 ${
        isActive ? 'active' : 'inactive'
      }  -mt-1 bg-white px-6 py-3 md:px-24 w-full shadow-md sticky top-32 md:top-36`}
    >
      <input
        type="search"
        name=""
        id=""
        value={searchQuery}
        onChange={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
        className={`w-full py-2 text-lg px-6 border rounded-xl`}
      />
    </div>
  );
};

export default SearchBar;
