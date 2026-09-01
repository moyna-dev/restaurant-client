import { useState } from "react";

function Reservation() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError(""); setMessage(""); setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || "https://restaurant-management-server-1.onrender.com/api/v1"}/reservations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"), email: formData.get("email"), phone: formData.get("phone"),
          reservationDate: formData.get("reservationDate"), reservationTime: formData.get("reservationTime"),
          guests: Number(formData.get("guests")), specialRequest: formData.get("specialRequest"),
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Could not submit your reservation.");
      form.reset(); setMessage("Reservation submitted successfully. We will confirm it soon.");
    } catch (requestError) { setError(requestError.message || "Could not submit your reservation."); } finally { setLoading(false); }
  }

  return (
    <section className="reservation" id="reservation" aria-labelledby="reservation-title">
      <div className="container">
        <div className="section-title"><h5>Reservation</h5><h2 id="reservation-title">Book Your Table</h2></div>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Full Name" aria-label="Full Name" required />
          <input name="email" type="email" placeholder="Email" aria-label="Email" required />
          <input name="phone" type="tel" placeholder="Phone" aria-label="Phone" required />
          <input name="reservationDate" type="date" aria-label="Reservation date" required />
          <input name="reservationTime" type="time" aria-label="Reservation time" required />
          <input name="guests" type="number" min="1" placeholder="Guests" aria-label="Guests" required />
          <textarea name="specialRequest" placeholder="Special Request" aria-label="Special Request" />
          <button type="submit" className="btn" disabled={loading}>{loading ? "Submitting..." : "Reserve Now"}</button>
        </form>
        {message && <p className="form-success" role="status">{message}</p>}
        {error && <p className="form-error reservation-error" role="alert">{error}</p>}
      </div>
    </section>
  );
}

export default Reservation;
