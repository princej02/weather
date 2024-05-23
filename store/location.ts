import { create } from 'zustand'

interface LocationStore {
  city: string
  state: string
  latitude: number | null
  longitude: number | null
  setLocation: (city: string, state: string, latitude: number, longitude: number) => void;
}

export const useLocationStore = create<LocationStore>((set) => ({
  city: '',
  state: '',
  latitude: null,
  longitude: null,
  setLocation: (city, state, latitude, longitude) => set({ city, state, latitude, longitude })
}))