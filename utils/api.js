// Function to fetch weather data from the WeatherAPI
const getWeather = async (location) => {
  // Check if location is provided
  if (!location) {
    // Throw an error if location is not provided
    throw new Error("Please enter a location");
  }

  // API key for accessing the WeatherAPI
  const api_key = "d8d33bba846943f295e125104231307";
  // Construct the URL for fetching weather data based on the provided location
  const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;

  try {
    // Fetch weather data from the WeatherAPI
    const response = await fetch(url);
    // Parse the JSON response
    const data = await response.json();
    // Check if the response contains an error
    if (data.error) {
      // Throw an error if the response contains an error message
      throw new Error(data.error.message);
    }

    // Extract relevant weather data from the API response
    const api_data = {
      city: data.location.name,
      country: data.location.country,
      temp: data.current.temp_c,
      humidity: data.current.humidity,
      wind: data.current.wind_mph,
      visibility: data.current.vis_miles,
      condition: data.current.condition.text,
    };

    // Return the extracted weather data
    return api_data;
  } catch (error) {
    // Throw an error if fetching weather data fails
    throw new Error("Failed to fetch weather data. Please try again later.");
  }
};

// Export the getWeather function
export { getWeather };
