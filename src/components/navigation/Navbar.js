import React from "react";
import { Link } from "@reach/router";
import mainlogo from "../../images/Neural Translation Main Logo.svg";

export const Navbar = (props) => {
  return (
    <React.Fragment>
      <img className="logo" src={mainlogo} alt="Neural Translation" />
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <nav className="navigation">
        <ul className="nav-list">{props.children}</ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </React.Fragment>
  );
};

export const NavItem = ({ title, href }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={href}>
        {title}
      </Link>
    </li>
  );
};
