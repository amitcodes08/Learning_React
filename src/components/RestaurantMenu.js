import { use, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utilis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(0);
    
    
    // useEffect(() => {
    //     // Fetch restaurant menu data using the restaurant ID from the URL
    //     fetchMenu();
    // }, [resId]);

    // swiggy api mila nhi isiliye ye part incomplete chhod raha hu
    
    // const fetchMenu = async () => {
    //     // Logic to fetch menu data based on resId
    //     const data = await fetch(`https://api.example.com/restaurants/${resId}/menu`);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories);

    if(resInfo === null) {
        return <Shimmer />;
    }

    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{resInfo.name}</h1>
        <h2 className="text-lg">{resInfo.cuisine}</h2>
        {/* */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            category={category.card.card}
            showItems={index === setShowIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
};

export default RestaurantMenu;