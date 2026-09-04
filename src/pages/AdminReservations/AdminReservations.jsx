import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://restaurant-management-server-1.onrender.com/api/v1";
const statuses = ["Pending", "Confirmed", "Cancelled", "Completed"];

function AdminReservations() {
  const { user } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user || user.role !== "admin") return;
    async function loadReservations() {
      try {
        const response = await fetch(`${API_BASE_URL}/reservations`, { headers: { Authorization: `Bearer ${localStorage.getItem("foodhub_token")}` } });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || "Could not load reservations.");
        setReservations(data.reservations || []);
      } catch (requestError) { setError(requestError.message || "Could not load reservations."); } finally { setLoading(false); }
    }
    loadReservations();
  }, [user]);

  async function updateStatus(id, status) {
    try {
      const response = await fetch(`${API_BASE_URL}/reservations/${id}/status`, { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("foodhub_token")}` }, body: JSON.stringify({ status }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || "Could not update the reservation.");
      setReservations((items) => items.map((item) => item._id === id ? data.reservation : item));
    } catch (requestError) { setError(requestError.message || "Could not update the reservation."); }
  }

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== "admin") return <Navigate to="/" replace />;

  return <section className="admin-page page-section"><div className="container"><div className="section-title"><h5>Admin Panel</h5><h2>Table Reservations</h2></div>{loading && <p className="page-message">Loading reservations...</p>}{error && <p className="page-message form-error">{error}</p>}{!loading && !error && reservations.length === 0 && <p className="page-message">No reservations have been submitted yet.</p>}<div className="reservations-list">{reservations.map((reservation) => <article className="reservation-card" key={reservation._id}><div><h3>{reservation.name}</h3><p>{reservation.email} · {reservation.phone}</p><p>{new Date(reservation.reservationDate).toLocaleDateString()} at {reservation.reservationTime} · {reservation.guests} guest(s)</p>{reservation.specialRequest && <p><strong>Request:</strong> {reservation.specialRequest}</p>}</div><label>Status<select value={reservation.status} onChange={(event) => updateStatus(reservation._id, event.target.value)}>{statuses.map((status) => <option value={status} key={status}>{status}</option>)}</select></label></article>)}</div></div></section>;
}

export default AdminReservations;
