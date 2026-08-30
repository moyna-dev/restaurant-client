import menuItems from "../../data/menuItems";
import { useCart } from "../../context/CartContext";

function PopularMenu() {
  const { addToCart } = useCart();
  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-title">
          <h5>Popular Menu</h5>
          <h2 id="menu-title">Our Best Selling Foods</h2>
        </div>

        <div className="menu-grid">
          {menuItems.slice(0, 3).map((item) => (
            <article className="food-card" key={item.id}>
              <img src={item.image} alt={item.alt} loading="lazy" />
              <h3>{item.name}</h3><p>{item.description}</p><h4>${item.price.toFixed(2)}</h4>
              <button type="button" onClick={() => addToCart(item)}>Add To Cart</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularMenu;
