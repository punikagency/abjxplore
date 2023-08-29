import './globals.css';
import type { Metadata } from 'next';
import { Marck_Script } from 'next/font/google';

const inter = Marck_Script({
  weight: '400',
  subsets: ['cyrillic', 'latin', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Abuja Exploration',
  description:
    '💯 No. 1 Platform to explore, connect and invest in FCT, Abuja.',
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
      <body className={`${inter.className} relative h-full min-h-screen`}>
        <h1>Dashboard</h1>
        {children}
      </body>
    </html>
  );
}
