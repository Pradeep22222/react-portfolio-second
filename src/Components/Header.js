import React from "react";
import profile from "./../assets/my_profile.png";
import logo from "./../assets/logo.png";
export const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light bg-opacity-10">
      <div className="container">
        <a className="navbar-brand nav-font" href="#">
          <img src={logo} altwidth="80px" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse nav-font"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#projects"
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                About Me
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
