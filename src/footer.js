import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer-links">
            <ul>
              <li>
                <a href="https://www.edie.com">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="https://www.google.com">Our Works</a>
              </li>
              <li>
                <a href="https://www.google.com">Clients</a>
              </li>
              <li>
                <a href="mailto:contact@edie.com">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="edie">Edie</h2>
            <div className="socials">
              <ul>
                <li>
                  <img src="assets/instagram.svg" alt="instagram icon" />
                </li>
                <li>
                  <img src="assets/linkedin.svg" alt="linkedin icon" />
                </li>
                <li>
                  <img src="assets/twitter.svg" alt="twitter icon" />
                </li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <p className="contact-footer">Want us to contact you?</p>
            <div className="in_put">
              <input type="email" className="mail" placeholder="Email" />
              <button>Join</button>
            </div>
          </div>
        </div>
        <center>
          <p className="attribution">
            Created by{" "}
            <a href="https://www.github.com/Destus-design">
              Destus-design @devChallenges.io
            </a>
          </p>
        </center>
      </footer>
    );
  }
}
export default Footer;
