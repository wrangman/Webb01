
const header = document.querySelector("header");
const navBackground = document.querySelector("nav");
const containerOptions = {};

const containerObserver = new IntersectionObserver(function(
    entries, 
    appearOnScroll
) { 
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            
            header.classList.add("scrolled");
            appearOnScroll.unobserve(entry.target);
        }
    })

}, containerOptions);

containerObserver.observe(navHeader);