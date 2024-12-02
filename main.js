window.onscroll = function() {
    var header = document.getElementById("header");
    var navbar = document.getElementById("navbar");

    if (window.pageYOffset > 150) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};