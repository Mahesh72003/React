import RestroCard from "./RestroCard"
import resData from "../utility/restrodata"
const Body = () => {
  return (
    <div className="body">
      <div className="restro-list">
        {resData.map((restaurant) => {
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