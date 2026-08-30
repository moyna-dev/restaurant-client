import bbqChicken from "../assets/images/bbq-chicken.jpg";
import pizza from "../assets/images/cheese-pizza.jpg";
import burger from "../assets/images/chicken-burger.jpg";
import noodles from "../assets/images/chicken-noodles.jpg";
import cake from "../assets/images/chocolate-cake.jpg";
import pasta from "../assets/images/creamy-pasta.jpg";
import juice from "../assets/images/fresh-juice.jpg";
import friedChicken from "../assets/images/fried-chiken.jpg";
import iceCream from "../assets/images/ice-cream.jpg";
import steak from "../assets/images/steak.jpg";

const menuItems = [
  { id: "italian-pizza", image: pizza, alt: "Italian pizza with cheese and vegetables", name: "Italian Pizza", description: "Cheese, Mushroom & Fresh Vegetables", price: 18.99 },
  { id: "chicken-burger", image: burger, alt: "Grilled chicken burger with cheese", name: "Chicken Burger", description: "Grilled Chicken with Cheese", price: 12.99 },
  { id: "creamy-pasta", image: pasta, alt: "Creamy Italian white sauce pasta", name: "Creamy Pasta", description: "Italian White Sauce Pasta", price: 15.99 },
  { id: "bbq-chicken", image: bbqChicken, alt: "Barbecue chicken", name: "BBQ Chicken", description: "Smoky grilled chicken with house spices", price: 16.99 },
  { id: "chicken-noodles", image: noodles, alt: "Chicken noodles", name: "Chicken Noodles", description: "Wok-tossed noodles with tender chicken", price: 11.99 },
  { id: "chocolate-cake", image: cake, alt: "Chocolate cake", name: "Chocolate Cake", description: "Rich chocolate dessert made fresh daily", price: 7.99 },
  { id: "fresh-juice", image: juice, alt: "Fresh juice", name: "Fresh Juice", description: "Seasonal fruit juice, freshly prepared", price: 4.99 },
  { id: "fried-chicken", image: friedChicken, alt: "Crispy fried chicken", name: "Crispy Fried Chicken", description: "Golden, crunchy chicken with signature seasoning", price: 13.99 },
  { id: "ice-cream", image: iceCream, alt: "Ice cream", name: "Ice Cream", description: "Creamy dessert with your favourite flavour", price: 5.99 },
  { id: "grilled-steak", image: steak, alt: "Grilled steak", name: "Grilled Steak", description: "Tender steak cooked to perfection", price: 24.99 },
];

export default menuItems;
