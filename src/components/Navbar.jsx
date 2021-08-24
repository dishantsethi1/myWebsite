import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Techie Dishant
          </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/feedback">
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/videos">
                  Videos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="df">
        <NavLink to="/" className="mheading">
          <div className="mheading">Techie Dishant </div>
        </NavLink>
        <div className="navdes">
          <NavLink to="/about" className="nav-items">
            About
          </NavLink>
          <NavLink to="contact" className="nav-items">
            Contact
          </NavLink>
          <NavLink to="/feedback" className="nav-items">
            Feedback
          </NavLink>
          <NavLink to="/videos" className="nav-items">
            Videos
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
