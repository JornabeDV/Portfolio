import './About.css'
import ImageCV from "../../assets/cvSinFondo.png"

const About = () => {
    return (
        <section id="about">

            <div>

                <h5>ABOUT</h5>

                <h1 className='aboutMe'>Let me introduce myself.</h1>

                <div className="intro-info">

                    <img className="img-CV" src={ImageCV} alt="Profile Picture" />

                    <p className="lead">I am a passionate software developer with a history of successful startups and an unwavering dedication to action. My focus on challenges and constant search for new experiences has led me to a constantly growing career.</p>
                </div>

            </div>


            <div className="about-content">

                <div className="profile">

                    <h3>Profile</h3>
                    <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                    <ul className="info-list">
                        <li>
                            <span>Fullname:</span>
                            <a>Jorge Nahuel Beja Rosa</a>
                        </li>
                        <li>
                            <span>Birth Date:</span>
                            <a>May 25, 1989</a>
                        </li>
                        <li>
                            <span>Job:</span>
                            <a>Software Developer</a>
                        </li>
                        <li>
                            <span>Website:</span>
                            <a>www.JorgeBejaRosaDV.com</a>
                        </li>
                        <li>
                            <span>Email:</span>
                            <a>jorgebejarosa@gmail.com</a>
                        </li>

                    </ul>

                </div>

                <div className="skills">

                    <h3>Skills</h3>
                    <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                    <ul className="skill-bars">
                        <li>
                            <div><a>90%</a></div>
                            <span>HTML5</span>
                        </li>
                        <li>
                            <div><a>90%</a></div>
                            <span>Tailwind</span>
                        </li>
                        <li>
                            <div><a>85%</a></div>
                            <span>Javascript</span>
                        </li>
                        <li>
                            <div><a>80%</a></div>
                            <span>ReactJS</span>
                        </li>
                        <li>
                            <div><a>70%</a></div>
                            <span>PostgreSQL</span>
                        </li>

                    </ul>

                </div>

            </div>


            <div className="buttons">
                <a href="#contact" title="Hire Me" className="buttonHireMe">Hire Me</a>
                <a href="#" title="Download CV" className="buttonCv">Download CV</a>
            </div>

        </section>

    )
}

export default About