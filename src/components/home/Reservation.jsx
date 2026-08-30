import { useState } from "react";

function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <section className="reservation" id="reservation" aria-labelledby="reservation-title">
      <div className="container">
        <div className="section-title"><h5>Reservation</h5><h2 id="reservation-title">Book Your Table</h2></div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" aria-label="Full Name" required />
          <input type="email" placeholder="Email" aria-label="Email" required />
          <input type="tel" placeholder="Phone" aria-label="Phone" required />
          <input type="date" aria-label="Reservation date" required />
          <input type="time" aria-label="Reservation time" required />
          <input type="number" min="1" placeholder="Guests" aria-label="Guests" required />
          <textarea placeholder="Special Request" aria-label="Special Request" />
          <button type="submit" className="btn">Reserve Now</button>
        </form>
        {submitted && <p className="form-success" role="status">Reservation submitted successfully.</p>}
      </div>
    </section>
  );
}

export default Reservation;
