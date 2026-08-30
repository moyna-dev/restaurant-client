import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  function handleLogout() { logout(); navigate("/"); }

  if (!user) return <section className="auth-page page-section"><div className="auth-card"><h1>Login Required</h1><p>Please login to view your profile.</p><Link to="/login" className="btn">Go To Login</Link></div></section>;
  return <section className="profile-page page-section"><div className="container"><div className="section-title"><h5>My Account</h5><h2>Welcome, {user.name}</h2></div><div className="profile-card"><div className="profile-icon"><i className="fa-solid fa-user" /></div><div><h3>{user.name}</h3><p><strong>Email:</strong> {user.email}</p>{user.phone && <p><strong>Phone:</strong> {user.phone}</p>}<p><strong>Role:</strong> {user.role || "user"}</p></div><button type="button" className="logout-btn" onClick={handleLogout}>Logout</button></div></div></section>;
}

export default Profile;
