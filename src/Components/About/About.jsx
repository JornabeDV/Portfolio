import "./About.css";
import ImageCV from "../../assets/cvSinFondo.png";

const About = () => {
  return (
    <section id="about">
      <div>
        <h5>ABOUT</h5>
        <h1 className="about-me">Let me introduce myself.</h1>
        <div className="intro-info">
          <img className="img-CV" src={ImageCV} alt="Profile Picture" />
          <p className="lead">
            I am a passionate software developer with a history of successful
            startups and an unwavering dedication to action. My focus on
            challenges and constant search for new experiences has led me to a
            constantly growing career.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="profile">
          <h3>Profile</h3>
          <p>
            Enjoys working as a team and looking for solutions in everyday life.
          </p>
          <ul className="info-list">
            <li>
              <div className="span-div">
                <span>Fullname:</span>
              </div>
              <a>Jorge Nahuel Beja Rosa</a>
            </li>
            <li>
              <div className="span-div">
                <span>Birth Date:</span>
              </div>
              <a>May 25, 1989</a>
            </li>
            <li>
              <div className="span-div">
                <span>Job:</span>
              </div>
              <a>Software Developer</a>
            </li>
            <li>
              <div className="span-div">
                <span>Portfolio:</span>
              </div>
              <a href="https://jornabe-dv-portfolio.netlify.app/">
                Jornabe DV Portfolio
              </a>
            </li>
            <li>
              <div className="span-div">
                <span>Email:</span>
              </div>
              <a>jorgebejarosa@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <p>
            My specialization lies in creating practical and effective solutions
            to real-world problems, using a wide range of development
            technologies.
          </p>
          <ul className="skill-bars">
            <li>
              <div className="progress">
                <span style={{ width: "90%" }} />
              </div>
              <span className="skill-label">HTML5</span>
              <span className="skill-percent">90%</span>
            </li>

            <li>
              <div className="progress">
                <span style={{ width: "90%" }} />
              </div>
              <span className="skill-label">Tailwind</span>
              <span className="skill-percent">90%</span>
            </li>

            <li>
              <div className="progress">
                <span style={{ width: "85%" }} />
              </div>
              <span className="skill-label">JavaScript</span>
              <span className="skill-percent">85%</span>
            </li>

            <li>
              <div className="progress">
                <span style={{ width: "80%" }} />
              </div>
              <span className="skill-label">ReactJS</span>
              <span className="skill-percent">80%</span>
            </li>

            <li>
              <div className="progress">
                <span style={{ width: "70%" }} />
              </div>
              <span className="skill-label">PostgreSQL</span>
              <span className="skill-percent">70%</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="buttons">
        <a href="#contact" title="Hire Me" className="buttonHireMe">
          Hire Me
        </a>
        <a href="#" title="Download CV" className="buttonCv">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default About;
