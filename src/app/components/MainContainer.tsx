import { FC } from 'react';

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <main className="min-h-screen px-4 md:px-20 pt-10 pb-24">{children}</main>
  );
};

export default MainContainer;
