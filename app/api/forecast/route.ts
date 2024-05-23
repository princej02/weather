import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  const API_KEY = process.env.OPEN_WEATHER_API_KEY

  if (!lat || !lon) 
    return NextResponse.json('City is required', { status: 400 })

  try {
    const forecastResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`, 
      { params: {
        lat,
        lon,
        units: 'metric',
        lang: 'en',
        appid: API_KEY
      }}
    );

    return NextResponse.json(forecastResponse.data)
    
  } catch (error) {
    return NextResponse.json('Failed to fetch weather data', { status: 400 })
  }
}