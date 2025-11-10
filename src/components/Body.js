import restaurantList from "../utilis/mockData";
import { use, useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { CDN_URL } from "../utilis/constants";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "./UserContext";


// const styleCard = {
//     backgroundColor: "#f0f0f0",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     width: "200px",
//     margin: "10px"
// };

const RestaurantCard = (props) => {
  console.log("Props:", props);
  const { resData } = props;

  if (resData) {
    return (
      <div className="w-60 h-80 p-4 m-4 bg-pink-50 rounded-lg hover:shadow-lg flex flex-col overflow-hidden justify-between">
        <img
          className="rounded-md w-full h-40 object-cover mb-2"
          src={`${CDN_URL}${resData?.info?.cloudinaryImageId}`}
          alt={resData?.info?.name}
        />
        <div className="flex-1">
          <h3 className="font-semibold text-lg truncate">{resData?.info?.name}</h3>
          <h4 className="text-sm text-gray-600 truncate">{resData?.info?.cuisines?.join(", ")}</h4>
        </div>
        <div className="mt-2">
          <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
            {resData?.info?.avgRating ?? "N/A"}
          </span>
        </div>
      </div>
    );
  }
}

// Higher Order Component

const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-yellow-300 text-xs px-2 py-1 rounded top-2 right-2 z-10">
          Promoted
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
}


const Body = () => {

  const { loggedInUser, setUserName } = useContext(UserContext);
  
  // State Variable to hold list of restaurants- Super Powerful Variable
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] =
     useState(restaurantList);

    const [searchText, setSearchText] = useState("");

   const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

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
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return <h1>🔴 You are offline! Please check your internet connection.</h1>
  }

  if(listOfRestaurants.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="flex justify-center m-4">
        <div className="">
          <input
            className="border border-black p-2 m-2 rounded-lg"
            type="text"
            data-testid="search-input"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 text-white p-2 m-2 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-green-500 text-white p-2 m-2 rounded"
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

      <div>
        <label>UserName</label>
        <input
          value={loggedInUser || ""}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border border-black p-2 m-2 rounded-lg"
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((resObj) => (
          <Link to={`/restaurant/${resObj?.info?.id}`} key={resObj?.info?.id}>
            {resObj.info.promoted ? (
              <PromotedRestaurantCard resData={resObj} />
            ) : (
              <RestaurantCard resData={resObj} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
export { RestaurantCard };