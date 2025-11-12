import { useEffect, useState } from "react";
import { cloudinaryImageUrl, restaurantList } from "./constants.js";
import Shimer from "./Shimer.js";
import NoDataFound from "./NoDataFound.js";
import { Link } from "react-router-dom";
import useItemData from "./useItemData.js";

const RestaurantCard = ({
  brand,
  title,
  rating,
  price,
  discountPercentage,
  images,
}) => {
  return (
    <div className="border-2 w-64 h-96 p-3 space-y-1 text-center">
      <img className="w-full h-48 object-cover" src={images[0]} />
      <h3 className="uppercase">{brand}</h3>
      <h3>{title}</h3>
      <h3>{rating}</h3>
      <h3 className="text-green-800">
        {price + " (" + discountPercentage + "% Off) "}
      </h3>
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
      <div className="flex justify-center m-2 h-10 space-x-4">
        <input
          type="test"
          className="border-2 rounded-xl w-50 p-3"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="rounded-2xl w-20 bg-[#2c4152] text-amber-50"
          onClick={() => {
            const data = filterRestaurant(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex  flex-wrap justify-around gap-6 m-10">
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
