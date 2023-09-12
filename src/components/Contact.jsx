import React, { useState } from "react";
import vg from "../assets/2.webp";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              required
              placeholder="Abc"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="abc@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about your query..."
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
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
