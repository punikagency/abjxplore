import { FC } from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <main className="min-h-screen px-6 md:px-24 py-12 pb-24">{children}</main>
  );
};

export default MainContainer;
