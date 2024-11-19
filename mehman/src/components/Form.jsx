import React from "react";

const Form = () => {
  return (
    <form action="" className="section section-divider  blog" id="R">
      <p className="footer-list-title">Book a Table</p>
      <div className="input-wrapper">
        <input
          type="text"
          name="full_name"
          required=""
          placeholder="Your Name"
          aria-label="Your Name"
          className="input-field"
        />
        <input
          type="email"
          name="email_address"
          required=""
          placeholder="Email"
          aria-label="Email"
          className="input-field"
        />
      </div>
      <div className="input-wrapper">
        <select
          name="total_person"
          aria-label="Total person"
          className="input-field"
        >
          <option value="person">Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5 person">5 Person</option>
        </select>
        <input
          type="date"
          name="booking_date"
          aria-label="Reservation date"
          className="input-field"
        />
      </div>
      <textarea
        name="message"
        required=""
        placeholder="Message"
        aria-label="Message"
        className="input-field"
        defaultValue={""}
      />
      <button type="submit" className="btn">
        Book a Table
      </button>
    </form>
  );
};

export default Form;
