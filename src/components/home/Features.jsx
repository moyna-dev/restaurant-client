const features = [
  {
    icon: "fa-burger",
    title: "Fresh Ingredients",
    description: "Daily fresh vegetables and premium quality meat.",
  },
  {
    icon: "fa-kitchen-set",
    title: "Professional Kitchen",
    description: "Modern cooking environment with hygiene.",
  },
  {
    icon: "fa-user-chef",
    title: "Expert Chefs",
    description: "Professional chefs with years of experience.",
  },
  {
    icon: "fa-truck",
    title: "Quick Delivery",
    description: "Fast online delivery to your doorstep.",
  },
];

function Features() {
  return (
    <section className="features" aria-labelledby="features-title">
      <div className="container">
        <div className="section-title">
          <h5>Why Choose Us</h5>
          <h2 id="features-title">We Always Give Quality Food</h2>
        </div>

        <div className="feature-grid">
          {features.map(({ icon, title, description }) => (
            <article className="feature-card" key={title}>
              <i className={`fa-solid ${icon}`} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
