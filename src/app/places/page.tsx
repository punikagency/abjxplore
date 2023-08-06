import { FC } from 'react';
import MainContainer from '../components/MainContainer';

import phases from '../../data/phases.json';

interface PlacePageProps {}

const PlacePage: FC<PlacePageProps> = ({}) => {
  return (
    <MainContainer>
      <h2 className="text-2xl md:text-3xl w-full py-6 bg-slate-200 text-center mb-12 rounded-xl">
        Places
      </h2>
      {phases.map((phase, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl mb-3 md:ml-3 w-max border-transparent border-b-yellow-300 border-b-4">
            {phase.name}
          </h2>

          <div className="grid grid-cols-2 justify-between gap-6 md:grid-cols-3 lg:grid-cols-4 ">
            {phase.districts.map((district, index) => (
              <div
                key={index}
                className="w-32 h-32 rounded-full grid place-items-center shadow-md bg-slate-50"
              >
                <p className="text-lg"> {district.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </MainContainer>
  );
};

export default PlacePage;
