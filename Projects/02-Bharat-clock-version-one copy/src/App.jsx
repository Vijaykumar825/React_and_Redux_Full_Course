import ClockHeading from "./components/Clockheading";
import ClockSlogon from "./components/ClockSlogon";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogon></ClockSlogon>
        <CurrentTime></CurrentTime>
      </center>
    </div>
  );
}

export default App;
