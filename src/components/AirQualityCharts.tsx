import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { chartOptions } from '../utils/chartConfig';
import type { ChartData } from 'chart.js';

interface AirQualityChartsProps {
  data: any;
}

const AirQualityCharts: React.FC<AirQualityChartsProps> = ({ data }) => {
  const chartRef = useRef(null);
  const aqi = data.current.air_quality;

  const aqiData: ChartData<'bar'> = {
    labels: ['CO', 'NO2', 'O3', 'SO2', 'PM2.5', 'PM10'],
    datasets: [
      {
        label: 'Air Quality Components (μg/m3)',
        data: [
          aqi.co,
          aqi.no2,
          aqi.o3,
          aqi.so2,
          aqi.pm2_5,
          aqi.pm10,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
      },
    ],
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg font-semibold mb-4 text-white">Air Quality Index</h3>
      <div className="h-[300px]">
        <Bar ref={chartRef} data={aqiData} options={chartOptions} />
      </div>
    </div>
  );
};

export default AirQualityCharts;