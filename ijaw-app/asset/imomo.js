window.onscroll = function() {
        let button = document.getElementById("arrow-back-to-top");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        };
            document.getElementById("arrow-back-to-top").onclick = function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
        function toggleSwitch() {
            const themes = document.getElementById('themeStyle');
            const mytoggle = document.getElementById('toggle');
            const tw = document.getElementById('tw');
            const htg = document.getElementById('htg');

            if (themes.getAttribute('href') === '/light.css') {

                themes.setAttribute('href', '/dark.css');
                mytoggle.className='fa-solid fa-toggle-on toggleon';
                tw.src='image2/shape-top-black-80.png';
                htg.src='image2/shape-top-dark-grey-80.png'
            } else {
                themes.setAttribute('href', '/light.css');
                mytoggle.className='fa-solid fa-toggle-on toggleon';
                tw.src='images/shape-top-white-80.png';
                htg.src='images/shape-top-grey-80.png'
            }

        }

        // Put this at the end of your JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown(); // Start the countdown immediately
   
    // Update the target date in the countdown function
    function updateCountdown() {
        // Set your target date here
        const targetDate = new Date('2024-12-31 00:00:00').getTime();
       
        function update() {
            const currentDate = new Date().getTime();
            const difference = targetDate - currentDate;

            // Calculate time unit. days, hours, minute and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Update the display
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            // Check if countdown is finished
            if (difference <= 0) {
                clearInterval(timer);
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
        }

        // Update immediately and then every second
        update();
        const timer = setInterval(update, 1000);
        }
        });



         
    $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                // nav:true,
                autoplay:true,
                responsive:{
            
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
        });

    

        // var countDownDate = new Date("Oct 31, 2024 23:59:59").getTime();    
        //     var x = setInterval(function() {
        //     var now = Date().getTime();
        //     var distance = countDownDate - now;

        //     var Days = math.floor(distance/ (1000 * 60 * 60 * 24));
        //     var Hours = math.floor(distance % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
        //     var Minutes = math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        //     var Seconds = math.floor(distance % (1000 * 60) / (1000));

        //     document.getElementById("countdown").innerHTML = Days + ":" + Hours + ":" + Minutes + ":" + Seconds;

        //     if (distance <= 0) {
        //         clearInterval(x);
        //         document.getElementById("countdown").innerHTML = "TIME-UP"
        //     }
        // }, 1000);



        // var countDownDate = new Date("Oct 31, 2024 23:59:59").getTime();
        // var x = setInterval(function() {
        // var now = new Date().getTime();
        // var distance = countDownDate - now;

        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // document.getElementById("days").innerHTML = days + ":";
        // document.getElementById("hours").innerHTML = hours + ":";
        // document.getElementById("minutes").innerHTML = minutes + ":";
        // document.getElementById("seconds").innerHTML = seconds;

        // if (distance <= 0) {
        //     clearInterval(x);
        //     document.getElementById("countdown-sect").innerHTML = "TIME-UP";
        // }
        // }, 1000);