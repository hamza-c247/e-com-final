import { createStore } from "redux";
import rootReducers from "./reducer";

// save item to local storage in redux store rather than in handlecart
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("cartitems", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}
const getlocalItems = () => {
  let cartitems = localStorage.getItem("cartitems");

  console.log(cartitems);
  if (cartitems) {
    return JSON.parse(localStorage.getItem("cartitems"));
  } else {
    return [];
  }
};

const store = createStore(rootReducers, getlocalItems());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
