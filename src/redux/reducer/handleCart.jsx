// store items of the cart in local storage
const Initialstate = {
 cart : [],
 currentItem : null,
}
const handleCart = (state = Initialstate.cart, action) => {
  const product = action.payload;
    

  if(action.type === "INCREASE"){
    let tempcart = state.map((item) =>{
      if (item.id === action.payload.id){
        return {...item, quantity: item.quantity+1};
      }
      return item
    });
    return tempcart;
  }

  if(action.type === "DECREASE"){
    let tempcart = state.map((item) =>{
      if (item.id === action.payload.id){
        return {...item, quantity: item.quantity-1};
      }
      return item
    });
    return tempcart;
  }

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;

      case "COUNTER":
        return{
          ...state,
          cart: state.cart.map(item=> item.id === action.payload.id ? {...item, qty:action.payload.qty} : item)
        };
        break;

        case "LOAD":
          return{
             ...state,
             currentItem: action.payload,
          }
          break;
          
          
         
          

    default:
      return state;
      break;
  }
};

export default handleCart;
