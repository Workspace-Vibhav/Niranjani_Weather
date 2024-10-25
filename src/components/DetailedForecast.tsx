import React from 'react';

interface DetailedForecastProps {
  data: any;
}

const DetailedForecast: React.FC<DetailedForecastProps> = ({ data }) => {
  const forecast = data.forecast.forecastday;

  return (
    <div className="bg-gray-800 p-6 rounded-xl col-span-2">
      <h3 className="text-lg font-semibold mb-4">7-Day Forecast</h3>
      <div className="space-y-4">
        {forecast.map((day: any) => (
          <div key={day.date} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <img src={day.day.condition.icon} alt="Weather icon" className="w-12 h-12" />
              <div>
                <p className="font-medium">{new Date(day.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-300">{day.day.condition.text}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-right">
              <div>
                <p className="font-medium">{day.day.avgtemp_c}°C</p>
                <p className="text-sm text-gray-300">Avg Temp</p>
              </div>
              <div>
                <p className="font-medium">{day.day.daily_chance_of_rain}%</p>
                <p className="text-sm text-gray-300">Rain Chance</p>
              </div>
              <div>
                <p className="font-medium">{day.day.maxwind_kph} km/h</p>
                <p className="text-sm text-gray-300">Max Wind</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedForecast;