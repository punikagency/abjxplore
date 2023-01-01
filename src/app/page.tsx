import categories from '../data/categories.json';
import Link from 'next/link';
import MainContainer from './components/MainContainer';
import Marquee from './components/Marquee';
import Image from 'next/image';

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
                className={`h-max grid w-full bg-slate-50 text-xl overflow-hidden p-2 md:p-4 rounded-xl ${
                  category.link.length > 3
                    ? 'border-none bg-slate-50 shadow-md '
                    : ''
                }`}
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={`${
                      category.img.length > 1
                        ? `/images/categories/${category.img}`
                        : '/images/foods/Afang-Soup.webp'
                    }`}
                    width={200}
                    height={200}
                    loading="lazy"
                    alt={`${category.name} image`}
                    className="object-cover absolute top-0 left-0 h-full w-full"
                  />
                </div>
                <p className="text-xl">{category.name}</p>
              </Link>
            ))}
          </div>
        </section>
      </MainContainer>
    </>
  );
}
