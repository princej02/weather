import { fetcher } from '@/libs/utils'
import { WeatherData } from '@/types'
import useSWR from 'swr'

export const useWeather = (lat: number | null, lon: number | null) => {
  const shouldFetch = lat !== null && lon !== null;
  const { data, isLoading, error } = useSWR<WeatherData>(
    shouldFetch ? `/api/weather?lat=${lat}&lon=${lon}`: null, fetcher)
  return { data, isLoading, error }
}