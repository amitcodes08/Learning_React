import restaurantList from "../utilis/mockData";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { CDN_URL } from "../utilis/constants";


const styleCard = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "200px",
    margin: "10px"
};

const RestaurantCard = (props) => {
  console.log("Props:", props);
  const { resData } = props;

  if (resData) {
    return (
      <div className="restaurant-card" style={styleCard}>
        <img
          className="restaurant-logo"
          src={`${CDN_URL}${resData?.info?.cloudinaryImageId}`}
        ></img>
        <h3>{resData?.info?.name}</h3>
        <h4>{resData?.info?.cuisines?.join(", ")}</h4>
        <h4>{resData?.info?.avgRating}</h4>
      </div>
    );
  }
}



const Body = () => {
  
  // State Variable to hold list of restaurants- Super Powerful Variable
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] =
     useState(restaurantList);

   const [searchText, setSearchText] = useState("");

  // useEffect will be called after body renders
   useEffect(() => {
    fetchData();
   }, [])

   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.6085896&lng=77.4243239&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants);

    setFilteredRestaurants(restaurants);
   }

  if(listOfRestaurants.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="search">
        <div className="search-box">
          <input type="text" placeholder="Search..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>Search</button>
        </div>

        <button
          className="filter_btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.0
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((resObj) => (
          <Link to={`/restaurant/${resObj?.info?.id}`} key={resObj?.info?.id}>
            <RestaurantCard resData={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;