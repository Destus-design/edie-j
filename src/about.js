import React from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsArrowRight } from "react-icons/bs";
class About extends React.Component {
  render() {
    return (
      <main id="about" className="container_a">
        <div className="about j-top">
          <p className="first-paragraph">Unhappy with your website?</p>
          <h5>We create beautiful and fast web services</h5>
        </div>
        <div className="about_img-box">
          <img
            src="assets/heroImage.jpg"
            alt="people offering services"
            className="about-img"
          />
        </div>
        <div className=" about about-section2">
          <h2>Story, emotion and purpose</h2>
          <p>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </p>
          <div className="contact">
            <p>Want us to contact you?</p>
            <div className="in_put">
              <input type="email" className="mail" placeholder="Email" />
              <button>Join</button>
            </div>
          </div>
        </div>
        <section className="services">
          <h2>We offer high demand services </h2>
          <div className="service">
            <div className="sub-service">
              <div id="icon" className="icon_a">
                <FontAwesomeIcon icon={faPen} className=" pen-icon" />
              </div>
              <h6 className="one">UI/UX Design</h6>
              <p className="service-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get started</button>
            </div>
            <div className="sub-service">
              <div className="icon_b">
                <FontAwesomeIcon icon={faCode} className="icon code-icon" />
              </div>
              <p className="two">Frontend</p>
              <p className="service-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button className="">Get started</button>
            </div>
            <div className="sub-service">
              <div className="icon_c">
                <FontAwesomeIcon icon={faBars} className="icon bars-icon" />
              </div>
              <p className="three">Backend</p>
              <p className="service-detail">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </p>
              <button>Get started</button>
            </div>
          </div>
          <div className="project_a">
            <h2>Good design means good business</h2>
            <div className="project">
              <figure className="project1">
                <img src="assets/smarthome.jpg" alt="Smart home dashboard" />
                <small>React Dashboard </small>
                <h3>Smart home dashboard</h3>
              </figure>
              <figure className="project2">
                <img src="assets/onboard.png" alt="Onboard application" />
                <small>UI/UX design</small>
                <h3>Onboard application</h3>
              </figure>
              <figure className="project3">
                <img src="assets/booking.png" alt="Booking system" />
                <small>Mobile responsive</small>
                <h3>Booking system</h3>
              </figure>
              <figure clasName="project4">
                <img
                  src="assets/juice-product.png"
                  alt="Juice product homepage"
                />
                <small>Front-end application</small>
                <h3>Juice product homepage</h3>
              </figure>
            </div>
            <div className="button">
              <a href="#about">
                see more
                <i class=" fa-arrow-right">
                  <BsArrowRight />
                </i>
              </a>
            </div>
          </div>
          <div className="team">
            <div className="team_b">
              <div>
                <p>Meet the Team</p>
                <h3>We are chilled and a laidback team</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="team-members">
              <img
                src="assets/person3.png"
                alt="team member 1"
                className="image1"
              />
              <img src="assets/person1.png" alt="team member 2" />
              <img
                src="assets/person2.png"
                alt="team member 3"
                className="image3"
              />
            </div>
          </div>
          <div className="testimonial-section">
            <p>
              “Fast and outstanding resutls. Edie understands their customer’s
              needs. They have a young and talented team.”
            </p>
            <div className="testimony">
              <img
                src="assets/person4.png"
                alt="customer"
                className="testimony-image"
              />
              <div>
                <p>Carlos Trans</p>
                <p>The Decorate Gatsby</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default About;
