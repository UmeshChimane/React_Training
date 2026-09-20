import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
    },
  ];

  return (
    <>
      <h1>E-Commerce Cart</h1>

      <ProductList products={products} />

      <Cart />
    </>
  );
}

export default App;