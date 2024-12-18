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

// start tab

let btn 
let text 

function texthidden(){

    for(let i=0; i<btn.length; i++){

        btn[i].classList.remove("active")
        text[i].classList.add("hide")
    }
}


window.onload = function(){


    btn = document.querySelectorAll("#tab .btn")
    text = document.querySelectorAll("#tab .tab-text")

    texthidden()
    text[0].classList.add("show")
    text[0].classList.remove("hide")
    btn[0].classList.add("active")
}



document.getElementById("tab").onclick =  function(event){

    let t = event.target 
    console.log(t)

    for(let i=0; i<btn.length; i++){

       if(btn[i] == t){

            texthidden()

            btn[i].classList.add("active")
            text[i].classList.add("show")
            text[i].classList.remove("hide")
        
       }else{

        text[i].classList.remove("show")
       }
    }
}

// end tab


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


window.onclick = function(event){

    let ti = event.target 
    console.log(ti)
}


// burchakdagi to'rtburchak tugmaniki qotib turgan





