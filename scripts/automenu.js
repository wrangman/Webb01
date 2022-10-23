
const header = document.querySelector("header");
const navBackground = document.querySelector(".navBackground");
const containerOptions = {};

const containerObserver = new IntersectionObserver(function(
    entries, 
    containerObserver
) { 
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("scrolled");
        }
    })

}, containerOptions);

containerObserver.observe(navHeader);