import Image from 'next/image';
import categories from '../data/categories.json';
import socials from '../data/social_media.json';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-3">
        <img
          src="/images/logo.jpeg"
          alt="AbjXplore Logo"
          height={72}
          width={72}
        />
      </div>

      <h2 className="text-3xl pb-6">AbjXplore</h2>

      <section className="mb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="h-28 grid items-center text-center w-28 rounded-full border bg-slate-50 overflow-hidden"
            >
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12">
        <h3 className="mb-4">Follow us on social media:</h3>
        <div className="flex gap-4 items-center justify-center">
          {socials.map((social, index) => (
            <Link key={index} target="_blank" href={`${social.link}`}>
              <img
                src={`/images/icons/${social.logo}`}
                alt={`"${social.name} logo"`}
                height={18}
                width={18}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
