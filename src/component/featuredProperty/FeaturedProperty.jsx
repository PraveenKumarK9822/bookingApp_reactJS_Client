import React from "react";
import "./FeaturedProperty.scss";
import useFetchApi from "../../apifetch/useFetchApi";

const FeaturedProperty = () => {
  const { data, loading } = useFetchApi("/hotels?feature=true&limit=4");

  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1",
    "https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=",
    "https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o=",
  ];

  return (
    <div className="featuredProperty">
      {loading ? (
        "Loading Please wait..."
      ) : (
        <>
          {data.map((item) => (
            <div className="featuredPropertyItem" key={item._id}>
              <img
                src= {item.photos[0]}
                alt=""
                className="featuredPropertyImg"
              />
              <span className="featuredPropertyName">{item.name}</span>
              <span className="featuredPropertyCity">{item.city}</span>
              <span className="featuredPropertyPrice">{`Starting from $${item.cheapestPrice}`}</span>
              {item.rating && (
                <div className="featuredPropertyRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
    // <div className="featuredProperty">
    //   <div className="featuredPropertyItem">
    //     <img
    //       src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
    //       alt=""
    //       className="featuredPropertyImg"
    //     />
    //     <span className="featuredPropertyName">Aparthotel Stare Miasto</span>
    //     <span className="featuredPropertyCity">Madrid</span>
    //     <span className="featuredPropertyPrice">Starting from $120</span>
    //     <div className="featuredPropertyRating">
    //       <button>8.9</button>
    //       <span>Excellent</span>
    //     </div>
    //   </div>
    //   <div className="featuredPropertyItem">
    //     <img
    //       src="https://cf.bstatic.com/xdata/images/hotel/square600/579099936.webp?k=e04cc7f7fe864ce09b7d7d978dbb7db3e558038a2151eb7c4c11e895bafbd8c0&o="
    //       alt=""
    //       className="featuredPropertyImg"
    //     />
    //     <span className="featuredPropertyName">Comfort Suites Airport</span>
    //     <span className="featuredPropertyCity">Austin</span>
    //     <span className="featuredPropertyPrice">Starting from $140</span>
    //     <div className="featuredPropertyRating">
    //       <button>9.3</button>
    //       <span>Exceptional</span>
    //     </div>
    //   </div>
    //   <div className="featuredPropertyItem">
    //     <img
    //       src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o="
    //       alt=""
    //       className="featuredPropertyImg"
    //     />
    //     <span className="featuredPropertyName">Four Seasons Hotel</span>
    //     <span className="featuredPropertyCity">Lisbon</span>
    //     <span className="featuredPropertyPrice">Starting from $99</span>
    //     <div className="featuredPropertyRating">
    //       <button>8.8</button>
    //       <span>Excellent</span>
    //     </div>
    //   </div>
    //   <div className="featuredPropertyItem">
    //     <img
    //       src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o="
    //       alt=""
    //       className="featuredPropertyImg"
    //     />
    //     <span className="featuredPropertyName">Hilton Garden Inn</span>
    //     <span className="featuredPropertyCity">Berlin</span>
    //     <span className="featuredPropertyPrice">Starting from $105</span>
    //     <div className="featuredPropertyRating">
    //       <button>8.9</button>
    //       <span>Excellent</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FeaturedProperty;
