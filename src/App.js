import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";
import Dashboard_contact_cardlist from "./Screens/Dashboard_contact_cardlist";
import Dashboard_contact_list from "./Screens/Dashboard_contact_list";
import Dashboard_contact from "./Screens/Dashboard_contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/d" component={Dashboard_contact_cardlist} />
        <Route exact path="/d1" component={Dashboard_contact_list} />
        <Route exact path="/d2" component={Dashboard_contact} />
      </Switch>
    </div>
  );
}

export default App;
