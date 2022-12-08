const mainPart = document.querySelector('main');
const navHeader = document.querySelector('header');

// define the options for the observer
const containerOptions = {
  // add custom options here
};

// create the intersection observer
const containerObserver = new IntersectionObserver(function(entries) {
  // loop through the entries
  entries.forEach(entry => {
    // check if the element is intersecting with the viewport
    if (!entry.isIntersecting) {
     
      console.log("! scrolled");
    

      // add the "scrolled" class to the navHeader element
      navHeader.classList.add('scrolled');
    } else {
      // remove the "sticky" position from the navHeader element
 
      console.log("not scrolled");


      // remove the "scrolled" class from the navHeader element
      navHeader.classList.remove('scrolled');
    }
  });
}, containerOptions);

// start observing the mainPart element
containerObserver.observe(mainPart);