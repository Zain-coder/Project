import "./App.css";
import Home from "./componenets/Home";
import SignUp from "./componenets/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Fetchuser from "./componenets/Fetchuser";
import Services from "./componenets/Services";
import Cart from "./componenets/Cart";
import Users from "./componenets/Users";
import { List } from "@material-ui/core";
import UpdateUser from "./componenets/UpdateUser";
export default App;
function App() {
  const [data, setdata] = useState([]);
  const [counter, setCounter] = useState(0);
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Switch>
        <Route path="/UpdateUser/:id">
          <UpdateUser />
        </Route>
        <Route path="/Users">
          <Users />
        </Route>
        <Route path="/Fetchuser">
          <Fetchuser />
        </Route>
        <Route path="/List">
          <List />
        </Route>
        <Route path="/Services">
          <Services
            counter={counter}
            setCounter={(a) => setCounter(a)}
            cart={cart}
            setCart={setCart}
          />
        </Route>
        <Route path="/Cart">
          <Cart cart={cart} setCart={(e) => setCart(e)} />
        </Route>
        <Route path="/SignUp">
          <SignUp handleChange={(d) => setdata(d)} data={data} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
