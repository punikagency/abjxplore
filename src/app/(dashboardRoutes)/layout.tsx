import { NextAuthProvider } from '@/providers';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <header className="py-2 px-4 shadow-md">
            <Link href={'/profile'}>My Profile</Link>
          </header>
          <aside>
            <ul>
              <li>
                Jobs
                <ul>
                  <li>My listings</li>
                  <li>All Jobs</li>
                  <li>Post a Job</li>
                </ul>
              </li>
              <li>
                Events
                <ul>
                  <li>My listings</li>
                  <li>My Events</li>
                  <li>Post an Event</li>
                </ul>
              </li>
              <li>
                Messages
                <ul>
                  <li>Incoming</li>
                  <li>Outgoing</li>
                  <li>Drafts</li>
                </ul>
              </li>
              <li>
                Businesses
                <ul>
                  <li>My listings</li>
                  <li>All Businesses</li>
                  <li>List a business</li>
                </ul>
              </li>
              <li>Post an Ad!</li>
            </ul>
          </aside>

          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
