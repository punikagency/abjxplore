import Link from 'next/link';
import { FC } from 'react';
import socials from '../../data/social_media.json';
import Image from 'next/image';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="mt-12 absolute left-0 bottom-0 w-full py-6 flex flex-col justify-center items-center">
      <h3 className="mb-4">Follow us on social media:</h3>
      <div className="flex gap-4 items-center justify-center">
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
    </footer>
  );
};

export default Footer;
