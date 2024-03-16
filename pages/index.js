import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import { getWeather } from "../utils/api";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (location) {
      setLoading(true);
      setError("");
      getWeather(location)
        .then((data) => {
          setWeather(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [location]);

  return (
    <Layout>
      <Navbar
        location={location}
        onLocationChange={(e) => setLocation(e.target.value)}
      />
      {error && (
        <div className="text-red-500 bg-red-100 p-4 rounded-md mb-4">
          {error}
        </div>
      )}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      {weather && <WeatherCard data={weather} />}
    </Layout>
  );
}
