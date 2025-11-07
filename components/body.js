import { useEffect, useState } from "react";
import { cloudinaryImageUrl, restaurantList } from "./constants.js";

const RestaurantCard = ({
  name,
  costForTwo,
  cuisines,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <div className="cards">
      <img className="cardImg" src={cloudinaryImageUrl + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{costForTwo}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} star</h3>
    </div>
  );
};

function filterRestaurant(searchText, restaurants) {
  const data = restaurants.filter((restaurant) => {
    return restaurant?.info?.name.includes(searchText);
  });

  return data;
}

const BodyComponent = () => {
  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch("");
    const json = await data.json();
    return json;
  }

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="test"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterRestaurant(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default BodyComponent;
