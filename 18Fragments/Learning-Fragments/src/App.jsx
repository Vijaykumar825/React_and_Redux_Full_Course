import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

/*function App() {
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </React.Fragment>
    //or down one both gives the same ans
    <>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green vegetables</li>
        <li class="list-group-item">roti</li>
        <li class="list-group-item">Egg</li>
        <li class="list-group-item">Green leafs</li>
      </ul>
    </>
  );
}
*/

function App() {
  // let foodItems = [];

  let foodItems = ["Dal", "Green Vegtables", "roti", "sald", "Egg", "Ghee"];
  //{foodItems.length === 0 && <h3>I'm still hungry</h3>} type1
  //{foodItems.length === 0 ? <h3>I'm still hungry</h3> : null}type2
  /*if(foodItems.length === 0)
    {
      return  <h3>I'm still hungry</h3>   type3*/

  return (
    <>
      <h1 className="Food-Heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}
export default App;
