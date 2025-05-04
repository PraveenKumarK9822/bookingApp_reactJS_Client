import React from "react";
import "./SearchItem.scss";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item?.photos[0]} alt="" className="searchItemImg" />
      <div className="searchItemDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItemDetails">
        {item.rating && (
          <div className="searchItemRating">
            <span>Excellent</span>
            {/* <button>8.9</button> */}
            <button>{item.rating}</button>
          </div>
        )}
        <div className="searchItemDetailTexts">
          <span className="searchItemPrice">{`$${item.cheapestPrice}`}</span>
          <span className="searchItemTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="searchItemCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
    // <div className="searchItem">
    //   <img
    //     src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
    //     alt=""
    //     className="searchItemImg"
    //   />
    //   <div className="searchItemDesc">
    //     <h1 className="siTitle">Tower Street Apartments</h1>
    //     <span className="siDistance">500m from center</span>
    //     <span className="siTaxiOp">Free airport taxi</span>
    //     <span className="siSubtitle">
    //       Studio Apartment with Air conditioning
    //     </span>
    //     <span className="siFeatures">
    //       Entire studio • 1 bathroom • 21m² 1 full bed
    //     </span>
    //     <span className="siCancelOp">Free cancellation </span>
    //     <span className="siCancelOpSubtitle">
    //       You can cancel later, so lock in this great price today!
    //     </span>
    //   </div>
    //   <div className="searchItemDetails">
    //     <div className="searchItemRating">
    //       <span>Excellent</span>
    //       <button>8.9</button>
    //     </div>
    //     <div className="searchItemDetailTexts">
    //       <span className="searchItemPrice">$112</span>
    //       <span className="searchItemTaxOp">Includes taxes and fees</span>
    //       <button className="searchItemCheckButton">See availability</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SearchItem;
