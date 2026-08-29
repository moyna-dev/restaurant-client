import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <h2>Restaurant</h2>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;