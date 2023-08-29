import Link from 'next/link';
import { FC } from 'react';
import socials from '../../data/social_media.json';
import Image from 'next/image';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-20 absolute left-0 bottom-0 w-full pt-6 flex flex-col justify-center items-center">
      <h3 className="mb-1">Follow us on social media:</h3>
      <div className="flex gap-4 mb-3 items-center justify-center">
        {socials.map((social, index) => (
          <Link key={index} target="_blank" href={`${social.link}`}>
            <Image
              src={`/images/icons/${social.logo}`}
              alt={`"${social.name} logo"`}
              height={18}
              width={18}
            />
          </Link>
        ))}
      </div>

      <div className="bg-black w-full text-white  text-center py-3">
        <small>
          Designed and Maintained by{' '}
          <span>
            <Link href={'https://appheart.pages.dev'} target="_blank">
              Appheart
            </Link>
          </span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
