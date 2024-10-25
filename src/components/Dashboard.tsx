import React, { useState, useEffect } from 'react';
import WeatherCards from './WeatherCards';
import TemperatureCharts from './TemperatureCharts';
import PrecipitationCharts from './PrecipitationCharts';
import WindCharts from './WindCharts';
import AirQualityCharts from './AirQualityCharts';
import DetailedForecast from './DetailedForecast';

const API_KEY = 'f43a44dad147443d99980601242510';
const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney'];

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState<any>({});
  const [selectedCity, setSelectedCity] = useState('London');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          cities.map(city =>
            fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=yes`)
              .then(res => res.json())
          )
        );
        
        const data = responses.reduce((acc, response, index) => {
          acc[cities[index]] = response;
          return acc;
        }, {});
        
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
      setLoading(false);
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !weatherData[selectedCity]) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-blue-500 text-xl">Loading weather data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Weather Analysis Dashboard</h1>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <WeatherCards data={weatherData[selectedCity]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TemperatureCharts data={weatherData[selectedCity]} />
            <PrecipitationCharts data={weatherData[selectedCity]} />
            <WindCharts data={weatherData[selectedCity]} />
            <AirQualityCharts data={weatherData[selectedCity]} />
            <DetailedForecast data={weatherData[selectedCity]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;