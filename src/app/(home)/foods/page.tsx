import { FC } from 'react';
import MainContainer from '@/components/(global)/MainContainer';

import foodsData from '@/data/foods.json';
import Image from 'next/image';

interface FoodPageProps {}

const FoodPage: FC<FoodPageProps> = ({}) => {
  return (
    <MainContainer>
      <h2 className="text-2xl md:text-3xl w-full py-6 bg-slate-200 text-center mb-12 rounded-xl">
        Foods
      </h2>

      <section className="mb-8">
        <div className="grid grid-cols-2 gap-2 lg:gap-6">
          {foodsData.map((food, index) => (
            <div className="p-2 lg:p-6 rounded-xl shadow-md" key={index}>
              <div className="h-56 lg:h-96 w-full relative mb-5 rounded-xl overflow-hidden">
                <Image
                  className="object-cover h-full w-full absolute top-0 left-0"
                  src={`/images/foods/${food.img}`}
                  alt={`${food.name} image`}
                  height={280}
                  width={300}
                />
              </div>
              <h2 className="text-xl">{food.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </MainContainer>
  );
};

export default FoodPage;
