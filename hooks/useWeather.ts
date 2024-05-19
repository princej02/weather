import { fetcher } from '@/libs/utils'
import { WeatherData } from '@/types'
import useSWR from 'swr'

export const useWeather = (lat: number, lon: number) => {
  const { data, isLoading, error } = useSWR<WeatherData>(`/api/weather?lat=${lat}&lon=${lon}`, fetcher)
  return { data, isLoading, error }
}