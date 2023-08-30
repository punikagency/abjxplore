// 'use client';

import { FC } from 'react';
import MainContainer from '@/components/(global)/MainContainer';

import phasesData from '../../../data/phases.json';

interface PlacePageProps {}

interface District {
  name: string;
  description: string;
  gMap_link: string | null;
  map_link: string | null;
}

interface Phase {
  name: string;
  districts: District[];
}

const phases: Phase[] = phasesData;

const abujaAreas: District[] = [];

phases.forEach((phase) => {
  phase.districts.forEach((district) => {
    abujaAreas.push({
      name: district.name,
      description: district.description,
      gMap_link: district.gMap_link || null,
      map_link: district.map_link || null,
    });
  });
});

const PlacePage: FC<PlacePageProps> = ({}) => {
  const allAreas = phasesData.map((phase) => {
    return { ...phase.districts };
  });

  console.log(allAreas);

  return (
    <MainContainer>
      <div className="hero-section w-full h-[60vh] flex flex-col gap-3 justify-center items-center bg-gray-950 text-gray-50 shadow-lg rounded-lg mb-12">
        <h1 className="text-4xl text-center mb-6">Explore places in Abuja</h1>

        <div
          className="w-full max-w-xs flex flex-col gap-4"
          style={{ fontFamily: 'monospace' }}
        >
          {/* lga */}
          <select
            name=""
            id=""
            className="py-2 px-4  bg-transparent border-white border rounded-lg"
          >
            {abujaAreas
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((area, index) => (
                <option value="" key={index}>
                  {area.name}
                </option>
              ))}
          </select>

          {/* Nearest landmark */}
          <select
            disabled
            name=""
            id=""
            className="py-2 px-4  bg-transparent border-white border rounded-lg"
          >
            <option value="">Nearest landmark</option>
          </select>

          {/* Button */}

          <button>Start Exploring</button>
        </div>
      </div>

      <section>
        {/* Most popular */}
        <div className="slider-areas mb-6">
          <h1 className="text-3xl">Most Popular</h1>
        </div>

        {/* Best rated */}

        <div className="slider-areas mb-6">
          <h1 className="text-3xl">Best Rated</h1>
        </div>
      </section>
    </MainContainer>
  );
};

export default PlacePage;
