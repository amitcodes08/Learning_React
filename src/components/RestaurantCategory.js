import {RestaurantCard} from "./Body";
import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ category, showItems, setShowIndex }) => {

    // const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setShowIndex();
    }

  return (
    <div className="category">
    <div className="flex items-center justify-center">
        <span className="font-bold text-xl m-4">{category.title}</span>
        <span className="text-sm m-4">⬇️</span>
      </div>
      {showItems && <ItemList items={category.restaurants} />}
    </div>
  );
};

export default RestaurantCategory;