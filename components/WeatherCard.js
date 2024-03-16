import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="flex w-full p-20 justify-center">
      <div className="w-full max-w-sm">
        <div className="mb-4">
          <div className="bg-black shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-4 opacity-80 text-white">
            <div className="text-center text-2xl p-2">{data.city}</div>
            <div className="text-center text-6xl degrees">{data.temp}</div>
            <div className=" text-center text-gray-400">{data.condition}</div>
            <div className="flow-root p-2">
              <div className="float-left m-3 text-gray-400">
                Humidity: {data.humidity}%
              </div>
              <div className="float-right m-3 text-gray-400">
                Wind: {data.wind}mph
              </div>
              <div className="text-center m-3 text-gray-400">
                Visibility: {data.visibility}mi
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
