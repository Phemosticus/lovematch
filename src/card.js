import "./card.css";
const Card = ({ writeUp }) => {
  return (
    <div className="card">
      <span>{writeUp}</span>
    </div>
  );
};

export default Card;
