import { CurrentWeather } from './ui/CurrentWeather';
import Forecast from './ui/Forecast';
import MapView from './ui/MapView';


export default function Home() {
  return (
    <div className="grid">
      <div className='flex flex-col gap-5 lg:flex-row'>
        <div className='flex-2'>
          <CurrentWeather />
        </div>
        <div className='flex-3'>
          <Forecast />
        </div>
      </div>
      <div className='mt-4 w-full'>
        <MapView />
      </div>
    </div>
  );
}
