import { fetcher } from '@/libs/utils'
import useSWR from 'swr'

export const useGeolocation = (city: string) => {
  const { data, isLoading, error } = useSWR(`/api/geolocation?city=${city}`, fetcher)
  return { data, isLoading, error }
}