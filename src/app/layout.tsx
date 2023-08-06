import './globals.css';
import type { Metadata } from 'next';
import { Marck_Script } from 'next/font/google';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { SearchProvider } from './contexts/SearchContext';

const inter = Marck_Script({
  weight: '400',
  subsets: ['cyrillic', 'latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Abuja Exploration',
  description:
    '💯 No. 1 Platform to explore, connect and invest in FCT, Abuja.',

  // Faviocons
  icons: {
    icon: '/favicons/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative h-full min-h-screen`}>
        <SearchProvider>
          <Header />
          <SearchBar />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
