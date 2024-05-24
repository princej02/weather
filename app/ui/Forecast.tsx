'use client'

import { useForecast } from "@/hooks/useForecast"
import { useLocationStore } from "@/store/location"
import { ForecastItem } from "@/types"
import { useEffect, useState } from "react"

const Forecast = () => {
  const { city, state, latitude, longitude } = useLocationStore()
  const { data, isLoading, error } = useForecast(latitude, longitude)

  const [groupedData, setGroupedData] = useState<Record<string, ForecastItem[]>>({});

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

  if (isLoading) return <div>Loading Forecast data...</div>

  return (
    <div>
      <h2>5-Day Weather Forecast for {city}, {state}</h2>
      {Object.entries(groupedData).map(([date, forecasts]) => (
        <div key={date}>
          <h3>{date}</h3>
          <div className="flex flex-wrap">
            {forecasts.map((forecast) => (
              <div key={forecast.dt} className="p-2 border m-2 rounded">
                <p>{new Date(forecast.dt_txt).toLocaleTimeString()}</p>
                <p>Temp: {forecast.main.temp}°C</p>
                <p>{forecast.weather[0].description}</p>
                <p>Wind: {forecast.wind.speed} m/s</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Forecast