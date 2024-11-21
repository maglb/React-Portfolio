import "../style.css";
import myPhoto from "../assets/myphoto.jpg";

export default function AboutPage() {
  return (
    <section id="about">
      <div className="mydescription">
        <h2>Hi,</h2>
        <p id="mystory">
          With my formal training as a full-stack software engineer and my
          background in graphic design, I bring a unique blend of creativity and
          technical expertise to my work. I excel at crafting
          user-centered digital experiences that seamlessly integrate aesthetics
          and functionality, ensuring that every application not only performs
          well but also delights users. <br></br>
          <br></br>
          Outside of coding, I enjoy{" "}
          <a href="https://magalilebon.squarespace.com/" target="_blank">
            graphic design
          </a> and rock climbing.
        </p>
      </div>
      <div className="myphoto">
        <img src={myPhoto} alt="Portrait of Magali Lebon"></img>
      </div>
    </section>
  );
}
