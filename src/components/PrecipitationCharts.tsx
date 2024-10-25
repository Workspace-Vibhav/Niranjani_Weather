import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { chartOptions } from '../utils/chartConfig';
import type { ChartData } from 'chart.js';

interface PrecipitationChartsProps {
  data: any;
}

const PrecipitationCharts: React.FC<PrecipitationChartsProps> = ({ data }) => {
  const chartRef = useRef(null);
  const forecast = data.forecast.forecastday;

  const precipData: ChartData<'bar'> = {
    labels: forecast.map((day: any) => new Date(day.date).toLocaleDateString()),
    datasets: [
      {
        label: 'Precipitation (mm)',
        data: forecast.map((day: any) => day.day.totalprecip_mm),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Chance of Rain (%)',
        data: forecast.map((day: any) => day.day.daily_chance_of_rain),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4 text-white">Precipitation Forecast</h3>
      <div className="h-[300px]">
        <Bar ref={chartRef} data={precipData} options={chartOptions} />
      </div>
    </div>
  );
};

export default PrecipitationCharts;