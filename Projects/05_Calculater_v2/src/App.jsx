import "./App.css";
import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import { useState } from "react";

function App() {
  const [CalVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(CalVal);
      setCalVal(result);
    } else {
      const newDisplayValue = CalVal + buttonText;
      setCalVal(newDisplayValue);
    }

    //console.log(buttonText);
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={CalVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
