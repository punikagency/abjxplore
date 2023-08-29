import categories from '@/data/categories.json';
import Link from 'next/link';
import MainContainer from '@/components/(global)/MainContainer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <MainContainer>
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 justify-between">
            {categories.map((category, index) => (
              <Link
                href={`${category.link}`}
                target={category.link.includes('https') ? '_blank' : '_self'}
                key={index}
                className={`h-max grid w-full relative bg-slate-50 text-xl overflow-hidden rounded-xl ${
                  category.link.length > 3
                    ? 'border-none bg-slate-50 shadow-md '
                    : ''
                }`}
              >
                <div className="relative h-64 overflow-hidden rounded-xl">
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
                <p className="text-xl absolute h-full z-20 text-white p-4 flex items-end w-full bg-black bg-opacity-60 top-0 left-0">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </MainContainer>
    </>
  );
}
