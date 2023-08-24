import React from "react";
import vg from "../assets/2.webp";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abc" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="abc@gmail.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
      <img src={vg} alt="Graphics" />
    </div>
  );
};

export default Contact;
