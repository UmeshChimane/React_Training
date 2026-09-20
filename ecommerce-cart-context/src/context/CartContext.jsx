import { createContext, useReducer } from "react";

export const CartContext = createContext();

//initial state
const initialState = {
  cart: []
};


//reducers
const cartReducer = (state, action) => {
  switch (action.type) {

    case "ADD_ITEM":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };
      case "CLEAR_CART":
  return {
    ...state,
    cart: []
  };

    default:
      return state;
  }
};

//providers
export const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};