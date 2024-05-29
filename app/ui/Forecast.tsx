'use client'

import { useForecast } from "@/hooks/useForecast"
import { formatDate, formatTime } from "@/libs/utils"
import { useLocationStore } from "@/store/location"
import { ForecastItem } from "@/types"
import { useEffect, useState } from "react"
import { ThreeDots } from "react-loader-spinner"

const Forecast = () => {
  const { city, state, latitude, longitude } = useLocationStore()
  const { data, isLoading } = useForecast(latitude, longitude)

  const [groupedData, setGroupedData] = useState<Record<string, ForecastItem[]>>({});
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const handleDayClick = (date: string) => {
    setSelectedDay(date === selectedDay ? null : date);
  };

  useEffect(() => {
    if (data) {
      const groupedByDay = data.list.reduce((acc: Record<string, ForecastItem[]>, curr) => {
        const date = new Date(curr.dt_txt).toLocaleDateString();
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(curr);
        return acc;
      }, {});
      setGroupedData(groupedByDay);
    }
  }, [data]);

  if (isLoading) return <ThreeDots visible={true} height="40" width="40" color="#333333" radius="9" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" />
  if (!city || !state) {
    return null;
  }
  
  return (
    <div className="p-4 rounded-md shadow-md border">
      <h2 className="text-2xl text-zinc-800 font-bold tracking-tight">
        5-Day Weather Forecast for {city}, {state}
      </h2>
      <div className="flex overflow-x-auto space-x-2 py-2 flex-wrap">
        {Object.entries(groupedData).map(([date, forecasts]) => (
          <div
            key={date}
            className={`p-2 cursor-pointer border-b-2 ${selectedDay === date ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => handleDayClick(date)}
          >
            <p className="font-semibold">{formatDate(date)}</p>
            <p>{forecasts[0].main.temp.toFixed(0)}<span className="text-sm">°C</span></p>
            <p className="text-sm">{forecasts[0].weather[0].description}</p>
          </div>
        ))}
      </div>
      {selectedDay && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{formatDate(selectedDay)}</h3>
          <div className="flex flex-wrap">
            {groupedData[selectedDay].map((forecast) => (
              <div key={forecast.dt} className="p-2 border m-2 rounded w-40">
                <p className="font-semibold">{formatTime(forecast.dt_txt)}</p>
                <p>Temp: {forecast.main.temp.toFixed(0)}<span className="text-sm">°C</span></p>
                <p className="text-sm">{forecast.weather[0].description}</p>
                <p className="text-sm">Wind: {forecast.wind.speed} m/s</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Forecast