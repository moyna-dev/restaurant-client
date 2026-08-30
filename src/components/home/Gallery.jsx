import bbqChicken from "../../assets/images/bbq-chicken.jpg";
import pizza from "../../assets/images/cheese-pizza.jpg";
import burger from "../../assets/images/chicken-burger.jpg";
import noodles from "../../assets/images/chicken-noodles.jpg";
import cake from "../../assets/images/chocolate-cake.jpg";
import pasta from "../../assets/images/creamy-pasta.jpg";
import juice from "../../assets/images/fresh-juice.jpg";
import steak from "../../assets/images/steak.jpg";

const photos = [
  [bbqChicken, "Barbecue chicken"], [pizza, "Cheese pizza"],
  [burger, "Chicken burger"], [noodles, "Chicken noodles"],
  [cake, "Chocolate cake"], [pasta, "Creamy pasta"],
  [juice, "Fresh juice"], [steak, "Grilled steak"],
];

function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-title"><h5>Gallery</h5><h2 id="gallery-title">Restaurant Gallery</h2></div>
        <div className="gallery-grid">
          {photos.map(([src, alt]) => <img src={src} alt={alt} loading="lazy" key={alt} />)}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
