const RestroCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData.card.card.info;
  return (
    <div className="restro-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        className="restro-img"
        alt="restro"
      />
      <h2>{name}</h2>
      <p>{costForTwo}</p>
      <p>Delivery Time: {sla.slaString}</p>
      <p>Rating: {avgRating}</p>
      <p>{cuisines.join(", ")}</p>
    </div>
  );
};


export default RestroCard;