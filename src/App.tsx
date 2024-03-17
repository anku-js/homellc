"use client";
import "./App.scss";
import { useState, useEffect } from "react";
import StatusBar from "./components/Statusbar/StatusBar";
import Navbar from "./components/Navbar/Navbar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import WeatherClouds from "./components/WeatherClouds/WeatherClouds";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import Temperature from "./components/Temperature/Temperature";
import HomepageIcon from "./components/HomepageIcon/HomepageIcon";
import { FaLocationDot } from "react-icons/fa6";
import Graph from "./components/Graph/Graph";
interface WeatherForecastData {
  dt: number;
  main: Record<string, string>;
  weather: Record<string, string>[];
  clouds: Record<string, string>;
  wind: Record<string, string>;
  visibility: number;
  pop: number;
  sys: Record<string, string>;
  dt_txt: string;
}

interface UserLocation {
  lat: number;
  long: number;
  city: string;
  country: string;
}

interface CurrentWeather {
  base: string;
  clouds: Record<string, number>;
  cod: number;
  coord: Record<string, number>;
  dt: number;
  id: number;
  main: Record<string, number>;
  name: string;
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: Record<string, number>;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selected, setIsSelected] = useState("Today");
  const [userLocation, setUserLocation] = useState<UserLocation>({
    lat: 0,
    long: 0,
    city: "",
    country: "",
  });

  const [currentWeatherData, setCurrentWeatherData] =
    useState<CurrentWeather | null>(null);
  const [weatherForecastData, setCurrentWeatherForecastData] = useState<
    WeatherForecastData[]
  >([]);

  function handleClick() {
    setIsMenuOpen((prev) => !prev);
  }

  const getWeatherData = async (latitude: number, longitude: number) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    return await response.json();
  };

  const getWeatherForecastdata = async (
    latitude: number,
    longitude: number
  ) => {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    return await request.json();
  };

  const getLocation = async () => {
    const request = await fetch("https://ipapi.co/json/");
    return await request.json();
  };

  useEffect(() => {
    async function getWeatherInfo() {
      const geoLocationResponse = await getLocation();
      const { latitude, longitude, city, country_name } = geoLocationResponse;

      const todaysWeather = await getWeatherData(latitude, longitude);
      const weatherForcast = await getWeatherForecastdata(latitude, longitude);

      setUserLocation({
        ...userLocation,
        lat: latitude,
        long: longitude,
        city: city,
        country: country_name,
      });
      setCurrentWeatherData(todaysWeather);
      setCurrentWeatherForecastData(weatherForcast.list);
    }
    getWeatherInfo();
  }, []);

  return (
    <div className={`app ${isMenuOpen && "open"}`}>
      <div>
        <StatusBar isMenuOpen={isMenuOpen} />
        <Navbar isMenuOpen={isMenuOpen} handleClick={handleClick} />
        {!isMenuOpen ? (
          <>
            <WeatherCard
              userLocation={userLocation}
              currentWeatherData={currentWeatherData}
            />
            <WeatherClouds weatherForecastData={weatherForecastData} />
            <AdditionalInfo currentWeatherData={currentWeatherData} />
            <Temperature
              isSelectActive={isSelectActive}
              setIsSelectActive={setIsSelectActive}
              selected={selected}
              setIsSelected={setIsSelected}
            />
            <Graph selected={selected} />
          </>
        ) : (
          <div className="menu">
            <p className="currentLocation">
              <FaLocationDot className="location-icon" />
              Current location
            </p>
            <h2 className="city">{userLocation.city},</h2>
            <h2 className="city">{userLocation.country}</h2>
          </div>
        )}
        <HomepageIcon isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
}

export default App;
