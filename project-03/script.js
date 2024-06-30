
// const menu = document.querySelector(".menu");
// const x = document.querySelector(".x");

// console.log(menu)
// const navItems = document.querySelector(".navItems")
// console.log(navItems)

// menu.addEventListener('click',myfunction1);
// x.addEventListener('click',myfunction2);

// function myfunction1() {
//     menu.style.display="none"
//     x.style.display="block"  
//     navItems.style.display = "block"
// }
// function myfunction2() {
//     x.style.display="none"
//     menu.style.display="block"
//    navItems.style.display = "none";  
// }


//another way
const menu = document.querySelector(".menu");
menu.addEventListener('click',myfunction1);

function myfunction1(){
    console.log("clicked")
    var element = document.getElementById("mydiv");
    element.classList.toggle("mystyle");
}