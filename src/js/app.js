// Select the DOM elements

var menuTrigger = document.querySelector('.menu-toggle');
var menuHide = document.querySelector('#prime-menu');
const items = document.querySelectorAll('.timeline-item');

menuTrigger.addEventListener('click', function(event) {
    menuHide.classList.toggle('show')
    this.classList.toggle('close');
    console.log('click');
});

// Animate the Timeline

const isInViewport = function(el) {
    const rect = el.getBoundingClientRect();

    return (

        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const run = function() {
    items.forEach(function(item) {
        if(isInViewport(item)) {
            item.classList.add('show');
            console.log('run');
        }
    });


    // Events get Fired

   
}

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);


