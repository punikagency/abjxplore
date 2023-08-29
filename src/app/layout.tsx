import './globals.css';
import type { Metadata } from 'next';
import { Marck_Script } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { SearchProvider } from './contexts/SearchContext';
import Analytics from './components/Analytics';
import Marquee from './components/Marquee';

const inter = Marck_Script({
  weight: '400',
  subsets: ['cyrillic', 'latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Abuja Exploration',
  description: '💯 No. 1 Platform to explore, connect and invest in Abuja.',
  verification: {
    google: 'fiAH29qg_LSAiJEpHjHZqQKZs6cvWV07thpRN3qrF90',
  },

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
      <Analytics />
      <body className={`${inter.className} relative h-full min-h-screen`}>
        <SearchProvider>
          <Header />
          <div className="py-2 bg-yellow-50 md:text-lg ">
            <Marquee
              text="💯 No. 1 platform for exploring, connecting and investing in the Federal Capital Territory, Abuja."
              speed={2}
            />
          </div>
          <SearchBar />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
