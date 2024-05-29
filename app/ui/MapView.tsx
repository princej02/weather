'use client'

import { useLocationStore } from '@/store/location';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useState } from 'react';

const ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN!

const MapView = () => {
  const { longitude, latitude } = useLocationStore()
  const [viewState, setViewState] = useState({
    longitude: longitude || -100,
    latitude: latitude || 40,
    zoom: 3.5
  });

  
  if (!longitude || !latitude) return <div></div>

  return (
    <Map 
      mapboxAccessToken={ACCESS_TOKEN}
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  )
}

export default MapView