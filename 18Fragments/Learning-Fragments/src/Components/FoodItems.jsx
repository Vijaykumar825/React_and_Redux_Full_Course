import Item from "./item";
import { useState } from "react";
const FoodItems = ({ items }) => {
  //const foodItems = ["Dal", "Green Vegtables", "roti", "sald", "Egg", "Ghee"];
  let [activeItems, SetActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyonClick={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
