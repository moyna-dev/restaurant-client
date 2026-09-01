import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://restaurant-management-server-1.onrender.com/api/v1";

function MyOrders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    async function loadOrders() {
      try {
        const response = await fetch(`${API_BASE_URL}/orders/my-orders`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("foodhub_token")}` },
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || "Could not load your orders.");
        setOrders(data.orders || []);
      } catch (requestError) {
        setError(requestError.message || "Could not load your orders.");
      } finally {
        setLoading(false);
      }
    }
    loadOrders();
  }, [user]);

  if (!user) return <section className="auth-page page-section"><div className="auth-card"><h1>Login Required</h1><p>Please login to view your orders.</p><Link to="/login" className="btn">Go To Login</Link></div></section>;

  return <section className="orders-page page-section" aria-labelledby="orders-title"><div className="container"><div className="section-title"><h5>Order History</h5><h2 id="orders-title">My Orders</h2></div>{loading && <p className="page-message">Loading your orders...</p>}{error && <p className="page-message form-error">{error}</p>}{!loading && !error && orders.length === 0 && <div className="empty-cart"><p>You have not placed any orders yet.</p><Link to="/menu" className="btn">Explore Menu</Link></div>}<div className="orders-list">{orders.map((order) => <article className="order-card" key={order._id}><div className="order-card-header"><div><h3>Order #{order._id.slice(-6).toUpperCase()}</h3><p>{new Date(order.createdAt).toLocaleString()}</p></div><span className={`order-status status-${order.orderStatus.toLowerCase().replaceAll(" ", "-")}`}>{order.orderStatus}</span></div><div className="order-items">{order.orderItems.map((item, index) => <p key={`${item._id || item.name}-${index}`}><span>{item.quantity} × {item.name}</span><strong>৳{(item.price * item.quantity).toFixed(2)}</strong></p>)}</div><div className="order-card-footer"><span>Payment: {order.paymentMethod} ({order.paymentStatus})</span><strong>Total: ৳{Number(order.totalPrice).toFixed(2)}</strong></div></article>)}</div></div></section>;
}

export default MyOrders;
