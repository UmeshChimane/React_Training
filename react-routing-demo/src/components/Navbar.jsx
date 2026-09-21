import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <h2>My App</h2>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </nav>
  );
}