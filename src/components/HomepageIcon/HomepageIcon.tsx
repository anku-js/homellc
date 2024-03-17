import "./HomepageIcon.scss";

export default function HomepageIcon({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <div
      className="homepage"
      style={{ position: isMenuOpen ? "static" : "relative" }}
    >
      <div className="homepage-container">
        <span
          className="homepage-icon"
          style={{
            background: isMenuOpen ? "#FFFFFF" : "#000",
            opacity: isMenuOpen ? "14%" : "1",
          }}
        ></span>
      </div>
    </div>
  );
}
