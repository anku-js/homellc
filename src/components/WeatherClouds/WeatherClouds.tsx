import "./WeatherClouds.scss";

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

interface Props {
  weatherForecastData: WeatherForecastData[];
}

export default function WeatherClouds({ weatherForecastData }: Props) {
  const getTime = (date: string) => {
    const now = new Date(date);
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  return (
    <div className="weatherclouds">
      <div className="weatherclouds-container">
        {weatherForecastData.map(
          ({ dt, dt_txt, main: { temp }, weather }, index) => {
            const tempInCelsius = +temp - 273;
            return (
              <div
                className={`weatherclouds-data ${!index && "active"}`}
                key={dt}
              >
                <p className="time">{getTime(dt_txt)}</p>

                <img src={`/images/${weather[0].main}.png`} alt="weather information icon"/>
                <p className="temperature-info">{tempInCelsius.toFixed(2)}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
