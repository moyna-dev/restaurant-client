import { useEffect, useState } from "react";
import burgerImage from "../../assets/images/chicken-burger.jpg";
import { useCart } from "../../context/CartContext";
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://restaurant-management-server-1.onrender.com/api/v1";
function Menu() {
  const { addToCart } = useCart();
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function loadMenus() {
      try {
        const response = await fetch(`${API_BASE_URL}/menu`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(
            data.message || "Could not load the menu."
          );
        }
        console.log("Menu API response:", data);
        const menuItems = Array.isArray(data.menus)
          ? data.menus
          : [];
        console.log("Menu Items:", menuItems);
        const availableMenus = menuItems.filter(
          (item) => item.available === true
        );
        console.log("Filtered Items:", availableMenus);
        setMenus(availableMenus);
      } catch (requestError) {
        console.error("Menu loading error:", requestError);
        setError(
          requestError.message || "Could not load the menu."
        );
      } finally {
        setLoading(false);
      }
    }
    loadMenus();
  }, []);
  return (
    <section
      className="menu page-section"
      aria-labelledby="full-menu-title"
    >
      <div className="container">
        <div className="section-title">
          <h5>FoodHub Menu</h5>
          <h2 id="full-menu-title">
            Discover Our Delicious Food
          </h2>
        </div>
        {loading && (
          <p className="page-message">
            Loading menu...
          </p>
        )}
        {error && (
          <p className="page-message form-error">
            {error}
          </p>
        )}
        {!loading && !error && menus.length === 0 && (
          <p className="page-message">
            No menu items are available right now.
          </p>
        )}
        <div className="menu-grid">
          {menus.map((item) => {
            const cartItem = {
              id: item._id,
              image: item.image || burgerImage,
              alt: item.name,
              name: item.name,
              description: item.description,
              price: item.price,
            };
            return (
              <article
                className="food-card"
                key={item._id}
              >
                <img
                  src={cartItem.image}
                  alt={cartItem.alt}
                  loading="lazy"
                />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <h4>
                  ৳{Number(item.price).toFixed(2)}
                </h4>
                <button
                  type="button"
                  onClick={() => addToCart(cartItem)}
                >
                  Add To Cart
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Menu;