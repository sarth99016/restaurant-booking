import RestaurantCard from "./RestaurantCard";
import restaurant from "../../utils/mockData";
import React, { useState } from 'react';

const Body = () => {

  const [resList, setResList] = useState(restaurant);
  console.log(restaurant);
  console.log(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Enter Restaurant"></input>
        <button>Submit</button>
      </div>

      <div className="sort-btn">
        <button onClick = {() => setResList(() => resList.filter(rest => rest.data.avgRating > 4))}>Sort By 4 ⭐</button>
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
          <RestaurantCard key={restData.data.id} restData={restData} />
        ))}
      </div>
    </div>
  );
};

export default Body;