import './globals.css';
import type { Metadata } from 'next';
import { Marck_Script } from 'next/font/google';
import Link from 'next/link';

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
      <body className={`${inter.className} `}>
        <header className="flex flex-col items-center px-24 py-12">
          <Link href={'/'} className="mb-3">
            <img
              src="/images/logo.jpeg"
              alt="AbjXplore Logo"
              height={72}
              width={72}
            />
          </Link>

          <h2 className="text-3xl pb-4">AbjXplore</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
