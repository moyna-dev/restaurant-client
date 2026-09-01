import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://restaurant-management-server-1.onrender.com/api/v1";
function Cart() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    cartItems,
    subtotal,
    changeQuantity,
    removeFromCart,
    clearCart,
  } = useCart();
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleCheckout(event) {
    event.preventDefault();
    if (!user) {
      navigate("/login");
      return;
    }
    const formData = new FormData(event.currentTarget);
    setError("");
    setSuccessMessage("");
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("foodhub_token")}`,
        },
        body: JSON.stringify({
          orderItems: cartItems.map((item) => ({
            menu: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
          })),
          deliveryAddress: formData.get("deliveryAddress"),
          phone: formData.get("phone"),
          paymentMethod: formData.get("paymentMethod"),
          totalPrice: subtotal,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not place your order.");
      }
      clearCart();
      event.currentTarget.reset();
      setSuccessMessage(
        "Order placed successfully. The restaurant will confirm it soon."
      );
    } catch (requestError) {
      setError(requestError.message || "Could not place your order.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="cart-page page-section" aria-labelledby="cart-title">
      <div className="container">
        <div className="section-title">
          <h5>Your Order</h5>
          <h2 id="cart-title">Shopping Cart</h2>
        </div>
        {successMessage && (
          <p className="form-success">{successMessage}</p>
        )}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/menu" className="btn">
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.alt} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>৳{item.price.toFixed(2)} each</p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => changeQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <strong>৳{(item.price * item.quantity).toFixed(2)}</strong>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>
            <aside className="cart-summary">
              <h3>Order Summary</h3>
              <p>
                <span>Subtotal</span>
                <strong>৳{subtotal.toFixed(2)}</strong>
              </p>
              <div className="summary-total">
                <span>Total</span>
                <strong>৳{subtotal.toFixed(2)}</strong>
              </div>
              <form onSubmit={handleCheckout}>
                <input
                  name="deliveryAddress"
                  type="text"
                  placeholder="Delivery address"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                />
                <select name="paymentMethod" defaultValue="Cash">
                  <option value="Cash">Cash on Delivery</option>
                  <option value="Bkash">bKash</option>
                  <option value="Nagad">Nagad</option>
                  <option value="Card">Card</option>
                </select>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn" disabled={loading}>
                  {loading
                    ? "Placing Order..."
                    : user
                      ? "Place Order"
                      : "Login To Checkout"}
                </button>
              </form>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
export default Cart;