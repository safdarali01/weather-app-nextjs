const getWeather = async (location) => {
  if (!location) {
    throw new Error("Please enter a location");
  }

  const api_key = "d8d33bba846943f295e125104231307";
  const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }

    const api_data = {
      city: data.location.name,
      country: data.location.country,
      temp: data.current.temp_f,
      humidity: data.current.humidity,
      wind: data.current.wind_mph,
      gust: data.current.gust_mph,
      visibility: data.current.vis_miles,
      condition: data.current.condition.text,
      img: data.current.condition.icon,
    };

    return api_data;
  } catch (error) {
    throw new Error("Failed to fetch weather data. Please try again later.");
  }
};

export { getWeather };
