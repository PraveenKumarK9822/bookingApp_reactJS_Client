import React from "react";
import "./PropertyList.scss";
import useFetchApi from "../../apifetch/useFetchApi";

const PropertyList = () => {

  const { data, loading } = useFetchApi("/hotels/countByType");

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  // const updatedImages = [
  //   "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
  // ]

  return (
    <div className="propertyList">
      {loading ? (
        "Loading Please wait..."
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="propertyListItem" key={i}>
                <img src={img} alt="" className="propertyListImg" />
                <div className="propertyListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
    // <div className="propertyList">
    //     <>
    //       <div className="propertyListItem">
    //         <img
    //           src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
    //           alt=""
    //           className="propertyListImg"
    //         />
    //         <div className="propertyListTitles">
    //           <h1>Hotels</h1>
    //           <h2>233 hotels</h2>
    //         </div>
    //       </div>
    //       <div className="propertyListItem">
    //         <img
    //           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
    //           alt=""
    //           className="propertyListImg"
    //         />
    //         <div className="propertyListTitles">
    //           <h1>Apartments</h1>
    //           <h2>2331 hotels</h2>
    //         </div>
    //       </div>
    //       <div className="propertyListItem">
    //         <img
    //           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
    //           alt=""
    //           className="propertyListImg"
    //         />
    //         <div className="propertyListTitles">
    //           <h1>Resorts</h1>
    //           <h2>2331 hotels</h2>
    //         </div>
    //       </div>
    //       <div className="propertyListItem">
    //         <img
    //           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
    //           alt=""
    //           className="propertyListImg"
    //         />
    //         <div className="propertyListTitles">
    //           <h1>Villas</h1>
    //           <h2>2331 hotels</h2>
    //         </div>
    //       </div>
    //       <div className="propertyListItem">
    //         <img
    //           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
    //           alt=""
    //           className="propertyListImg"
    //         />
    //         <div className="propertyListTitles">
    //           <h1>Cabins</h1>
    //           <h2>2331 hotels</h2>
    //         </div>
    //       </div>
    //     </>
    // </div>
  );
};

export default PropertyList;
