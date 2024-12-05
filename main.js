window.onscroll = function() {
    var header = document.getElementById("header");
    var navbar = document.getElementById("navbar");

    if (window.pageYOffset > 150) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
};

document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', function() {
        // Barcha label'larni olib tashlash
        document.querySelectorAll('.btns label').forEach(label => {
            label.classList.remove('selected');
        });

        // Tanlangan inputga mos label'ni tanlash
        const associatedLabel = document.querySelector(`label[for="${this.id}"]`);
        if (associatedLabel) {
            associatedLabel.classList.add('selected');
        }
    });
});

// Birinchi input tanlangan holatda bo'lishi uchun
document.querySelector('input[type="radio"]:checked').dispatchEvent(new Event('change'));