import bbqChicken from "../../assets/images/bbq-chicken.jpg";
import noodles from "../../assets/images/chicken-noodles.jpg";
import pasta from "../../assets/images/creamy-pasta.jpg";
import cake from "../../assets/images/chocolate-cake.jpg";

const chefs = [
  [bbqChicken, "John Smith", "Head Chef"], [noodles, "Michael Lee", "Italian Chef"],
  [pasta, "David Brown", "BBQ Specialist"], [cake, "William Roy", "Pastry Chef"],
];

function Chef() {
  return (
    <section className="chef" id="chef" aria-labelledby="chef-title">
      <div className="container">
        <div className="section-title"><h5>Professional Team</h5><h2 id="chef-title">Meet Our Expert Chefs</h2></div>
        <div className="chef-grid">
          {chefs.map(([image, name, role]) => (
            <article className="chef-card" key={name}><img src={image} alt={`${name}, ${role}`} loading="lazy" /><h3>{name}</h3><p>{role}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chef;
