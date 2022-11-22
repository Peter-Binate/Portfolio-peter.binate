
window.addEventListener('load', () => {
    /*
    NAVBAR  
    Faire apparaitre le background au scroll*/
    const navBackground = document.querySelector('.nav-container');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    let lastScroll = 0;

    if (mediaQuery.matches) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset
        
            if(currentScroll > 0){
                navBackground.classList.add("nav-background");
            } else{
                navBackground.classList.remove("nav-background");
            }
        
            lastScroll = currentScroll;
            console.log(currentScroll);
        })
    }

    /*
    Navbar pour Format tablette et smartphone:
    Lorsque je clique sur le menu burger*/
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    } 

    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }
})