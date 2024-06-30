
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  let colorbox = document.querySelector('.app');
  let btn = document.querySelector('.btn');
  
  btn.addEventListener("keypress" ,function1);
  btn.addEventListener("mouseover" ,function1);
  btn.addEventListener("click" ,function1);
  
   function function1(){
    console.log("hi");
    let color = getRandomColor();
    colorbox.style.backgroundColor = color;
  }
