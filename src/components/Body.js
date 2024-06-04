import RestaurantCard from "./RestaurantCard";
// import restaurant from "../../utils/mockData";
import React, { useState, useEffect } from "react";
import { LOADING_ICON } from "../../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  //Whenever there is change in state cariable, react triggers a reconciliateion cycle(re-renders the component)
  const [resList, setResList] = useState([]);
  const [originalResList, setOriginalResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // console.log("Body rendered!!");

  useEffect(() => {
    fetchData();
  }, []);
  // Instal CORS Plug-in for cross origin request, since we're requesting from different origin it'll fail to bypass that
  const fetchData = async () => {
    // bypassed cors policy using corsproxy.io
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5571413&lng=88.3727143&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(restaurants);
    setOriginalResList(restaurants);
  };

  // console.log(restaurant);
  // console.log(resList);

  //Conditional Rendering
  // if(resList.length==0){
  //   return (
  //     < Shimmer />
  //   )
  // }

  //Ternary Operator
  return resList.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          onClick={
            //Filter Cards On Search and update the UI
            () => {
              console.log(searchText);
              console.log(resList);
              const filteredResList = originalResList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setResList(filteredResList);
              // console.log(searchText)
            }
          }
        >
          Search
        </button>
      </div>
      <div className="sort-rvrt-btn">
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
            <button onClick={() => setResList(originalResList)}>
              Revert ⭐
            </button>
          </div>
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
        {resList.map((restData, index) => (
          <RestaurantCard key={restData.info.id} restData={restData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
