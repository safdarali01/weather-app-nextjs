import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import { getWeather } from "../utils/api";

// Default function for the Home page
export default function Home() {
  // State variables for location input, weather data, loading state, and error message
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect hook to fetch weather data when location changes
  useEffect(() => {
    // Check if location is provided
    setTimeout(() => {
      if (location) {
        // Set loading state to true and clear previous error
        setLoading(true);
        setError("");
        // Fetch weather data using getWeather utility function
        getWeather(location)
          .then((data) => {
            // Set fetched weather data, and set loading state to false
            setWeather(data);
            setLoading(false);
          })
          .catch((error) => {
            // Handle error if fetching weather data fails, set error message, and set loading state to false
            setError(error.message);
            setLoading(false);
          });
      }  
    }, 2000);
    
  }, [location]); // Dependence on location to trigger the effect

  // Render the Home page layout
  return (
    <Layout>
      {/* Navbar component with location input and event handler for location change */}
      <Navbar
        location={location}
        onLocationChange={(e) => setLocation(e.target.value)}
      />
      {/* Render error message if error state is not empty */}
      {error && (
        <div className="text-red-500 bg-red-100 p-4 rounded-md mb-4">
          {error}
        </div>
      )}
      {/* Render loading spinner if loading state is true */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      {/* Render WeatherCard component if weather data is available */}
      {weather && <WeatherCard data={weather} />}
    </Layout>
  );
}
