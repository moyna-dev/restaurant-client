import aboutImage from "../../assets/images/bbq-chicken.jpg";

const benefits = [
  { icon: "fa-utensils", label: "Best Food" },
  { icon: "fa-truck-fast", label: "Fast Delivery" },
  { icon: "fa-star", label: "5 Star Service" },
];

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Freshly prepared barbecue chicken dish" loading="lazy" />
        </div>

        <div className="about-content">
          <h5>About Us</h5>
          <h2 id="about-title">We Cook The Best Food In Town</h2>
          <p>FoodHub Restaurant provides premium quality meals with modern dining, online ordering, reservation facilities and excellent customer service.</p>
          <p>Fresh ingredients, experienced chefs and hygienic kitchens make every meal unforgettable.</p>

          <div className="about-boxes">
            {benefits.map(({ icon, label }) => (
              <div className="box" key={label}>
                <i className={`fa-solid ${icon}`} aria-hidden="true" />
                <h4>{label}</h4>
              </div>
            ))}
          </div>

          <a href="#menu" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default About;
