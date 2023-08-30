import { FC } from 'react';
import '../../../globals.css';
import MainContainer from '@/components/(global)/MainContainer';
import Header from '@/components/(home)/Header';
import { SearchProvider } from '@/contexts/SearchContext';
import RootLayout from '../../layout';
import Input from '@/components/(global)/Input';
import { LoginButton } from '@/components/(global)/Buttons.component';
import Link from 'next/link';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <MainContainer>
      <div
        className="form-container flex flex-col gap-2 mx-auto w-full max-w-xs"
        style={{ fontFamily: 'monospace' }}
      >
        <h1 className="text-center text-2xl mb-2 mt-4 font-bold">Login</h1>

        <form
          action=""
          className="w-full shadow-sm bg-gray-50 rounded-2xl px-4 py-6 flex flex-col gap-4"
        >
          {/* Username or email input group */}

          <Input label="Username or Email" name="username" type="text" />

          {/* Password input input group */}

          <Input label="Password" name="password" type="password" />

          {/* Forgot password */}

          <Link href={'/auth/signup'} className="ml-auto flex w-max">
            <small className="underline text-xs text-center">
              Forgot password?
            </small>
          </Link>

          <LoginButton />

          <Link href={'/auth/signup'}>
            <small className="underline text-xs text-center block mt-2">
              Sign up
            </small>
          </Link>
        </form>
      </div>
    </MainContainer>
  );
};

export default LoginPage;
