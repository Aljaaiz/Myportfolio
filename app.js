// Button function to show or hide Menu
let menuBtn = document.querySelector('.menu-btn');
let mobileMenu = document.querySelector('.mobile-menu');
    menuBtn.addEventListener('click',function(){
    mobileMenu.classList.toggle('active');
    mobileMenu.style.display = 'block'
})


// WayPoint effect
$('#about-me').waypoint(function (direction) {
    if (direction == "down") {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }

}, {
    offset: '100vh;'
});
