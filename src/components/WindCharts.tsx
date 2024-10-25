import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { chartOptions } from '../utils/chartConfig';
import type { ChartData } from 'chart.js';

interface WindChartsProps {
  data: any;
}

const WindCharts: React.FC<WindChartsProps> = ({ data }) => {
  const chartRef = useRef(null);
  const forecast = data.forecast.forecastday;
  const hourlyWind = forecast[0].hour.map((hour: any) => ({
    time: new Date(hour.time).getHours() + ':00',
    speed: hour.wind_kph,
    gust: hour.gust_kph,
  }));

  const windData: ChartData<'line'> = {
    labels: hourlyWind.map(h => h.time),
    datasets: [
      {
        label: 'Wind Speed (km/h)',
        data: hourlyWind.map(h => h.speed),
        borderColor: 'rgb(255, 159, 64)',
        tension: 0.1,
      },
      {
        label: 'Wind Gust (km/h)',
        data: hourlyWind.map(h => h.gust),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4 text-white">24-Hour Wind Forecast</h3>
      <div className="h-[300px]">
        <Line ref={chartRef} data={windData} options={chartOptions} />
      </div>
    </div>
  );
};

export default WindCharts;