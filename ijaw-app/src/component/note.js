import Image from "next/image";
import React from "react";

const Note = () => {
    return (
        <div>
            <section id="note">
                <div className="note-container">
                    <div className="note-column">
                        <h1>
                            Important things <br />
                            to note...
                        </h1>
                    </div>
                    <div className="pricing-column">
                        <i className="fa-solid fa-money-bill-wave" style={{ color: "red" }} />
                        <h4>Pricing</h4>
                        <p>
                            Audition forms are available for ₦1000 for single contestants, and ₦1500
                            for a group of five.
                        </p>
                    </div>
                    <div className="price-column">
                        <i className="fa-solid fa-trophy" style={{ color: "red" }} />
                        <h4>Prices</h4>
                        <ul className="no-bullet">
                            <li>
                                <strong>1st Price:</strong> ₦2,000,000
                            </li>
                            <li>
                                <strong>2nd Price:</strong> ₦1,000,000
                            </li>
                            <li>
                                <strong>3rd Price:</strong> ₦500,000
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Note;