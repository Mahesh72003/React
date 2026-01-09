import RestroCard from "./RestroCard";
import { resData } from "../utility/restrodata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resData);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9890283&lng=77.5331725&str=veg&trackingId=undefined&submitAction=ENTER&queryUniqueId=ff6712a3-d6c4-f280-6fd7-e7d50389d014&selectedPLTab=RESTAURANT"
      );
      const responseData = await response.json();
      console.log(responseData);
      const Data = responseData?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];
      const finalData = Data.filter((extractData, index) => {
      if(index > 3){
              return  (extractData.card.card.info)
       }
      });
      setlistofRestaurants(finalData);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  if (listofRestaurants.length === 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div>
        <input
          type="search"
          className="Search"
          name="Search"
          id="search"
          placeholder="Find any thing by name or rating"
        />
        <input
          type="button"
          value="Search"
          className="Search-btn"
          onClick={() => {
            let filterData = listofRestaurants.filter((res) => {
              const findrestro = res.card.card.info.name
                .toLowerCase()
                .includes(
                  document.getElementById("search").value.toLowerCase()
                );
              return findrestro;
            });
            setlistofRestaurants(filterData);
          }}
        />
      </div>
      <div className="restro-list">
        {listofRestaurants.map((restaurant) => {
          return (
            <RestroCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;