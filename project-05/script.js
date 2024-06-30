const card = document.getElementsByClassName("card")
const btn = document.getElementsByClassName("btn")
for(var i = 0; i < card.length; i++){
    btn[i].addEventListener("click",myfunction1)
}

function myfunction1(){
    console.log("first btn clicked")
}


