import "../style.css";

export default function Footer() {
  return (
    <footer>
      <div className="icon-container d-flex col justify-content-center">
        <a className="icon" href="https://github.com/maglb" target="_blank">
          <i className="fa fa-github"></i>
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/magali-lebon"
          target="_blank"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
      </div>
    </footer>
  );
}
