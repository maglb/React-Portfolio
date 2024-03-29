import "../style.css";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";


export default function Header() {
const currentPage = useLocation().pathname;
  return (
    <header className="navbar navbar-expand-lg header">
      <div className="container-fluid">
       
          <h1 id="logo">Magali Lebon</h1>
       
        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <Nav
            className="header"
            links={[
              <Link
                key={1}
                className={
                  currentPage === "/about"
                    ? "nav-link active linkactive"
                    : "nav-link link"
                }
                to="/about"
              >
                About Me
              </Link>,
              <Link
                key={2}
                className={
                  currentPage === "/portfolio"
                    ? "nav-link active linkactive"
                    : "nav-link link"
                }
                to="/portfolio"
              >
                Portfolio
              </Link>,
              <Link
                key={3}
                className={
                  currentPage === "/contact"
                    ? "nav-link active linkactive"
                    : "nav-link link"
                }
                to="/contact"
              >
                Contact
              </Link>,
              <Link
                key={4}
                className={
                  currentPage === "/resume"
                    ? "nav-link active linkactive"
                    : "nav-link link"
                }
                to="/resume"
              >
                Resume
              </Link>,
            ]}
          />
        </div>
      </div>
    </header>
  );
}
