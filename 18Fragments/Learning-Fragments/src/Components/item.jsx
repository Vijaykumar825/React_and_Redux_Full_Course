import styles from "./item.module.css";
const Item = ({ foodItem, bought, handleBuyonClick }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item  ${bought && "active"}`}
    >
      <span className={styles["Kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyonClick}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
