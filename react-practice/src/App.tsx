import "./App.css";
import { Login } from "./components/Login";
import Products from "./components/Products";
import { Counter } from "./components/Counter";
import Temperature from "./components/Temperature";
import { useState } from "react";
import Input from "./components/Input";
function App() {
  const [temp, setTemp] = useState(""); //state Liftong up example (Temperature and INput example).

  const products = [
    { id: 1, name: "Laptop", available: true },
    { id: 2, name: "Phone", available: false },
    { id: 3, name: "Mouse", available: true },
  ];

  return (
    <div>
      <Login />
      <Products products={products} />
      <Counter />
      <Temperature temp={temp} />
      <Input setTemp={setTemp} temp={temp} />
    </div>
  );
}

export default App;
