/* Sample Data
"info": {
"id": "77777585",
"name": "Orange & Walnut Tea Cake",
"category": "Tea Cakes",
"description": "Serves 1 | A soft, moist, and decadent cake with a generous helping of orange and walnut. A perfect dessert for those with a sweet tooth.\nsize : 800 gms",
"imageId": "869440c5b05e6a272a60f1f5da08fb3b",
"inStock": 1,
"price": 136190,
"variants": {},
"variantsV2": {},
"itemAttribute": {
"vegClassifier": "EGG",
"portionSize": "Serves 1"
},
"ribbon": {},
"showImage": true,
"itemBadge": {},
"badgesV2": {},
"ratings": {
"aggregatedRating": {
"rating": "4.7",
"ratingCount": "29 ratings",
"ratingCountV2": "29"
}
}
},
"analytics": {},
"hideRestaurantDetails": true
}
*/

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
      <div className="resDesc">
        <p>{description}</p>
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
