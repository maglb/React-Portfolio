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
              <a
                className="icon"
                href="https://github.com/maglb"
                target="_blank"
              >
                <i className="fa fa-github"></i>
              </a>,
              <a
                className="icon"
                href="https://www.linkedin.com/in/magali-lebon"
                target="_blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>,
            ]}
          />
        </div>
      </div>
    </header>
  );
}
