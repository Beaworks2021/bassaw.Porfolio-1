import React, { useState } from "react";
import "./Contacts.scss";

const Contacts = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const smile = ":)";

  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/thanks-toon.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply asap {smile} </span>}
        </form>
      </div>
    </div>
  );
};

export default Contacts;
