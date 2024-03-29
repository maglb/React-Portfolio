import "../style.css";

export default function AboutPage() {
  return (
    <section id="about">
      <div className="mydescription">
        <h2>Hi,</h2>
        <p id="mystory">
          My name is Magali and I’m a graphic designer who’s currently studying
          coding. I have a passion for typography and I enjoy helping brands
          find their unique voice. When I'm not behind a computer solving design
          problems, you can find me outside rock climbing, building my
          problem-solving skills outside of the digital world.
        </p>
      </div>
      <div className="myphoto">
        <img src="../src/assets/myphoto.jpg" alt=""></img>
      </div>
    </section>
  );
}
