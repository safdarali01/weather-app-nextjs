import React, { useState } from "react";

// WeatherCard functional component
// This component displays weather information including city, country, temperature, condition, humidity, wind, and visibility
const WeatherCard = ({ data }) => {
  // State variable to track temperature unit (Celsius or Fahrenheit)
  const [isCelsius, setIsCelsius] = useState(true);

  // Function to toggle between Celsius and Fahrenheit
  const toggleTemperatureUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  // Function to convert temperature based on the selected unit
  const convertTemperature = (temp) => {
    if (isCelsius) {
      return temp; // If Celsius, return temperature as is
    } else {
      // If Fahrenheit, convert Celsius to Fahrenheit
      return (temp * 9) / 5 + 32;
    }
  };

  // Rendering weather information
  return (
    <div className="flex w-full p-20 justify-center">
      <div className="w-full max-w-sm">
        <div className="mb-4">
          <div className="bg-black shadow-lg rounded-2xl px-2 py-6 opacity-80 text-white">
            {/* City name */}
            <div className="text-center text-3xl">{data.city}</div>
            {/* Country name */}
            <div className="text-center text-sm pb-2">{data.country}</div>
            {/* Temperature */}
            <div className="text-center text-6xl">
              {convertTemperature(data.temp)}&deg; {isCelsius ? "C" : "F"}
            </div>
            {/* Weather condition */}
            <div className="text-center sm:text-center text-gray-400">{data.condition}</div>
            {/* Additional weather details */}
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
            {/* Button to toggle temperature unit */}
            <div className="text-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                onClick={toggleTemperatureUnit}
              >
                Toggle Temperature Unit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export WeatherCard component as the default export
export default WeatherCard;
