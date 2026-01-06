import RestroCard from "./RestroCard";
import { resData } from "../utility/restrodata";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resData);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9890283&lng=77.5331725&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const responseData = await response.json();
      const Data = responseData?.data?.cards || [];
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
