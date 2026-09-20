import useCartStore from "../store/cartStore";

function Cart() {
  const cart = useCartStore(
    (state) => state.cart
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const increaseQty = useCartStore(
    (state) => state.increaseQty
  );

  const decreaseQty = useCartStore(
    (state) => state.decreaseQty
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            className="cart-item"
            key={item.id}
          >
            <h3>{item.name}</h3>

            <p>
              ₹{item.price} × {item.quantity}
            </p>

            <button
              onClick={() =>
                decreaseQty(item.id)
              }
            >
              -
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() =>
                increaseQty(item.id)
              }
            >
              +
            </button>

            <button
              onClick={() =>
                removeItem(item.id)
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

      <button onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;