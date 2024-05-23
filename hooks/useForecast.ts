import { fetcher } from '@/libs/utils'
import { ForecastData } from '@/types'
import useSWR from 'swr'

export const useForecast = (lat: number | null, lon: number | null) => {
  const shouldFetch = lat !== null && lon !== null;
  const { data, isLoading, error } = useSWR<ForecastData>(
    shouldFetch ? `/api/forecast?lat=${lat}&lon=${lon}`: null, fetcher)
  return { data, isLoading, error }
}