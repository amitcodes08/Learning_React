import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

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

    if(resInfo === null) {
        return <Shimmer />;
    }

    return (
        <div className="Menu">
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.cuisine}</h2>
            <h3>{resInfo.area}</h3>
            <h3>{resInfo.city}</h3>
            <h3>{resInfo.avgRating} stars</h3>
            <h3>{resInfo.costForTwoMsg}</h3>
        </div>
    );
};

export default RestaurantMenu;