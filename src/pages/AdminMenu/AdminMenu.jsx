import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://restaurant-management-server-1.onrender.com/api/v1";
function AdminMenu() {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/menu/add`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("foodhub_token")}`,
        },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not add menu item.");
      }
      form.reset();
      setSuccess(`${data.menu.name} added successfully.`);
    } catch (requestError) {
      setError(requestError.message || "Could not add menu item.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="admin-page page-section">
      <div className="container">
        <div className="section-title">
          <h5>Admin Panel</h5>
          <h2>Add Menu Item</h2>
        </div>
        <div className="admin-card">
          <form onSubmit={handleSubmit}>
            <label>
              Food Name
              <input
                name="name"
                placeholder="Example: Italian Pizza"
                required
              />
            </label>
            <label>
              Description
              <textarea
                name="description"
                placeholder="Describe the food item"
                required
              />
            </label>
            <label>
              Category
              <input
                name="category"
                placeholder="Example: Pizza"
                required
              />
            </label>
            <label>
              Price
              <input
                name="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="Example: 500"
                required
              />
            </label>
            <label>
              Food Image
              <input name="image" type="file" accept="image/*" />
            </label>
            <label>
              <input
                name="available"
                type="checkbox"
                value="true"
                defaultChecked
              />{" "}
              Available for order
            </label>
            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">{success}</p>}
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Adding Food..." : "Add Menu Item"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default AdminMenu;