import "./Navbar.scss";
import { IoSearch } from "react-icons/io5";

export default function () {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img src="/images/Slider.png" />
        <IoSearch width="20px" height="20px" className="search-icon"/>
      </div>
    </div>
  );
}
