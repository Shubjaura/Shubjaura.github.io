function areAllVarsPopulated(var1, var2, var3, var4) {
    return [var1, var2, var3, var4].every(value => value !== null && value !== '');
}

function isValidEmail(email) {
    return email.includes('@');
}

function sendmail() {
    let params = {
        message: document.getElementById("email_message").value,
        subject: document.getElementById("subject").value,
        sendername: document.getElementById("full_name").value,
        replyto: document.getElementById("email_id").value,
    };

    const { message, subject, sendername, replyto } = params;

    if (areAllVarsPopulated(message, subject, sendername, replyto)) {
        if (isValidEmail(replyto)) {
            console.log("Params object:", JSON.stringify(params));
            emailjs.send("service_4j0u6qp", "template_ph9376b", params)
                .then(() => alert("The Message is sent!"))
                .catch(error => console.error("Failed to send email:", error));
        } else {
            alert("Please enter a valid email address containing '@'.");
        }
    } else {
        alert("Please fill in all required fields.");
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        // Sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button smooth scroll
    $('.scroll-up-btn').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 300, "linear");
    });

    $('.navbar .menu li a').click(function (event) {
        event.preventDefault();
        const targetId = $(this).attr("href");
        $("html, body").animate(
            { scrollTop: $(targetId).offset().top },
            300, // Duration in ms
            "easeInOutCubic" // Use linear for consistent speed or easeInOutCubic for smooth effect
        );
    });
    

    // Highlight active navbar link on scroll
    const sections = $("section");
    const navLinks = $(".navbar .menu li a");

    function highlightNavbar() {
        let scrollPosition = $(document).scrollTop() + 100;
        sections.each(function () {
            const top = $(this).offset().top;
            const height = $(this).outerHeight();
            const id = $(this).attr("id");

            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.removeClass("active");
                $('.navbar .menu li a[href="#' + id + '"]').addClass("active");
            }
        });
    }

    $(window).on("scroll", highlightNavbar);
    highlightNavbar();

    // Typing text animation
    new Typed(".typing", {
        strings: ["Computer Engineer", "Schulich Scholar", "Programming Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["Computer Engineering Student", "Schulich Scholar", "Programming Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });
});
