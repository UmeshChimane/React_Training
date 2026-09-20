import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const totalQuantity = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {state.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        state.cart.map((item) => (
<div className="cart-item" key={item.id}>            <h3>{item.name}</h3>

            <p>
              ₹{item.price} × {item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE_QTY",
                  payload: item.id,
                })
              }
            >
              -
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QTY",
                  payload: item.id,
                })
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr />

      <h3>Total Items: {totalQuantity}</h3>

      <h3>Total Price: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;