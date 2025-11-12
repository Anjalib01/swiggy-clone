import { useEffect, useState } from "react";
import { cloudinaryImageUrl, restaurantList } from "./constants.js";
import Shimer from "./Shimer.js";
import NoDataFound from "./NoDataFound.js";
import { Link } from "react-router-dom";
import useItemData from "./useItemData.js";

const RestaurantCard = ({
  title,
  description,
  category,
  price,
  discountPercentage,
  images,
}) => {
  return (
    <div className="cards">
      <img className="cardImg" src={images[0]} />
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{category}</h3>
      <h3>{price}</h3>
      <h3>{discountPercentage}</h3>
    </div>
  );
};

function filterRestaurant(searchText, restaurants) {
  const data = restaurants.filter((restaurant) => {
    return restaurant?.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return data;
}

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");

  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useItemData();

  return !allRestaurants ? (
    <Shimer />
  ) : (
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
            const data = filterRestaurant(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <NoDataFound />
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link to={"/product/" + restaurant.id} key={restaurant.id}>
              <RestaurantCard key={restaurant.id} {...restaurant} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default BodyComponent;
