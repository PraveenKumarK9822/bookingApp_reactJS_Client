import React, { useState } from "react";
import "./List.scss";
import NavBar from "../../component/navbar/NavBar";
import Header from "../../component/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../component/searchItem/SearchItem";
import useFetchApi from "../../apifetch/useFetchApi";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location?.state?.dates);
  const [options, setOptions] = useState(location.state.options);
  const [isOpenDate, setIsOpenDate] = useState(false);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(9999);

  const { data, loading, error, reFetch } = useFetchApi(
    `/hotels?city=${destination}&min=${min}&max=${max}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <NavBar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>
            <div className="listSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listSearchItem">
              <label>Check-in Date</label>
              <span onClick={() => setIsOpenDate(!isOpenDate)}>
                {dates && dates[0]?.startDate && dates[0]?.endDate
                  ? `${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`
                  : "Select dates"}
              </span>
              {/* <span onClick={() => setIsOpenDate(!isOpenDate)}>{`${format(
                dates[0]?.startDate,
                "MM/dd/yyy"
              )} to ${format(dates[0]?.endDate, "MM/dd/yyy")}`}</span> */}
              {isOpenDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="listSearchItem">
              <label>Options</label>
              <div className="listSearchOptions">
                <div className="listSearchOptionItem">
                  <span className="listSeatchOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="listSearchOptionInput"
                    onChange={(e) => {
                      setMin(e.target.value);
                    }}
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSeatchOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="listSearchOptionInput"
                    onChange={(e) => {
                      setMax(e.target.value);
                    }}
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSeatchOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="listSearchOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSeatchOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="listSearchOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listSeatchOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="listSearchOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
            {/* <button>Search</button> */}
          </div>
          <div className="listResult">
            {loading ? (
              "Loading Please wait..."
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
