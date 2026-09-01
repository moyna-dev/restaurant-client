import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError("");
    setLoading(true);
    try {
      const user = await login({
        email: form.get("email"),
        password: form.get("password"),
      });
      console.log("Logged in user:", user);
      if (user?.role === "admin") {
        navigate("/admin/menu");
      } else {
        navigate("/profile");
      }
    } catch (requestError) {
      setError(
        requestError.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="auth-page page-section">
      <div className="auth-card">
        <h5>Welcome Back</h5>
        <h1>Login To FoodHub</h1>
        <p>
          Sign in to view your orders and manage your profile.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="auth-switch">
          New to FoodHub?{" "}
          <Link to="/register">
            Create an account
          </Link>
        </p>
      </div>
    </section>
  );
}
export default Login;