import './Footer.css'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="row">

                    <div className="">

                        <ul className="footer-social">
                            <li>
                                <a href='https://github.com/JornabeDV'>
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/jorge-nahuel-beja-rosa/'>
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-eight tab-full">
                        <div className="copyright">
                            <span>© Copyright 2023</span>
                            <span>Design by <a href="#about">Jorge Nahuel Beja Rosa</a></span>
                        </div>
                    </div>

                    <div id="go-top">
                        <a class="smoothscroll" title="Back to Top" href="#top">
                            <FaLongArrowAltUp />
                        </a>
                    </div>

                </div>
            </footer>

            <div id="preloader">
                <div id="loader"></div>
            </div>
        </div>
    )
}

export default Footer