import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Figure from "./components/Circle/Figure";
import Nav from "./components/Navigation/Nav";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route
            exact
            path="/figure/:figure/:color"
            render={(props) => {
              <Figure {...props} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
