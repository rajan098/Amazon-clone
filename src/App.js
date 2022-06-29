import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home";
import Payment from "./Payment";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
 "pk_test_51Kf3R9SHUEgCqlWIaQDPauZ9xfjSY0fZc1Pbtmwg4IjIqMo1m0JS2lIPm814mkjk7rGMzPEhfko6NP7WqtLfdJ8w00kt70oYb7"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //only runs when the app cant run
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);
      if (authUser) {
        //the user just logged in /the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM

    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/orders">
            {/* <Header /> */}
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
