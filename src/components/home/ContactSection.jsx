import { useState } from "react";

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-title"><h5>Contact</h5><h2 id="contact-title">Get In Touch</h2></div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Restaurant Information</h3>
            <p><i className="fa-solid fa-location-dot" aria-hidden="true" /> Dhaka, Bangladesh</p>
            <p><i className="fa-solid fa-phone" aria-hidden="true" /> +880 1700000000</p>
            <p><i className="fa-solid fa-envelope" aria-hidden="true" /> info@foodhub.com</p>
            <p><i className="fa-solid fa-clock" aria-hidden="true" /> 9:00 AM - 11:00 PM</p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" aria-label="Your Name" required />
              <input type="email" placeholder="Email" aria-label="Email" required />
              <input type="text" placeholder="Subject" aria-label="Subject" required />
              <textarea placeholder="Message" aria-label="Message" required />
              <button type="submit" className="btn">Send Message</button>
            </form>
            {submitted && <p className="form-success" role="status">Message sent successfully.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
