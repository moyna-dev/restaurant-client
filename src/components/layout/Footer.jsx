function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div><h2>FoodHub</h2><p>Premium Restaurant Management System.</p></div>
        <div><h3>Quick Links</h3><ul><li><a href="#home">Home</a></li><li><a href="#menu">Menu</a></li><li><a href="#gallery">Gallery</a></li><li><a href="#contact">Contact</a></li></ul></div>
        <div><h3>Services</h3><ul><li>Dine In</li><li>Take Away</li><li>Online Delivery</li><li>Reservation</li></ul></div>
        <div><h3>Follow Us</h3><div className="social-icons"><a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f" /></a><a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram" /></a><a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube" /></a><a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a></div></div>
      </div>
      <div className="copyright">
        <p>© 2026 FoodHub Restaurant Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
