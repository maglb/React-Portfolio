
export default function ResumePage() {
  return (
    <section id="about">
      <div className="mydescription d-flex flex-column">
        <h2>Resume</h2>

        <div id="mystory" className="col">
          <div className="skills">
            <h4>Skills</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>MySQL</li>
              <li>NodeJS</li>
              <li>ReactJS</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <h4>Education</h4>
          <div>
            <h5>
              <strong>Full-Stack Bootcamp Certification</strong> – April 2024
            </h5>
            <p className="location">
              University of Utah, Salt Lake City, UT, United States
            </p>
          </div>
          <div>
            <h5>
              <strong>Master Degree in Graphic Communication</strong> – June
              2019
            </h5>
            <p className="location">
              Haute école des arts du Rhin, Strasbourg, France
            </p>
          </div>
          <div>
            <h5>
              <strong>Bachelor Degree in Graphic Communication</strong> – June
              2017
            </h5>
            <p className="location">
              Haute école des arts du Rhin, Strasbourg, France
            </p>
          </div>
          <div>
            <h5>
              <strong>Bachelor Degree in Fine Art</strong> – June 2014
            </h5>
            <p className="location">
              National School of Fine Art of Nice, Nice, France
            </p>
          </div>
        </div>
      </div>
      <div className="myphoto d-flex ">
        <img src="../src/assets/resume.jpg" alt=""></img>
      </div>
    </section>
  );
}
