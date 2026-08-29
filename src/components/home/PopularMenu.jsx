import pizzaImage from "../../assets/images/cheese-pizza.jpg";
import burgerImage from "../../assets/images/chicken-burger.jpg";
import pastaImage from "../../assets/images/creamy-pasta.jpg";

const menuItems = [
  {
    image: pizzaImage,
    alt: "Italian pizza with cheese and vegetables",
    name: "Italian Pizza",
    description: "Cheese, Mushroom & Fresh Vegetables",
    price: "$18.99",
  },
  {
    image: burgerImage,
    alt: "Grilled chicken burger with cheese",
    name: "Chicken Burger",
    description: "Grilled Chicken with Cheese",
    price: "$12.99",
  },
  {
    image: pastaImage,
    alt: "Creamy Italian white sauce pasta",
    name: "Creamy Pasta",
    description: "Italian White Sauce Pasta",
    price: "$15.99",
  },
];

function PopularMenu() {
  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-title">
          <h5>Popular Menu</h5>
          <h2 id="menu-title">Our Best Selling Foods</h2>
        </div>

        <div className="menu-grid">
          {menuItems.map(({ image, alt, name, description, price }) => (
            <article className="food-card" key={name}>
              <img src={image} alt={alt} loading="lazy" />
              <h3>{name}</h3>
              <p>{description}</p>
              <h4>{price}</h4>
              <button type="button">Add To Cart</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularMenu;
