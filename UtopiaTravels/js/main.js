/* Toggle Menu */
var navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/* Show Menu*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Hide Menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove Menu for Mobile Devices */
var navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    var navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/* Header background */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/* Counter Experience */
var a = 0;
$(window).scroll(function() {

  var oTop = $('#experience-section').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.experience__number').each(function() {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    a = 1;
  }
});

/* Video */
var videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('header'),
    videoIcon = document.getElementById('video-icon')

function playPause(){
    if(videoFile.paused){
        videoFile.play()
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    } else{
        videoFile.pause()
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
}

videoButton.addEventListener('click', playPause)

function finalVideo(){
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}

videoButton.addEventListener('ended', finalVideo)

/* scroll up */
function scrollUp(){
    var scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)