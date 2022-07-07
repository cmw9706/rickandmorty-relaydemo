import "./DetailsCard.css";

function DetailsCard(props) {
  const navigateToDetails = () => {
    console.log("Let's go!");
  };
  return (
    <button className="Details-card grow" onClick={() => navigateToDetails()}>
      <div className="Details-card-container">
        <img className="Details-card-image" src={props.image} alt="Character" />
        <h1 className="Details-card-header">{props.name}</h1>
      </div>
    </button>
  );
}

export default DetailsCard;
