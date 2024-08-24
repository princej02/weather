'use client'

import { Suspense } from 'react';
import { CurrentWeather } from './ui/CurrentWeather';
import Forecast from './ui/Forecast';
import MapView from './ui/MapView';
import CurrentWeatherSkeleton from './ui/Skeletons/CurrentWeatherSkeleton';
import ForecastSkeleton from './ui/Skeletons/ForecastSkeleton';
import MapViewSkeleton from './ui/Skeletons/MapViewSkeleton';


export default function Home() {
  return (
    <div className="grid" >
      <div className='flex flex-col gap-5 lg:flex-row' >
        <div className='flex-2'>
          <Suspense fallback={<CurrentWeatherSkeleton />}>
            <CurrentWeather />
          </Suspense>
        </div>
        
        <div className='flex-3'>
          <Suspense fallback={<ForecastSkeleton />}>
            <Forecast />
          </Suspense>
        </div>
        
      </div>
      <div className='mt-4 w-full'>
        <Suspense fallback={<MapViewSkeleton />}>
          <MapView />
        </Suspense>
      </div>
    </div>
  );
}
