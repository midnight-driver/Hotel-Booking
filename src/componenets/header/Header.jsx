import "./header.css";
import {
  faBed,
  faTaxi,
  faCar,
  faPlane,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function Header({type}) {
  const [navigator, setNavigator]=useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 1,
    room: 1,
  });
  const handleOption =(name, operation) =>{
    setOptions((prev)=>{
      return{
        ...prev,
        [name] : operation ==='i' ? options[name] +1: options[name]-1,
      }
    })
  }
  const navigate= useNavigate();
  
  const handleSearch=()=>{
    navigate('/hotels', {state:{navigator, date, options}}) 
  }
  return (
    <div className="header">
      <div className={type === 'list' ? 'headerContainer listmode' : 'headerContainer'}>
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
        { type !== 'list' &&
        <>
        <h1 className="headerTitle">A Lifetime of discount? It's Genius</h1>
        <p className="headerdesp">
          Get Rewarded for your travels- unlock savings of 10% or more with a
          free StayCation account
        </p>
        <button className="headerBtn">Sign in/ Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headerIcon" icon={faBed} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={e=>setNavigator(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headerIcon" icon={faCalendarDays} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon className="headerIcon" icon={faPerson} />
            <span onClick={()=>setOpenOptions(!openOptions)}className="headerSearchText">{`${options.adult} adult• ${options.children} children • ${options.room} room`}</span>
           {openOptions && <div className="options">
              <div className="optionsItem">
                <span className="optionText">Adult</span>
                <div className="optionCounters">
                  <button
                    className="optionCounter"
                    onClick={() => handleOption("adult", "d")}
                    disabled={options.adult <= 1}
                  >
                    -
                  </button>
                  <span className="optionCounterText">{options.adult}</span>
                  <button
                    className="optionCounter"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Children</span>
                <div className="optionCounters">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounter"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterText">{options.children}</span>
                  <button
                    className="optionCounter"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionsItem">
                <span className="optionText">Room</span>
                <div className="optionCounters">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounter"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterText">{options.room}</span>
                  <button
                    className="optionCounter"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div> </>}
      </div>
    </div>
  );
}

export default Header;
