import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product({ product }) {

  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...product,
        quantity: 1
      }
    });
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;