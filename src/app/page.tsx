import categories from '../data/categories.json';
import Link from 'next/link';
import MainContainer from './components/MainContainer';

export default function Home() {
  return (
    <MainContainer>
      <section className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={index}
              className="h-28 grid items-center text-center w-28 rounded-full border bg-slate-50 text-xl overflow-hidden"
            >
              <p>{category.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </MainContainer>
  );
}
