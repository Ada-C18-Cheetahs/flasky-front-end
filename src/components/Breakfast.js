import PropTypes from "prop-types";
import { useState } from 'react'

import "./Breakfast.css";

const Breakfast = ({name, prepTime, description}) => {
//   const name = props.name;
//   const description = props.description;
//   const prepTime = props.prepTime;
//   const rating = props.rating;

//console.log(rating);

  const [rating, setRating] = useState(0);
  // const stateArray = useState(0);
  // const rating = stateArray[0];
  // const setRating = stateArray[1];


  const [breakfastName, setBreakfastName] = useState("");

  const increaseRating = () => setRating(rating + 1);
  
  const handleClick = () => {
    increaseRating()
  }

  const handleChange = event => setBreakfastName("eggs");

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="emphasizedText">Prep time: {prepTime} minutes</p>
      <p className="emphasizedText">Rating: {rating} stars</p>
      <p>
        Your {breakfastName} is cool!
      </p>
      <form>
        <input onChange={handleChange} />
      </form>
      <button onClick={handleClick}>Update Rating</button>
    </div>
  );
};

Breakfast.propTypes = {
   name:PropTypes.string.isRequired,
   description:PropTypes.string.isRequired,
   prepTime:PropTypes.number.isRequired,
}

export default Breakfast;
