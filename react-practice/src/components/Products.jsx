const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
};

export default Products;
