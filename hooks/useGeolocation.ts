import { fetcher } from '@/libs/utils'
import { GeoLoacationData } from '@/types'
import useSWR from 'swr'

export const useGeolocation = (city: string) => {
  const { data, isLoading, error } = useSWR<GeoLoacationData[]>(city.trim() !== '' ? `/api/geolocation?city=${city}`: null, fetcher)
  return { data, isLoading, error }
}