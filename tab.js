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