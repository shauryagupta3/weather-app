export const APIurl = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const geoAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": env.VITE_geoAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const openweatherKey = env.VITE_openWeather_Key;  
