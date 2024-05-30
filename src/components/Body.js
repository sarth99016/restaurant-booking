import RestaurantCard from "./RestaurantCard";
import restaurant from "../../utils/mockData";



const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Enter Restaurant"></input>
        <button>Submit</button>
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
        {restaurant.map((restData, index) => (
          <RestaurantCard key={restData.data.id} restData={restData} />
        ))}
      </div>
    </div>
  );
};

export default Body;