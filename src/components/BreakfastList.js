import Breakfast from "./Breakfast";
import PropTypes from "prop-types";

const BreakfastList = ({breakfastData}) => {
    //const breakfastData = props.breakfastData;

    // const breakfastData = [
    //     {id:1, name:"Eggs Benedict", description:"It's a lot of work but it's worth it", prepTime:60, rating:5},
    //     {id:2, name:"French Toast", description:"Delicious", prepTime:10, rating:5},
    //     {id:3, name:"Plain Oatmeal", description:"It gets the job done.", prepTime:1, rating:2},
    //     {id:4, name:"Scrambled Eggs", description:"Yummy", prepTime:2, rating:4}
    // ];

    const breakfastComponents = breakfastData.map((breakfast) => {
        return(
            <li key={breakfast.id}>
                <Breakfast 
                    name={breakfast.name} 
                    description={breakfast.description} 
                    prepTime={breakfast.prepTime} 
                    rating={breakfast.rating} />
            </li>
        )
    });
//rating={breakfast.rating}
    return (
        <ul>
            {breakfastComponents}
        </ul>
    );
};

BreakfastList.propTypes = {
    breakfastData:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BreakfastList;
