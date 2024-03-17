import "./StatusBar.scss";

export default function StatusBar({ isMenuOpen }: { isMenuOpen: boolean }) {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const currentTime = `${hours}:${minutes}`;
  return (
    <div className="statusbar">
      <div className="statusbar-container">
        <div className="statusbar-left">
          <p>{currentTime}</p>
        </div>
        <div className="statusbar-right">
          <img src={isMenuOpen ? "/images/Network-white.png" : "/images/Network.png"} />
          <img src={isMenuOpen ? "/images/Wifi-white.png" : "/images/Wifi.png"} />
          <img src={isMenuOpen ? "/images/Battery-white.png" : "/images/Battery.png"} />
        </div>
      </div>
    </div>
  );
}
