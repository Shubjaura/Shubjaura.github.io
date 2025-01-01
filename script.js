function sendmail(){
    let params = {
        message : document.getElementById("email_message").value,
        subject: document.getElementById("subject").value,
        sendername: document.getElementById("full_name").value,
        replyto: document.getElementById("email_id").value,
    }
    console.log("Params object:", JSON.stringify(params));
    emailjs.send("service_4j0u6qp", "template_ph9376b", params).then(alert("The Message is sent!"))
}

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Engineer", "Schulich Scholar", "Programming Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Computer Engineering Student", "Schulich Scholar", "Programming Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Contact form handling with EmailJS
// document.querySelector("#contact-form").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     console.log("Form submission started...");

//     emailjs.sendForm("service_4j0u6qp", "template_ph9376b", this)
//         .then(function(response) {
//             console.log("SUCCESS!", response.status, response.text);
//             alert("Message sent successfully!");
//         }, function(error) {
//             console.error("FAILED...", error);
//             alert("Failed to send message. Please try again later.");
//         });
// });