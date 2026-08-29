import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";

const highlights = [
  { value: "50K+", label: "Happy Customers" },
  { value: "120+", label: "Food Items" },
  { value: "15+", label: "Expert Chefs" },
];

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-container">
        <div className="hero-left">
          <h4>Welcome To FoodHub</h4>
          <h1 id="hero-title">Delicious Food <br />Made With Love</h1>
          <p>Experience premium quality food prepared by our expert chefs using fresh ingredients every single day.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn">Explore Menu</Link>
            <a href="#reservation" className="btn2">Book Table</a>
          </div>
          <div className="hero-info" aria-label="FoodHub highlights">
            {highlights.map(({ value, label }) => (
              <div key={label}><h2>{value}</h2><span>{label}</span></div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="Fresh pizzas prepared at FoodHub" fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
