import { User } from '@/components/(global)/User.component';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  const session = await getServerSession(authOptions);
  return (
    <>
      <h2>Dashboard</h2>

      <pre>{JSON.stringify(session)}</pre>

      <User />
    </>
  );
};

export default page;
