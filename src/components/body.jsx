import RestroCard from "./RestroCard";
import { resData } from "../utility/restrodata";
import { useState } from "react";



const Body = () => {
const [listofRestaurants, setlistofRestaurants] = useState(resData);
  return (
    <div className="body">
      <div >
          <input type="search" className="Search" name="Search" id="search" placeholder="Find any thing by name or rating" />
          <input type="button" value="Search" className="Search-btn" onClick={()=>{
          let filterData = listofRestaurants.filter((res) => {
            const findrestro = res.card.card.info.name.toLowerCase().includes(document.getElementById("search").value.toLowerCase());
            
            return findrestro;
            
          })
          setlistofRestaurants(filterData);
          
          }}/>
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