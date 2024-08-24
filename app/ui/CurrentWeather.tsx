'use client'

import { useWeather } from "@/hooks/useWeather"
import Droplet from "@/icons/Droplet"
import Wind from "@/icons/Wind"
import { useLocationStore } from "@/store/location"
import Image from "next/image"
import { ThreeDots } from "react-loader-spinner"
import CurrentWeatherSkeleton from "./Skeletons/CurrentWeatherSkeleton"

export const CurrentWeather = () => {
  const { state, latitude, longitude } = useLocationStore()
  const { data, isLoading } = useWeather(latitude, longitude)

  if (isLoading) return <CurrentWeatherSkeleton />
  
  return (
    <>
    {data && (
      <div className="p-4 rounded-md shadow-md border">
        <div className="flex">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter text-zinc-800">{data.name}, {state}</h2>
            <h4 className="text-zinc-400">Current Weather</h4>
          </div>
          <div className="ml-auto relative flex w-14 h-14">
            <Image 
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
              alt={data.weather[0].description} 
              className="w-14 h-14" 
              fill
            />
          </div>
        </div>
        <div className="flex">
          <h5 className="my-2 text-4xl font-bold tracking-tight">{data.main.temp.toFixed(0)}<span className="align-top text-xl">°C</span></h5>
          <div className="ml-auto text-sm text-gray-400 flex flex-col justify-between">
            <span className="flex gap-2"><Wind /> {data.wind.speed}m/s</span>
            <span className="flex gap-2"><Droplet /> {data.main.humidity}%</span>
          </div>
        </div>
        <p className="text-sm">{data.weather[0].description}</p>
      </div>
    )}
    </>
  )
}