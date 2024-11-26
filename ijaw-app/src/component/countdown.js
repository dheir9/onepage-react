import Image from "next/image";
import React from "react";

const Countdown = () => {

    // Set the date for the audition countdown (replace with your event date)
    const auditionDate = new Date("2024-11-30T00:00:00").getTime();

// Update the countdown every 1 second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = auditionDate - now;

 // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

// Display the result
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

// If the countdown is over, display "Event Started!"
        if (timeLeft < 0) {
            clearInterval(countdown);
            document.getElementById("days").innerHTML = 0;
            document.getElementById("hours").innerHTML = 0;
            document.getElementById("minutes").innerHTML = 0;
            document.getElementById("seconds").innerHTML = 0;
            document.querySelector("#countdown-section h2").innerHTML = "Audition Started!";
        }
    }, 1000);  

  
    return (
        <div>
            <section id="countdown-sect">
                <div className="container" onload="updateCountdown()">
                    <h1 className="countdown-title">Countdown to Audition</h1>
                    <div className="countdown">
                        <div>
                            <span id="days">29</span>
                            <hr />
                            <p>Days</p>
                        </div>
                        <div className="seperator">:</div>
                        <div>
                            <span id="hours">02</span>
                            <hr />
                            <p>Hours</p>
                        </div>
                        <div className="seperator">:</div>
                        <div>
                            <span id="minutes">08</span>
                            <hr />
                            <p>Minutes</p>
                        </div>
                        <div className="seperator">:</div>
                        <div>
                            <span id="seconds">06</span>
                            <hr />
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <Image
                    src="/shape-top-grey-80.png"
                    alt="Shape top white" width={100} height={50}
                    className="header-top-grey"
                    id="htg"
                />
            </section>

        </div>
    )
}

export default Countdown;