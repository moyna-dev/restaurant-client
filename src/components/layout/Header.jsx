import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo"><h2><Link to="/">🍽 FoodHub</Link></h2></div>
        <nav aria-label="Primary navigation">
          <ul>
            <li><a href="#home">Home</a></li><li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li><li><a href="#gallery">Gallery</a></li>
            <li><a href="#chef">Chefs</a></li><li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-btn"><Link to="/login" className="login-btn">Login</Link><Link to="/menu" className="order-btn">Order Now</Link></div>
      </div>
    </header>
  );
}
export default Header;
