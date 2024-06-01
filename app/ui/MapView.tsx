'use client'

import { useLocationStore } from '@/store/location';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';


const MapView = () => {
  const ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!
  const { longitude, latitude } = useLocationStore()

  const [viewState, setViewState] = useState({
    longitude: longitude ?? 0,
    latitude: latitude ?? 0,
    zoom: 10,
  });

  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    if (longitude && latitude) {
      setViewState({
        longitude: longitude,
        latitude: latitude,
        zoom: 10,
      });
    }
  }, [longitude, latitude]);

  const handleLoad = () => {
    setLoading(false);
  };

  if (!longitude || !latitude) return null
  
  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
          <ThreeDots visible={true} height="40" width="40" color="#333333" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />
        </div>
      )}
      <div className='relative w-full h-96 md:h-128 lg:h-160 rounded-lg overflow-hidden shadow-lg'>
        <Map 
          mapboxAccessToken={ACCESS_TOKEN}
          {...viewState}
          onMove={evt => setViewState(evt.viewState)}
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        />
      </div>
    </>
  )
}

export default MapView