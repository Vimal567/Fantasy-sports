import Home from "./Components/Home";
import Picked from "./Components/Picked"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/proceed" component={Picked} />
      </Switch>
    </div>
  );
}

export default App;
