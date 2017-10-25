/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
    'particles-js',
    'assets/particles.json',
    function () {
        console.log('callback - particles.js config loaded');
    }
);

Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };
        window.addEventListener('scroll', f);
    }
});

var app = new Vue({
     delimiters: ['${', '}'],
     el: '#app',
     data: {
         scrolledPast100: false,
         mobileNavOpen: false,
         subNavOpen: false,
         footerVisible: false,
         lastScrollTop: 0,
         scrollTop: 0,
         scrollingDown: false,
         navOpen: false,
         hideHeadNav: false,
         hideSubNav: false,
         headerBG: false,
         folioHover: false,
         homeAudioVisible: false,
         vid: ''
     },
     methods: {
         appScroll: function(evt, el) {
             this.folioHover = false;
             this.subNavOpen = false;
             this.scrolledPast100 = window.scrollY > 100;

             this.scrollTop = window.pageYOffset;

             if (this.scrollTop > this.lastScrollTop) {
                this.scrollingDown = true;
             } else {
                 this.scrollingDown = false;
             };

             if (this.scrollingDown) {
                 this.hideHeadNav = true;
                 this.hideSubNav = true;
             } else {
                 if (this.lastScrollTop - 20 > this.scrollTop) {
                     this.hideHeadNav = false;
                     this.hideSubNav = false;
                 };
             };

             if (!this.scrolledPast100) {
                 this.hideHeadNav = false;
                 this.hideSubNav = false;
             };

             if (this.scrolledPast100) {
                 if (!this.scrollingDown){
                     this.headerBG = true;
                 };
                 if (this.footerVisible) {
                     this.headerBG = true;
                 };
             } else {
                 this.headerBG = false;
             };

             this.lastScrollTop = this.scrollTop;
         },
         headNavHover: function () {
            this.hideHeadNav = false;
         },
         subNavHover: function () {
             this.hideSubNav = false;
         },
         toggleNav: function () {
            this.navOpen = !this.navOpen;
         },
         toggleMobileNav: function() {
             this.mobileNavOpen = !this.mobileNavOpen;
         },
         toggleSubNav: function() {
             this.subNavOpen = !this.subNavOpen;
         },
         footerVisibility: function (footerVisible) {
             this.footerVisible = footerVisible;
             this.hideHeadNav = false;
             this.hideSubNav = false;
         },
         homeAudioPlayer: function (homeAudioVisible) {
             this.homeAudioVisible = homeAudioVisible;
             this.vid = document.getElementById("homeAudioPlayer");

            /*if (this.homeAudioVisible) {
                this.vid.play();
            } else {
                this.vid.pause();
            };*/
         },
         folioLinkHover: function () {
             this.folioHover = !this.folioHover;
         }
     }
 });

/*$(function() {
    // init controller
    var controller = new ScrollMagic.Controller();*/

    /*var tween = TweenMax.to('#pin-this', 0.5, {
        opacity: 0
    });*/

    // create a scene
   /* new ScrollMagic.Scene({
        triggerElement: '#trigger-element',
        offset: -100
    })
        .setTween('#pin-this', 0.5, {
            opacity: 0
        })
        .addIndicators({name: "something"})
        .addTo(controller); // assign the scene to the controller
});*/