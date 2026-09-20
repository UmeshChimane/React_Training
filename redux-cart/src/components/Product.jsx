import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addItem({
        ...product,
        quantity: 1,
      })
    );
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