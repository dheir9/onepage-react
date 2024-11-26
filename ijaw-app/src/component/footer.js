import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";


const Footer = () => {
    return (
        <div>
            <footer className="ox-blood-bg">
                <div className="centered-footer">
                    <p>We are social</p>
                    <div className="social">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faTwitter} className="fa-brands fa-x-twitter" />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram" />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube" />
                        </a>
                    </div>
                    <hr />
                </div>
                <a href="#" id="arrow-back-to-top">
                    ⇧
                </a>
                <div className="centered-footer">
                    <p className="copy"> © 2024 Imomotimi Foundation. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer;