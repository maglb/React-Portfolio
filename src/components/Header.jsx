import "../style.css";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Header() {

  return (
    <header className="navbar navbar-expand-lg header">
      <div className="container-fluid">
        <Link className="nav-link link" id="logo" to="/">
          <h1>Magali Lebon</h1>
        </Link>
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <Nav
            className="header"
            links={[
              <Link key={1} className="nav-link link" to="/about">
                About Me
              </Link>,
              <Link key={2} className="nav-link link" to="/portfolio">
                Portfolio
              </Link>,
              <Link key={3} className="nav-link link" to="/contact">
                Contact
              </Link>,
              <Link key={4} className="nav-link link" to="/resume">
                Resume
              </Link>,
            ]}
          />
        </div>
      </div>
    </header>
  );
}
