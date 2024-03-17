import "./AdditionalInfo.scss";

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
  currentWeatherData: CurrentWeather | null
}

export default function AdditionalInfo({ currentWeatherData }: Props) {

  return (
    <div className="additionalInfo">
      <div className="additionalInfo-container">
        <h2 className="heading">Additional Info</h2>
        <div className="info">
          <div className="info-section">
            <p className="info-heading">Precipitation</p>
            <p className="info-detail">{currentWeatherData?.main.pressure}</p>
          </div>
          <div className="info-section">
            <p className="info-heading">Humidity</p>
            <p className="info-detail">{currentWeatherData?.main.humidity}</p>
          </div>
          <div className="info-section">
            <p className="info-heading">Windy</p>
            <p className="info-detail">{currentWeatherData?.wind.speed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
