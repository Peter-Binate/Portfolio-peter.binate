
window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({
        duration: 1.2,
        opacity: 0,
    });

    // ANIMATION
    //ABOUT-ME
    const TimeLine01 = gsap.timeline({
        scrollTrigger: {
            trigger: "#presentation",
            start: "top center",
        },
    });
    //const centerSectionTitle = document.querySelectorAll('.title-center');
    TimeLine01.from("#profil-image",{ x: -150 });
    TimeLine01.from(".about-content-text",{ x: 150 }, "-=1");

    // SKILLS
    const TimeLine02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#skills",
            start: "top center",
        },
    });
    
    TimeLine02.from("#skills-title",{ y: -50 });
    TimeLine02.from(".skill-title",{ y: -50 }, "-=1");
    TimeLine02.from(".skill-container",{ opacity: 0 }, "-=1");
    TimeLine02.to(".skill-container", 1, {opacity: 0, ease: "power2.out"}, 0.3);

    // PROJECTS
    /* const TimeLine03 = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top center",
        },
    });
    
    TimeLine03.from("#projects-title",{ y: -50 });
    TimeLine03.from(".swiper-slide ",{ y: -150 }, "-=1.2");*/
    
    // CONTACT
    const TimeLine04 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-container",
            start: "center bottom",
        },
    });
    
    TimeLine04.from(".image-box",{ x: -150 });
    TimeLine04.from("#form",{ x: 150 }, "-=1.5");

    //FOOTER
    const footerContent = document.querySelectorAll(".footer-container");
    const TimeLine05 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-infos-container",
            start: "bottom bottom",
        },
    });
    
    TimeLine05.from(footerContent,{ y: 50 });
    TimeLine05.from("#copyright",{ y: 50 }, "-=1");
})


/*const titre = document.querySelectorAll('');*/

/* const input = document.querySelectorAll('.input-anim');
 const messageBox = document.querySelector('.message-anim');
 //message d'erreur
 const validation = document.querySelector('.input-box span'); 

 // Dès qu'on va remplir l'input
 input.forEach((function (input) {
    input.addEventListener('input', function (event) {

        console.log(event.target.value);
        // Empêche le label et la value de l'input de se superposer 
        if (event.target.value !== "") {
            event.target.parentNode.classList.add('active-input');
        } else if (event.target.value === "") {
            event.target.parentNode.classList.remove('active-input');
        }

        //Si l'input est remplie de manière incorrect
        if (event.target.value.includes('$')) {
            input.classList.add('erreur');
            validation.classList.add('visible');
        } else {
            input.classList.remove('erreur');
            validation.classList.remove('visible');
        }
    })  
}))

 // Dès qu'on va remplir le textarea
messageBox.addEventListener('input', function (event) {
        // Empêche le label et la value de l'input de se superposer 
        if (event.target.value !== "") {
            event.target.parentNode.classList.add('active-input');
        } else if (event.target.value === "") {
            event.target.parentNode.classList.remove('active-input');
        }
    })  */