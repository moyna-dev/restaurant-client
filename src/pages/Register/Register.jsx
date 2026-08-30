import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError(""); setLoading(true);
    try { await register({ name: form.get("name"), email: form.get("email"), phone: form.get("phone"), password: form.get("password") }); navigate("/profile"); } catch (requestError) { setError(requestError.message); } finally { setLoading(false); }
  }

  return <section className="auth-page page-section"><div className="auth-card"><h5>Join FoodHub</h5><h1>Create Your Account</h1><p>Register to order food, reserve tables and track your orders.</p><form onSubmit={handleSubmit}><label>Full Name<input name="name" type="text" placeholder="Enter your full name" required /></label><label>Email<input name="email" type="email" placeholder="Enter your email" required /></label><label>Phone<input name="phone" type="tel" placeholder="Enter your phone number" required /></label><label>Password<input name="password" type="password" placeholder="Create a password" minLength="6" required /></label>{error && <p className="form-error" role="alert">{error}</p>}<button type="submit" className="btn" disabled={loading}>{loading ? "Creating account..." : "Create Account"}</button></form><p className="auth-switch">Already have an account? <Link to="/login">Login now</Link></p></div></section>;
}

export default Register;
