import Image from "next/image";
import { React } from "react";
import AliceCarousel from "react-alice-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faMouse, faPhoneVolume, faToggleOn } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div>

            <AliceCarousel autoPlay autoPlayInterval={3000} infinite disableButtonsControls disableSlideInfo disableDotsControls className="carousel owl-carousel owl-theme">
                <div className="bground1" />
                <div className="bground2" />
                <div className="bground3" />
            </AliceCarousel>

            <header className="header-background">
                <div
                    id="navbar"
                    style={{
                        backgroundColor: "rgb(78, 64, 74)",
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        marginLeft: 0,
                        zIndex: 1000,
                        padding: 10
                    }}
                >
                    <a href="#">
                        <Image id="coot" src="/logo.png" alt="my-logo" width={50} height={50} />
                    </a>
                    <nav>
                        <ul>
                            <li>
                                <a href="#intro">Intro</a>
                            </li>
                            <li>
                                <a href="#countdown">Countdown</a>
                            </li>
                            <li>
                                <a href="#note">Notes</a>
                            </li>
                            <li>
                                <a href="#map">Location</a>
                            </li>
                            <li>
                                <a href="#contactus">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="toggle">
                        <FontAwesomeIcon icon={faMoon} className="fa-solid fa-moon" />
                        <button className="toggle" onclick="toggleSwitch()">
                            <FontAwesomeIcon icon={faToggleOn} id="toggle" className="fa-solid fa-toggle-on toggleon" />
                        </button>
                        <FontAwesomeIcon icon={faSun} className="fa-solid fa-sun" />
                    </div>
                    <button id="call">
                        <FontAwesomeIcon icon={faPhoneVolume} className="fa-solid fa-phone-volume" />
                    </button>
                    <div className="lines">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div id="intro">
                    <h6>IMOMOTIMI FOUNDATION PRESENTS</h6>
                    <h2>
                        Imomotimi Ijaw
                        <br /> Dance Contest 2024
                    </h2>
                    <button id="download">
                        Download Entry Form
                        <FontAwesomeIcon icon={faDownload} className="fa-solid fa-download" />
                    </button>
                    <p>
                        All duly filled out forms and the entry fees should be brought along to
                        the audition
                    </p>
                </div>
                <div className="mouse">
                    <FontAwesomeIcon icon={faMouse} className="fa-solid fa-computer-mouse" />
                </div>
                <div>
                    <Image
                        src="/shape-top-white-80.png"
                        alt="" width={1500} height={50}
                        className="top-white"
                        id="tw"
                    />
                </div>
            </header>

        </div>
    )
}

export default Home;