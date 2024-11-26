import Image from "next/image";
import React from "react";

const Location = () => {
    return (
        <div>
            <section id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46556763.2466532!2d-109.03524918566598!3d15.508713087004672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1729533551467!5m2!1sen!2sus"
                    width={600}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <Image
                    src="/shape-top-grey-80.png"
                    alt="Shape top white" width={1000} height={500}
                    className="map-top-grey"
                />
            </section>

        </div>
    )
}

export default Location;