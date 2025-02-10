import React from "react";
import "./style.css";
const ReservationForm = () => {
  return (
    <section className="reservation bg-black-10" id="reservation">
      <div className="containerz">
        <div className="form reservation-form bg-black-30">
          <form
            action="https://formspree.io/f/xzzbbznw"
            method="POST"
            className="form-left"
          >
            <h2 className="headline-1 text-center">Réservation en ligne</h2>
            <p className="form-text text-center">
              Demande de réservation{" "}
              <a href="tel:0698356157" className="link">
                >01 46 63 45 58
              </a>{" "}
              ou remplissez le formulaire de commande
            </p>
            <div className="input-wrapperz">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                autoComplete="off"
                className="input-fieldz"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className="input-fieldz"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="off"
                className="input-fieldz"
                required
              />
            </div>
            <div className="input-wrapperz">
              <div className="icon-wrapperz">
                <ion-icon name="person-outline" aria-hidden="true" />
                <select name="person" className="input-fieldz" required>
                  {Array.from({ length: 70 }, (_, i) => i + 1).map((i) => {
                    return (
                      <option value="1-person" key={i}>
                        {i} Person
                      </option>
                    );
                  })}
                </select>
                <ion-icon name="chevron-down" aria-hidden="true" />
              </div>
              <div className="icon-wrapperz">
                <ion-icon name="calendar-clear-outline" aria-hidden="true" />
                <input
                  type="date"
                  name="reservation-date"
                  className="input-fieldz"
                  required
                />
                <ion-icon name="chevron-down" aria-hidden="true" />
              </div>
              <div className="icon-wrapperz">
                <ion-icon name="time-outline" aria-hidden="true" />
                <select name="person" className="input-fieldz" required>
                  <option value="08:00am">08 : 00 am</option>
                  <option value="09:00am">09 : 00 am</option>
                  <option value="010:00am">10 : 00 am</option>
                  <option value="011:00am">11 : 00 am</option>
                  <option value="012:00am">12 : 00 am</option>
                  <option value="01:00pm">01 : 00 pm</option>
                  <option value="02:00pm">02 : 00 pm</option>
                  <option value="03:00pm">03 : 00 pm</option>
                  <option value="04:00pm">04 : 00 pm</option>
                  <option value="05:00pm">05 : 00 pm</option>
                  <option value="06:00pm">06 : 00 pm</option>
                  <option value="07:00pm">07 : 00 pm</option>
                  <option value="08:00pm">08 : 00 pm</option>
                  <option value="09:00pm">09 : 00 pm</option>
                  <option value="10:00pm">10 : 00 pm</option>
                </select>
                <ion-icon name="chevron-down" aria-hidden="true" />
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              autoComplete="off"
              className="input-fieldz"
              defaultValue={""}
              required
            />
            <button type="submit" className="bttn bttn-secondary">
              <span className="text text-1">Réservez une table</span>
              <span className="text text-2" aria-hidden="true">
                Réservez une table
              </span>
            </button>
          </form>
          <div
            className="form-right text-center"
            style={{
              backgroundImage: 'url("/assets/images/form-pattern.png")',
            }}
          >
            <h2 className="headline-1 text-center">Contactez-nous</h2>
            <p className="contact-label">Demande de réservation</p>
            <a
              href="tel:0698356157"
              className="body-1 contact-number hover-underline"
            >
              - 06 98 35 61 57
            </a>
            <div className="separator" />
            <p className="contact-label">Address</p>
            <address className="body-4">
              3 avenue Louis georgeon 94230 Cachan <br />
              France
            </address>
            <p className="menu-text text-center">
              Horaires <span className="span">12:00</span> à{" "}
              <span className="span">4:30</span>et{" "}
              <span className="span">19:00</span>à{" "}
              <span className="span">23:00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
