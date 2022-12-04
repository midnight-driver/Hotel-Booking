import "./header.css";
import Date from './Date.jsx';
import {
  faBed,
  faTaxi,
  faCar,
  faPlane,
  faCalendarDays,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerlist">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">A Lifetime of discount? It's Genius</h1>
        <p className="headerdesp">
          Get Rewarded for your travels- unlock savings of 10% or more with a
          free Enjoystay account
        </p>
        <button className="headerBtn">Sign in/ Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headerIcon" icon={faBed} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headerIcon" icon={faCalendarDays} />
            <span className="headerSearchText">date to date</span>
         <Date/>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headerIcon" icon={faPerson} />
            <span className="headerSearchText">2 adults 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
           <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
