// start modal 

let modal = document.getElementById("modal")
let showModal = document.getElementById("showModal")
let closeModal = document.querySelector("#close")

showModal.onclick = function(){

    modal.style.display = "flex" 
}

closeModal.onclick = function(){

    modal.style.display = "none"
}

// start header scroll
window.onscroll = function() {
    var header = document.getElementById("header");
    var navbar = document.getElementById("navbar");
    let upbtn = document.querySelector(".up")


    if (window.pageYOffset > 150) {
        navbar.classList.add("fixed");
        upbtn.classList.add("upactive")
    } else {
        navbar.classList.remove("fixed");
        upbtn.classList.remove("upactive")
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

// end header scroll




// window.onclick = function(event){

//     let ti = event.target 
//     console.log(ti)
// }


// burchakdagi to'rtburchak tugmaniki qotib turgan


// owl carausel 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})





