import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banner.avif";

function SpecialOffer() {
  const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${bannerImage})`;

  return (
    <section className="special-offer" style={{ backgroundImage }} aria-labelledby="offer-title">
      <div className="container">
        <div className="offer-content">
          <h5>Today&apos;s Special</h5>
          <h2 id="offer-title">Get 30% Discount On Family Combo</h2>
          <p>Order today and enjoy delicious meals with your family. Limited time offer.</p>
          <Link to="/menu" className="btn">Order Now</Link>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
