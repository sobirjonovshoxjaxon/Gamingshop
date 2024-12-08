// start header scroll
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

// end header scroll

// start tab

let btn 
let text 


window.onload = function(){


    btn = document.querySelectorAll("#tab .btn")
    text = document.querySelectorAll("#tab .tab-text")

    texthidden()

    text[0].classList.add("show")
    text[0].classList.remove("hide")
    btn[0].classList.add("active")
}


function texthidden(){

    for(let i=0; i<btn.length; i++){

        btn[i].classList.remove("active")
        text[i].classList.add("hide")
    }
}

document.getElementById("tab").onclick=function(e){

    let t = e.target 
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

