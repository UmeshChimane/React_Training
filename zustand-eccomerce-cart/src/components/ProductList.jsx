import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="products">
      <h2>Products</h2>

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductList;