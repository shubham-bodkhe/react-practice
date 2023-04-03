import logo from "./logo.svg";
import "./App.css";
import Clicker from "./Components/Clicker";
import Counter from "./Components/Counter";
import CounterTwo from "./Components/CounterTwo";
import { UserProvider } from "./Components/UserContext";
import A from "./Components/A";

function App() {
  return (
    <div className="App">
      <UserProvider value={"Shubham"}>
        <A></A>
      </UserProvider>
    </div>
  );
}

export default App;
