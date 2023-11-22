import './Footer.css'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { useState,useEffect } from 'react';


const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 200) { 
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

                    <div id="go-top" style={{ display: showScroll ? 'block' : 'none' }}>
                        <a className="smoothscroll" title="Back to Top" onClick={scrollToTop} href="#top">
                            <FaLongArrowAltUp />
                        </a>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer