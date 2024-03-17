import "./Navbar.scss";
import { IoSearch } from "react-icons/io5";

interface Props {
  isMenuOpen: boolean;
  handleClick: any;
}

export default function Navbar({ isMenuOpen, handleClick }: Props) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div
          id="nav-icon4"
          className={isMenuOpen ? "open" : ""}
          onClick={handleClick}
        >
          <span className="bar1"></span>
          <span className="bar2"></span>
        </div>
        {isMenuOpen ? (
          <div className="live">
            <p>LIVE</p>
          </div>
        ) : (
          <IoSearch width="20px" height="20px" className="search-icon" />
        )}
      </div>
    </div>
  );
}
