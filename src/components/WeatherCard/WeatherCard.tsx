import "./WeatherCard.scss";

interface UserLocation {
  lat: number;
  long: number;
  city: string;
  country: string;
}

interface CurrentWeather {
  base: string,
  clouds: Record<string, number>
  cod: number,
  coord: Record<string, number>,
  dt: number,
  id: number,
  main: Record<string, number>,
  name: string,
  timezone: number,
  visibility: number,
  weather: {
    description: string,
    icon: string,
    id: number,
    main: string
  }[],
  wind: Record<string, number>
}

interface Props {
  userLocation: UserLocation;
  currentWeatherData: CurrentWeather | null
}

export default function WeatherCard({ userLocation, currentWeatherData }: Props) {
  const { city, country } = userLocation;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const now = new Date();
  const month = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, "0");
  const year = now.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return (
    <div className="weathercard">
      <div className="weathercard-container">
        <div className="weathercard-left">
          <p className="city">{city}, </p>
          <p className="city">{country}</p>
          <p className="date">{formattedDate}</p>
          <div className="weather-info">
            <img src="/images/CloudsBlue.png" alt="Clouds"/>
            <p>{currentWeatherData?.weather[0].main}</p>
          </div>
        </div>
        <div className="weathercard-right">
          <img src="/images/Bitmap.png" alt="city"/>
          <div className="live-card">
            <p>LIVE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
