'use client';

import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  searchQuery: string;
  isActive: boolean;
  updateSearchQuery: (query: string) => void;
  setActive: (active: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function useSearchContext(): SearchContextType {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  const setActive = (active: boolean) => {
    setIsActive(active);
  };

  const contextValue: SearchContextType = {
    searchQuery,
    isActive,
    updateSearchQuery,
    setActive,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
