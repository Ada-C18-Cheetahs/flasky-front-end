import "./Breakfast.css";
import PropTypes from "prop-types";

const Breakfast = ({name, prepTime, description, rating}) => {
//   const name = props.name;
//   const description = props.description;
//   const prepTime = props.prepTime;
//   const rating = props.rating;

//console.log(rating);

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="emphasizedText">Prep time: {prepTime} minutes</p>
      <p className="emphasizedText">Rating: {rating} stars</p>
    </div>
  );
};

Breakfast.propTypes = {
   name:PropTypes.string.isRequired,
   description:PropTypes.string.isRequired,
   prepTime:PropTypes.number.isRequired,
   rating:PropTypes.number.isRequired 
}

export default Breakfast;
