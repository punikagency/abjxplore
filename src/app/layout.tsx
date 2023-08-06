import './globals.css';
import type { Metadata } from 'next';
import { Marck_Script } from 'next/font/google';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import Header from './components/Header';
import Footer from './components/Footer';

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
