import React from "react";
import Navbar from "../headerComp/Navbar";
import Productbanner from "./Productbanner";
import Footer from "../FooterComp/Footer";
import { useState, useEffect } from "react";
import Productfilter from "./Productfilter";
import Strip from "../HomeComp/Strip";
import Cart from "../Shoppingcart/Cart";
import { AnimatePresence, motion } from "framer-motion";
const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function Products() {
  // store items in local storage
  // const getlocalItem = () =>{
  //   let cartitem = localStorage.getItem('cartitem');
  //   console.log(cartitem);

  //   if (cartitem){
  //     return JSON.parse(localStorage.getItem('cartitem'))
  //   }
  //   else{
  //     return [];
  //   }
  // }
  // set getlocalItem in use state
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  // get data from local storage

  // useEffect(() => {

  // localStorage.setItem('cartitems', JSON.stringify(cart))

  // }, [cart]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1  }}
        exit={{ opacity: 0 }}
      >
        <Navbar />
        <Productbanner />
        <Strip />
        <div className="App">
          <div className="container">
            <header className="btn-header ">
              <button onClick={() => navigateTo(PAGE_CART)}>
                <img
                  className="shopping-icons"
                  src={"/assets/images/logo/cart.png"}
                />{" "}
                <span className="items-in-cart">{getCartTotal()}</span>
              </button>

              <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
                <img
                  className="shopping-icons"
                  src={"/assets/images/logo/watch.png"}
                />
              </button>
            </header>
          </div>
          {page === PAGE_PRODUCTS && (
            <Productfilter cart={cart} setCart={setCart} />
          )}
          {page === PAGE_CART && <Cart cart={cart} setCart={setCart} />}
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default Products;
