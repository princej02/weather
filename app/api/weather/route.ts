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
    const weatherResponse = await axios.get(
      `http://api.openweathermap.org/data/3.0/onecall`, 
      { params: {
        lat,
        lon,
        units: 'metric',
        appid: API_KEY
      }}
    );

    const data = weatherResponse.data;
    return NextResponse.json(data)

  } catch (error) {

  }
}