import "../style.css";
import myPhoto from "../assets/MagaliLebon_v8.jpg";

export default function AboutPage() {
  return (
    <section id="about">
      <div className="mydescription">
        <h2>Hi,</h2>
        <p id="mystory">
          Software Engineer who approaches code like a challenging climbing
          route: breaking down complex problems into precise, methodical
          solutions. My background in{" "}
          <a href="https://magalilebon.squarespace.com/" target="_blank">
            design
          </a>{" "}
          and full-stack development enables me to see both technical challenges
          and user experiences from multiple angles – just like mapping out a
          difficult sequence on the wall. Whether I'm architecting backend
          systems or crafting pixel-perfect interfaces, I bring the same focus,
          creativity, and analytical mindset that helps me send hard projects on
          the rock.
        </p>
      </div>
      <div className="myphoto">
        <img src={myPhoto} alt="Portrait of Magali Lebon"></img>
      </div>
    </section>
  );
}
