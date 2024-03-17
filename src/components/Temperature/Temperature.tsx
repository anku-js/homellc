import "./Temperature.scss";
import { FiChevronDown } from "react-icons/fi";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Temperature({
  isSelectActive,
  setIsSelectActive,
  selected,
  setIsSelected,
}) {
  const dropDownOptions = [
    {
      id: 1,
      label: "Today",
      value: "today"
    },
    {
      id: 2,
      label: "Last Week",
      value: "lastWeek"
    },
    {
      id: 3,
      label: "Last Month",
      value: "lastMonth"
    },
  ]

  return (
    <div className="temperature">
      <div className="temperature-container">
        <div className="temperature-top">
          <h2 className="temperature-heading">Temperature</h2>
          <div className="dropdown">
            <div
              onClick={() => {
                setIsSelectActive(!isSelectActive);
              }}
              className="dropdown-btn"
            >
              {selected}
              {isSelectActive ? <MdKeyboardArrowUp className="arrow"/> : <FiChevronDown className="arrow"/>}
            </div>
            <div
              className="dropdown-content"
              style={{ display: isSelectActive ? "block" : "none" }}
            >
              {dropDownOptions.map( ({id, label}) => {
                return (
                  <div
                    key={id}
                    onClick={() => {
                      setIsSelected(label);
                      setIsSelectActive(!isSelectActive);
                    }}
                    className="item"
                  >
                    {label}
                </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
