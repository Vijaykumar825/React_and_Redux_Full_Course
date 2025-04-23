import Item from "./item";
const FoodItems = ({ items }) => {
  //const foodItems = ["Dal", "Green Vegtables", "roti", "sald", "Egg", "Ghee"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
