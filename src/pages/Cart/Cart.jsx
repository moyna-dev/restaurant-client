import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {
  const { cartItems, subtotal, changeQuantity, removeFromCart } = useCart();
  return (
    <section className="cart-page page-section" aria-labelledby="cart-title">
      <div className="container">
        <div className="section-title"><h5>Your Order</h5><h2 id="cart-title">Shopping Cart</h2></div>
        {cartItems.length === 0 ? <div className="empty-cart"><p>Your cart is empty.</p><Link to="/menu" className="btn">Explore Menu</Link></div> : <div className="cart-layout"><div className="cart-items">{cartItems.map((item) => <article className="cart-item" key={item.id}><img src={item.image} alt={item.alt} /><div><h3>{item.name}</h3><p>${item.price.toFixed(2)} each</p></div><div className="quantity-controls"><button type="button" onClick={() => changeQuantity(item.id, -1)} aria-label={`Remove one ${item.name}`}>−</button><span>{item.quantity}</span><button type="button" onClick={() => changeQuantity(item.id, 1)} aria-label={`Add one ${item.name}`}>+</button></div><strong>${(item.price * item.quantity).toFixed(2)}</strong><button type="button" className="remove-item" onClick={() => removeFromCart(item.id)}>Remove</button></article>)}</div><aside className="cart-summary"><h3>Order Summary</h3><p><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></p><p><span>Delivery</span><strong>Calculated at checkout</strong></p><div className="summary-total"><span>Total</span><strong>${subtotal.toFixed(2)}</strong></div><button type="button" className="btn">Proceed To Checkout</button></aside></div>}
      </div>
    </section>
  );
}

export default Cart;
