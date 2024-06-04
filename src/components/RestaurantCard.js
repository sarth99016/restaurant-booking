import { IMG_URI } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    name,
    cuisines,
    avgRating,
    sla,
    costForTwoString,
    cloudinaryImageId,
  } = restData?.info;
  return (
    <div className="restaurant-card">
      <div className="res-img">
        <img src={IMG_URI + cloudinaryImageId} />
      </div>
      <div className="res-info">
        <div className="res-name">
          <h3>{name}</h3>
        </div>
        <div className="add-details-restaurant">
        <div className="res-cuisine">
          <h6>{cuisines.join(", ")}</h6>
        </div>
        <div className="res-details">
          <ul>
            <li className="res-raitings">{avgRating} ⭐</li>
            <li className="res-del-time">{sla.slaString}</li>
            <li className="res-price">{costForTwoString}</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;