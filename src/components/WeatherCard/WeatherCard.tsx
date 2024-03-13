import "./WeatherCard.scss";

export default function () {
  return (
    <div className="weathercard">
      <div className="weathercard-container">
        <div className="weathercard-left">
          <h2 className="city">New York, United States</h2>
          <p className="date">Oct 04, 2019</p>
          <div className="weather-info">
            <img src="/images/Clouds.png" />
            <p>Cloudy</p>
          </div>
        </div>
        <div className="weathercard-right">
          <img src="/images/Bitmap.png" />
        </div>
      </div>
    </div>
  );
}
