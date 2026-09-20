import useCartStore from "../store/cartStore";

function Product({ product }) {
  const addItem = useCartStore(
    (state) => state.addItem
  );

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity: 1,
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