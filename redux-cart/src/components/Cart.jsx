import { useDispatch, useSelector } from "react-redux";

import {
  removeItem,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>

            <p>
              ₹{item.price} × {item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch(decreaseQty(item.id))
              }
            >
              -
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() =>
                dispatch(increaseQty(item.id))
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(removeItem(item.id))
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

      <button
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;