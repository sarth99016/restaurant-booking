import { IMG_URI } from "../../utils/constants";

const MenuItems = (props) => {
  const { menuData } = props;
//   console.log(menuData);
  const { name, price, description, imageId, ratings, defaultPrice } = menuData?.info;
  return (
    <div className="menu-item">
        <div className="item-desc">
      <div className="resName">
        <h2>{name}</h2>
      </div>
      <div>
        <h3>₹{(price || defaultPrice) / 100}</h3>
      </div>
      <div className="rating">{ratings.aggregatedRating.rating?ratings.aggregatedRating.rating + " ⭐" : ""} {ratings.aggregatedRating.ratingCountV2? "( "+ ratings.aggregatedRating.ratingCountV2 + " ratings)": "" }  </div>
      <div className="menu-item-desc-div">
        <p className="menu-item-des">{description}</p>
      </div>
      </div>
      <div className="menu-dish-img">
        {/* <img src={IMG_URI + imageId}></img> */}
        {imageId? <img src={IMG_URI + imageId} alt={name} /> : "" }

      </div>
    </div>
  );
};

export default MenuItems;
