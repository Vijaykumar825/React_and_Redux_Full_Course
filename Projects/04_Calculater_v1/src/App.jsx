import "./App.css";
import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  let [CalVal, setCalVal] = useState("45");

  return (
    <div className={styles.calculator}>
      <Display displayValue={CalVal} />
      <ButtonContainer />
    </div>
  );
}

export default App;
