import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import DisplayCounter from "./Components/DisplayCounter";
import Contaniner from "./Components/Contaniner";
import Controls from "./Components/Controls";
import PrivacyMessage from "./Components/PrivacyMessage";
import { useSelector } from "react-redux";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Contaniner>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </div>
      </Contaniner>
    </center>
  );
}

export default App;
