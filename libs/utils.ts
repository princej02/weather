import axios from 'axios';

export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await axios.get<T>(url)
  return res.data
}

export const kelvinToCelsius = (kelvin: number): string => {
  const celsius = kelvin - 273.15
  return `${celsius.toFixed(2)}°C`
}