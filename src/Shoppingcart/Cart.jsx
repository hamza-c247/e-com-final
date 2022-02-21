import React from "react";



export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;

    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

 const emptycart = ()=>{
   return(
     <>
     <div className="cart-empty">
       Cart is Empty
       </div>
     </>
   )
 }

  return (
    <>
      <div className="container shopping-wrapper">
        <h2>
          {cart.length === 0 ? emptycart() : "My Shopping List"}
        </h2>

        {cart.length > 0 && <div className="clear-cart-btn"><button onClick={clearCart}>Clear Cart</button></div>}
        <div className="products">
          {cart.map((product, idx) => (
            <div className="shopping-product" key={idx}>
            
            
            
            
              <div className="row cart-wrapper">
              <div className="col-md-4">
              <h5>{product.title}</h5>
              <p> ₹{product.price}{product.off}</p>
              <input
                value={product.quantity}
                onChange={(e) => 
                  setQuantity(
                  product,
                  parseInt(e.target.value)
                )
                }
              />
              </div>

              <div className="col-md-4">
              <img src={product.image} alt={product.name} />
              </div>

              <div className="col-md-4">
              <button className="clr-cart-btn" onClick={() => removeFromCart(product)}><img className="shopping-icons" src="/assets/images/logo/bin.png"/></button>
              </div>
              </div>
            </div>
          ))}

          
        </div>

        <div>Total Cost: ${getTotalSum()}</div>
      </div>
    </>
  );
}
