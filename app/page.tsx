import { CurrentWeather } from './ui/CurrentWeather';
import Search from './ui/search';


export default function Home() {
  return (
    <main className="p-2 flex flex-col">
      <h1>Weather App</h1>
      <Search placeholder="Enter a City..." />
      <CurrentWeather />
    </main>
  );
}
