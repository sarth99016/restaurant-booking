import { IMG_URI } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    cloudinaryImageId,
  } = restData?.data;
  return (
    <div className="restaurant-card">
      <div className="res-img">
        <img src={IMG_URI + cloudinaryImageId} />
      </div>
      <div className="res-info">
        <div className="res-name">
          <h3>{name}</h3>
        </div>
        <div className="res-cuisine">
          <h5>{cuisines.join(", ")}</h5>
        </div>
        <div className="res-details">
          <ul>
            <li className="res-raitings">{avgRating} ⭐</li>
            <li className="res-del-time">{deliveryTime} min</li>
            <li className="res-price">{costForTwoString}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;