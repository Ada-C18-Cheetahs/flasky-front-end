import "./App.css";
import BreakfastList from "./components/BreakfastList";

function App() {
  const name = "Cheetahs";

    const breakfastData1 = [
        {id:1, name:"Eggs Benedict", description:"It's a lot of work but it's worth it", prepTime:60, rating:5},
        {id:2, name:"French Toast", description:"Delicious", prepTime:10, rating:5},
        {id:3, name:"Plain Oatmeal", description:"It gets the job done.", prepTime:1, rating:2},
        {id:4, name:"Scrambled Eggs", description:"Yummy", prepTime:2, rating:4}
    ];
    const breakfastData2 = [
        {id:3, name:"Plain Oatmeal", description:"It gets the job done.", prepTime:1, rating:2},
        {id:4, name:"Scrambled Eggs", description:"Yummy", prepTime:2, rating:4}
    ];
  return (
    <div>
      <h1>{name} Breakfast App</h1>
      <h2>Breakfast List 1</h2>
      <BreakfastList breakfastData={breakfastData1} />
      <h2>Breakfast List 2</h2>
      <BreakfastList breakfastData={breakfastData2}/>
    </div>
  );
}

export default App;
