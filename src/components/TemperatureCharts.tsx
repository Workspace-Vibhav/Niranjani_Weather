import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { chartOptions } from '../utils/chartConfig';
import type { ChartData } from 'chart.js';

interface TemperatureChartsProps {
  data: any;
}

const TemperatureCharts: React.FC<TemperatureChartsProps> = ({ data }) => {
  const chartRef = useRef(null);
  const forecast = data.forecast.forecastday;

  const hourlyTemps = forecast[0].hour.map((hour: any) => ({
    time: new Date(hour.time).getHours() + ':00',
    temp: hour.temp_c,
    feelslike: hour.feelslike_c,
  }));

  const hourlyData: ChartData<'line'> = {
    labels: hourlyTemps.map(h => h.time),
    datasets: [
      {
        label: 'Temperature °C',
        data: hourlyTemps.map(h => h.temp),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Feels Like °C',
        data: hourlyTemps.map(h => h.feelslike),
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl col-span-2">
      <h3 className="text-lg font-semibold mb-4 text-white">24-Hour Temperature Forecast</h3>
      <div className="h-[300px]">
        <Line ref={chartRef} data={hourlyData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TemperatureCharts;