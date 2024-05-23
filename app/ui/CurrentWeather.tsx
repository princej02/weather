'use client'

import { useWeather } from "@/hooks/useWeather"
import { kelvinToCelsius } from "@/libs/utils"
import { useLocationStore } from "@/store/location"

export const CurrentWeather = () => {
  const { city, state, latitude, longitude } = useLocationStore()
  const { data, isLoading, error } = useWeather(latitude, longitude)

  if (!latitude || !longitude) return <div>Please select a location to see current weather.</div>
  if (isLoading) return <div>Loading weather data...</div>
  
  return (
    <>
    {data && (
      <div>
        <h2>Weather for {data.name}, {state}</h2>
        <p>Temp: {kelvinToCelsius(data.main.temp)}</p>
      </div>
    )}
    </>
  )
}