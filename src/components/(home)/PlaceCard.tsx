import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface PlaceCardProps {
  place: {
    name: string;
    img: string;
    category: string;
    link: string;
    userRating: number;
    numVisits: number;
  };
}

const PlaceCard: FC<PlaceCardProps> = ({ place }) => {
  return (
    <Link
      href={`${place.link}`}
      target={place.link.includes('https') ? '_blank' : '_self'}
      className={`h-max grid w-full relative bg-slate-50 text-xl overflow-hidden rounded-xl ${
        place.link.length > 3 ? 'border-none bg-slate-50 shadow-md ' : ''
      }`}
    >
      <div className="relative h-64 overflow-hidden rounded-xl">
        <Image
          src={`${
            place.img.length > 1
              ? `/images/places/${place.img}`
              : '/images/default-image.webp'
          }`}
          width={200}
          height={200}
          loading="lazy"
          alt={`${place.name} image`}
          className="object-cover absolute top-0 left-0 h-full w-full"
        />
      </div>
      <div className="absolute h-full z-20 p-4 flex flex-col justify-end w-full bg-black bg-opacity-20 top-0 left-0">
        <p className="text-white text-xl">{place.name}</p>
        <div className="flex justify-between mt-2">
          <p className="text-gray-300 text-sm">{place.userRating} Rating</p>
          <p className="text-gray-300 text-sm">{place.numVisits} Visits</p>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCard;
