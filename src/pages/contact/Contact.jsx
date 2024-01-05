import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <>
      <section id="contact" className="contact_container">
        <h2 className="contact"> Connect With Us</h2>
        <form
          action="https://formspree.io/f/mrgdblrp"
          method="POST"
          className="contact_form"
        >
          <label for="name">
            <b className="input_label">Username</b>
          </label>
          <br></br>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            autoComplete="off"
            required
          />
          <br></br>
          <label for="email">
            <b className="input_label">Email</b>
          </label>
          <br></br>
          <input
            type="email"
            placeholder="Enter Email.Id"
            name="uname"
            autoComplete="off"
            required
          />
          <br></br>
          <label for="message">
            <b className="input_label">Enter your message-</b>
          </label>
          <br></br>
          <textarea
            type="text"
            name="message"
            autoComplete="off"
            required
            rows="6"
            cols="30"
          ></textarea>
          <br></br>
          <input
            type="submit"
            value="Submit"
            className="btn btn-warning"
          ></input>
        </form>
      </section>
    </>
  );
};

// https://formspree.io/f/mrgdblrp
