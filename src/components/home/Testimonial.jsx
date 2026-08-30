const testimonials = [
  ["★★★★★", "Best restaurant in town. Amazing food quality and fast delivery.", "Sarah Johnson"],
  ["★★★★★", "Highly recommended. Professional staff and delicious meals.", "David Miller"],
  ["★★★★★", "Loved the environment. Excellent customer service.", "Emma Wilson"],
];

function Testimonial() {
  return (
    <section className="testimonial" aria-labelledby="testimonial-title">
      <div className="container">
        <div className="section-title"><h5>Testimonials</h5><h2 id="testimonial-title">What Our Customers Say</h2></div>
        <div className="testimonial-grid">
          {testimonials.map(([rating, comment, name]) => <article className="testimonial-card" key={name}><p>{rating}<br />{comment}</p><h4>{name}</h4></article>)}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
