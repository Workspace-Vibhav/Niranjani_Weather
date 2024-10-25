import React from 'react';
import { Wind, Droplets, Sun, CloudRain, Thermometer, Eye, Compass } from 'lucide-react';
import WeatherCard from './WeatherCard';

interface WeatherCardsProps {
  data: any;
}

const WeatherCards: React.FC<WeatherCardsProps> = ({ data }) => {
  const current = data.current;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <WeatherCard
        title="Temperature"
        value={`${current.temp_c}°C`}
        icon={<Thermometer className="h-8 w-8 text-yellow-500" />}
      />
      <WeatherCard
        title="Wind Speed"
        value={`${current.wind_kph} km/h`}
        icon={<Wind className="h-8 w-8 text-blue-500" />}
      />
      <WeatherCard
        title="Humidity"
        value={`${current.humidity}%`}
        icon={<Droplets className="h-8 w-8 text-green-500" />}
      />
      <WeatherCard
        title="Visibility"
        value={`${current.vis_km} km`}
        icon={<Eye className="h-8 w-8 text-purple-500" />}
      />
      <WeatherCard
        title="UV Index"
        value={current.uv.toString()}
        icon={<Sun className="h-8 w-8 text-orange-500" />}
      />
      <WeatherCard
        title="Precipitation"
        value={`${current.precip_mm} mm`}
        icon={<CloudRain className="h-8 w-8 text-cyan-500" />}
      />
      <WeatherCard
        title="Wind Direction"
        value={current.wind_dir}
        icon={<Compass className="h-8 w-8 text-indigo-500" />}
      />
      <WeatherCard
        title="Feels Like"
        value={`${current.feelslike_c}°C`}
        icon={<Thermometer className="h-8 w-8 text-red-500" />}
      />
    </div>
  );
};

export default WeatherCards;