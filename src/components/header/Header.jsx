import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate} from "react-router-dom"
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ types }) => {
  var [type, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { type, dates, options } });
    navigate("/hotels", { state: { type, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          types === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        
        {type !== "list" && (
          <>
         <h4 className="headerTitle"> DREAMWAY GROUPS</h4>
            <h5 className="headerTitle">
            We are manufacturer of all type of blocks for govt projects as well private supplies at factory price.


            </h5>
            <p className="headerDesc">
            We are also Pioneer in solid waste management and recycling of plastic waste currently working in govt projects

Smart non brokers real estate services

And much more projects.
            </p>
            {!user && <button className="headerBtn"><NavLink
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >Sign in / Register
              </NavLink></button>}
         
            </>
        )}
      </div>
    </div>
  );
};

export default Header;
