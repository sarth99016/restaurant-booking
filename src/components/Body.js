import RestaurantCard from "./RestaurantCard";
import restaurant from "../../utils/mockData";
import React, { useState, useEffect } from "react";
import { LOADING_ICON } from "../../utils/constants";

const Body = () => {
  useEffect(() => {
    fetchData();},[])

    const fetchData = async() => {const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5571413&lng=88.3727143&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };
  const [resList, setResList] = useState([]);
  // console.log(restaurant);
  // console.log(resList);
  if(resList.length==0){
    return (
      <div className=".loading-img-div">
      <img className="loading-img" src={LOADING_ICON} />
      </div>
    )
  }
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Enter Restaurant"></input>
        <button>Submit</button>
      </div>
      <div className="sort-revert">
        <div className="sort-btn">
          <button
            onClick={() =>
              setResList(() =>
                resList.filter((rest) => rest.info.avgRating > 4.5)
              )
            }
          >
            Sort By 4.5 ⭐
          </button>
        </div>

        <div className="revert-btn">
          <button onClick={() => setResList(restaurant)}>Revert ⭐</button>
        </div>
      </div>
      <div className="res-container">
        {/* {
                (() => {
                    const restaurantCards = [];
                    for (let i = 0; i < restaurant.length; i++) {
                        restaurantCards.push(<RestaurantCard key={i} restData={restaurant[i]} />);
                    }
                    return restaurantCards;
                })()
        } */}
        {resList.map((restData, index) => (<RestaurantCard key={restData.info.id} restData={restData} />
))}
      </div>
    </div>
  );
};

export default Body;
