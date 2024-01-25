import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Home.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <header>
        <nav
          className={`section__container nav__container ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <div className="nav__logo">
            Fix<span>Health</span>
          </div>
          <div
            className={`menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className="nav__links">
            <li className="link">
              <Link to="/" smooth={true}>
                Home
              </Link>
            </li>
            <li className="link">
              <Link to="consultationForm" smooth={true}>
                Consultation Form
              </Link>
            </li>
            <li className="link">
              <Link to="doctors" smooth={true}>
                Our Doctors
              </Link>
            </li>
            <li className="link">
              <Link to="Expertise" smooth={true}>
                Services
              </Link>
            </li>
            <li className="link">
              <Link to="Methadology" smooth={true}>
                Our Methadology
              </Link>
            </li>
            <li className="link">
              <Link to="testimnials" smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-nav">
          <ul className={`mob__links ${isMenuOpen ? "show" : ""}`}>
            <li className="link">
              <Link to="home" smooth={true}>
                Home
              </Link>
            </li>
            <li className="link">
              <Link to="consultationForm" smooth={true}>
                Consultation Form
              </Link>
            </li>
            <li className="link">
              <Link to="doctors" smooth={true}>
                Our Doctors
              </Link>
            </li>
            <li className="link">
              <Link to="testimonials" smooth={true}>
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div id="head-text">
          <h1>
            Embrace{" "}
            <span>
              {" "}
              <br />
              Superior
            </span>{" "}
            <span>Physiotherapy</span>
            <span id="dot"> </span>
          </h1>
          <div id="head-para">
            <p>
              We develope revolutionary technologies with delivering quality
              healthcare through medical technology.
            </p>
            <button>
              {" "}
              <span>Start Program</span>
            </button>
          </div>
        </div>
      </header>
      <div id="text_slider">
        <h2>Expert Care</h2>
        <span id="plus">+</span>
        <h2>Pain Free</h2>
        <span id="plus">+</span>
        <h2>Latest Technology</h2>
      </div>
    </>
  );
}
