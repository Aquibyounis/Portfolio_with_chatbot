import React from "react";
import "./Contact.css";
import tri from "../../assets/images.png";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact_side">Contact</h1>

      <div className="inner_contact">
        <div className="left_contact">
          <img src={tri} alt="Decorative graphic" className="tri_image" />
        </div>

        <div className="right_contact">
          <ul className="c_ul">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/aquib-younis-pula-6b205b275/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
                <span>LINKEDIN</span>
              </li>
            </a>

            <a
              className="telegram"
              href="https://t.me/codepixelsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <i className="fa-brands fa-telegram"></i>
                <span>TELEGRAM</span>
              </li>
            </a>

            <a
              className="instagram"
              href="https://www.instagram.com/code.pixelsx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <i className="fa-brands fa-instagram"></i>
                <span>INSTAGRAM</span>
              </li>
            </a>

            <a
              className="threads"
              href="https://www.threads.net/@code.pixelsx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <i className="fa-brands fa-at"></i>
                <span>THREADS</span>
              </li>
            </a>
          </ul>

          <a href="mailto:aquibyounis2@gmail.com" className="o">
            aquibyounis2@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
