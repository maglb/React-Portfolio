import Portfolio from "../components/Portfolio"
import AboutPage from "./AboutPage";
import "../style.css";

export default function PortfolioPage() {
  return (
    <>
      <AboutPage />
      <section id="portfolio">
        <h2>Portfolio</h2>
        <Portfolio />
      </section>
    </>
  );
}
