import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../redux/actions";
import { adjustQty } from "../redux/actions";
import { useState, useEffect } from "react";
import Navbar from "../headerComp/Navbar";
import Footer from "../FooterComp/Footer";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const Mycart = ({ adjustQty }) => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  //  clear cart on order place
 function clrcart(){
   localStorage.removeItem("cartitems");
   history.push("/orderplaced")
 }
  // for cart summary
  const [totalPrice, settotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    
    if(state&&state.length){
      state.forEach((item) => {
        items += item.quantity;
        price += item.quantity * item.price;
      });

      
    setTotalItems(items);
    settotalPrice(price);
    }
   

  }, [state, totalPrice, totalItems, settotalPrice, setTotalItems]);

  const handleclose = (item) => {
    dispatch(delCart(item));
  };

  // increase decrease item qnatity
  const [input, Setinput] = useState(state.qty);
  const onChangeHandler = (e) => {
    console.log(e.target.value);
    Setinput(e.target.value);
    adjustQty(state.id, e.target.value);
  };

  const Heading = () => {
    return (
      <div className="container cart-heading-wrapper">
        <h4>
          My Cart <button className="cart-length-btn">{state.length}</button>
        </h4>
      </div>
    );
  };

  const CartItems = (cartitem, idx) => {
    return (
      <>
        <div className="" key={idx}>
          <div className=" cart-item-wrapper">
            <div className="row ">
              <div className="col-md-4 ">
                <img className="cart-img" src={cartitem.image} />
              </div>

              <div className="col-md-4">
                <h5>{cartitem.title}</h5>

                <p>
                  <b>₹{cartitem.price * cartitem.quantity}</b>
                  <span className="off-color">{cartitem.off}</span>
                </p>
                <div>
                  {/* <label htmlFor="qty"> Qty </label>
                  <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    value={cartitem.qty}
                    onChange={onChangeHandler}
                  /> */}
                </div>
                <div>
                  <button
                    className="counter-btn"
                    onClick={() => {
                      if (cartitem.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: cartitem });
                      } else {
                        dispatch(handleclose(cartitem));
                      }
                    }}
                  >
                    -
                  </button>

                  <span className="counter-qty">{cartitem.quantity}</span>

                  <button
                    className="counter-btn"
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: cartitem })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="col-md-4 bin-wrapper">
                <button
                  onClick={() => handleclose(cartitem)}
                  className="bin-btn"
                >
                  <img
                    className="navbar-icons"
                    src={"/assets/images/logo/bin.png"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const cartsummary = () => {
    return (
      <>
        <div className="container summary-wrapper">
          <h4> Cart Summary</h4>
          <div>
            <p>
              Total Items
              <button className="cart-length-btn"> {totalItems}</button>
            </p>
            <p>
              Total Amount <b>₹{totalPrice}</b>
            </p>
          </div>
          <button onClick={clrcart} className="checkout-btn">
            Place Order
          </button>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="container empty-wrapper">
        <h4>Add Watches to Your Cart</h4>
        <Link to={"/products"}>Go to Products</Link>
      </div>
    );
  };

  const history = useHistory();

  const back = () => {
    history.push("/products");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar></Navbar>
        <div className="container margin-wrapper">
          <button onClick={() => back()} className="home-btn">
            <img className="navbar-icons" src="/assets/images/logo/left.png" />
            Go Back
          </button>
        </div>

       
        <div className="container">
        
        {state.length !== 0 && Heading()}
        <div className="row">
      
            <div className="col-md-9">
              {state.length !==0 && state.map(CartItems)}
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12">
              <div className="sidebar__checkout">
                {state.length !== 0 && cartsummary()}
              </div>
            </div>
          </div>
         
         
         
        </div>
        {state.length === 0 && emptyCart()}
        <Footer></Footer>
      </motion.div>
    </>
  );
};
const mapDispatchtoProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchtoProps)(Mycart);
