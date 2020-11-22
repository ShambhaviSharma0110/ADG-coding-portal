import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
