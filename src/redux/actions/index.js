export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const adjustQty = (product, value)=>{
  return{
    type: "COUNTER",
    payload:{
      id: product,
      qty: value,
    },
  };
};

export const loadCurrentItem = (product) =>{
  return{
    type: "LOAD",
    payload: product,
  };
};
