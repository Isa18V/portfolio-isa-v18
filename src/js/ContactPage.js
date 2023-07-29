import React from "react";
import "../css/ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page" id="contact">
      <h1 className="contact-page__heading">Contact Me</h1>
      <p className="contact-page__description">
        If you have any questions or inquiries, feel free to contact me using
        the form below:
      </p>

      <form
        className="contact-page__form"
        action="https://formspree.io/f/mjvqgkod"
        method="POST"
      >
        <label htmlFor="name" className="contact-page__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="contact-page__input"
          required
        />

        <label htmlFor="email" className="contact-page__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="contact-page__input"
          required
        />

        <label htmlFor="message" className="contact-page__label">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-page__textarea"
          required
        ></textarea>

        <button type="submit" className="contact-page__button">
          Submit
        </button>
      </form>
    </div>
  );
}
