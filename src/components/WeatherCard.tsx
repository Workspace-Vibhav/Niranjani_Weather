import React from 'react';

interface WeatherCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
};

export default WeatherCard;