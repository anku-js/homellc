import "./StatusBar.scss";

export default function () {
  return (
    <div className="statusbar">
      <div className="statusbar-container">
        <div className="statusbar-left">
          <p>9:41</p>
        </div>
        <div className="statusbar-right">
          <img src="/images/Network.png" />
          <img src="/images/Wifi.png" />
          <img src="/images/Battery.png" />
        </div>
      </div>
    </div>
  );
}
