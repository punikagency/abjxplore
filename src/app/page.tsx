import categories from '../data/categories.json';
import Link from 'next/link';
import MainContainer from './components/MainContainer';
import Marquee from './components/Marquee';

export default function Home() {
  return (
    <>
      <div className="py-4 bg-yellow-50 md:text-xl ">
        <Marquee
          text="💯 No. 1 platform for exploring, connecting and investing in the Federal Capital Territory, Abuja."
          speed={2}
        />
      </div>
      <MainContainer>
        <section className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-between">
            {categories.map((category, index) => (
              <Link
                href={category.link}
                key={index}
                className="h-32 grid items-center text-center w-32 rounded-full border bg-slate-50 text-xl overflow-hidden"
              >
                <p>{category.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </MainContainer>
    </>
  );
}
