import React from "react";
import "swiper/css/bundle";
import Home from "./HomeComp/Home";
import Products from "./ProductComp/Products";
import Mycart from "./Shoppingcart/Mycart";
import Orderplaced from "./Shoppingcart/Orderplaced";
import Singleproduct from "./ProductComp/Singleproduct";
import { AnimatePresence } from "framer-motion";
import Defaultscroll from "./Defaultscroll";
import { Route, Switch, useLocation } from "react-router-dom";
import Register from "./headerComp/Register";
import Login from "./headerComp/Login";
import Protectedroute from "./Protectedroute";

function App() {
  const location = useLocation();
  return (
    <>
      <Defaultscroll />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
          <Protectedroute  comp={Home}/>
            {/* <Home /> */}
          </Route>
          <Route exact path="/products">
          <Protectedroute  comp={Products}/>
            {/* <Products /> */}
          </Route>
          <Route exact path="/products/singleproduct/:id">
          <Protectedroute  comp={Singleproduct}/>
            {/* <Singleproduct /> */}
          </Route>
          <Route exact path="/mycart">
          <Protectedroute  comp={Mycart}/>
            {/* <Mycart /> */}
          </Route>
          <Route exact path="/orderplaced">
          <Protectedroute  comp={Orderplaced}/>
            {/* <Orderplaced /> */}
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;

