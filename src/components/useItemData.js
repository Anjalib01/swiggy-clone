import { useState, useEffect } from "react";

const ItemData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestraunts();
  }, []);

  async function getRestraunts() {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    const restaurantData = json?.products;
    console.log(restaurantData);
    setAllRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  }

  return { allRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default ItemData;
