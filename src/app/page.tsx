import categories from '../data/categories.json';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 md:px-24 py-6">
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
    </main>
  );
}
