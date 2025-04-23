import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

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
  let foodItems = ["Dal", "Green Vegtables", "roti", "sald", "Egg", "Ghee"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
