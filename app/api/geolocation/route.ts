import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const city = searchParams.get('city')

  const API_KEY = process.env.OPEN_WEATHER_API_KEY

  if (!city) 
    return NextResponse.json('City is required', { status: 400 })

  try {
    const geoResponse = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct`, 
      { 
        params: {
          q: city,
          limit: 5,
          appid: API_KEY
        }
      }
    );

    return NextResponse.json(geoResponse.data)

  } catch (error) {
    throw new Error('Failed to fetch geolocation data')
  }
}