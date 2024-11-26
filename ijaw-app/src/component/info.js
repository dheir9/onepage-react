import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faInfo, faPencil, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Information = () => {
    return (
        <div>
            <section id="info">
                <div className="info_container">
                    <div className="info_details">
                        <h2>For More Information:</h2>
                        <p>
                            <strong>Hotlines:</strong> 07035973706 &amp; 08108112759
                        </p>
                        <p>
                            <strong>Email:</strong> info@ijawdancecontest.ng
                        </p>
                        <p>
                            <strong>Audition Location:</strong>Nitro Studio, Tamara Hall,
                            <br />
                            Otiotio Road Yenegoa, Bayelsa State.
                        </p>
                    </div>
                    <form id="fm">
                        <div className="inline-fields">
                            <div className="input-group">
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faUser} className="fa-regular fa-user" />
                                    <input
                                        className="name"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faPhone} className="fa-solid fa-phone" />
                                    <input
                                        className="phone"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faEnvelope} className="fa-regular fa-envelope" />
                                    <input
                                        className="email"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="input-with-icon">
                                    <FontAwesomeIcon icon={faInfo} className="fa-solid fa-info" />
                                    <input
                                        className="subject"
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="textarea-wrapper">
                            <FontAwesomeIcon icon={faPencil} className="fa-solid fa-pencil" />
                            <div
                                className="full-width"
                                id="message"
                                name="message"
                                placeholder="How can we help you? Feel free to get in touch!"
                            />
                            <input className="sbutton" type="submit" defaultValue="Get In Touch" />
                        </div>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Information;