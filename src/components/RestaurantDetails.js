import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    getItemDetails();
  }, []);

  async function getItemDetails() {
    const data = await fetch("https://dummyjson.com/products/" + id);
    const json = await data.json();
    setItemDetails(json);
  }

  return (
    <>
      <img src={itemDetails?.images[0]} />
      <h1>{itemDetails?.brand}</h1>
      <h2>{itemDetails?.title}</h2>
      <h2>{itemDetails?.rating}</h2>
      <h2>
        {itemDetails?.price + "(" + itemDetails?.discountPercentage + "% Off"}
      </h2>
    </>
  );
};

export default RestaurantDetails;
