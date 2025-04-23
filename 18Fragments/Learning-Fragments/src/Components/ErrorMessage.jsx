const ErrorMessage = ({ items }) => {
  //let foodItems = ["Dal", "Green Vegtables", "roti", "sald", "Egg", "Ghee"];

  return <>{items.length === 0 && <h3>I'm still hungry</h3>}</>;
};

export default ErrorMessage;
