import { RESTAURANT_MENU_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const {resId} = useParams();
  // console.log(resId)
  const [restaurantMenuDtls, setRestaurantMenuDtls] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  // Instal CORS Plug-in for cross origin request, since we're requesting from different origin it'll fail to bypass that
  const fetchData = async () => {
    // bypassed cors policy using corsproxy.io
    const data = await fetch(RESTAURANT_MENU_URL + resId);
    const json = await data.json();
    const restaurantMenu = json.data;
    setRestaurantMenuDtls(restaurantMenu);
    // console.log(restaurantMenu);
    // console.log(restaurantMenuDtls?.cards[2]?.card?.card?.info?.name)
  };

  if (restaurantMenuDtls === null) {
    return <Shimmer></Shimmer>;
  }

  // console.log(restaurantMenuDtls?.cards[2]?.card?.card?.info);
  const { name, costForTwoMessage } =
    restaurantMenuDtls?.cards[2]?.card?.card?.info;
  // console.log(
  //   restaurantMenuDtls?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
  //     ?.card.card
  // );
  const { itemCards } =
    restaurantMenuDtls?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
      ?.card.card;
  // console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>Menu</h2>
      <h3>{costForTwoMessage}</h3>
      {/* {console.log(itemCards)} */}
      {itemCards.map((itemCard, index) => (
        <div key={itemCard.card.info.id}>
          <MenuItems menuData={itemCard.card} />
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
