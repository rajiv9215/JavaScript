
let name = prompt("enter your name ");
if(name === null){
    name = "buddy"
}

let messageText = document.querySelector('#message-text');
messageText.innerHTML = `Hi ,Welcome ${name}`;
let btn = document.querySelector(".btn");
let app = document.querySelector(".app")
console.log(btn)
console.log(app)
const theNumber = Math.trunc(Math.random()*20);
console.log(theNumber)

btn.addEventListener('click' ,myfunction);
let count = 0;
function myfunction(){
    const color = '#2FB603';
    let userNum = Number(document.querySelector("input").value);
  if(userNum === theNumber){
    console.log("correct")
    messageText.innerHTML = `correct number : you score ${20-count}`;
    app.style.backgroundColor = color;

  }else if(userNum > theNumber ){
    console.log("you guessed a bigger Number")
     messageText.innerHTML = "you guessed a bigger Number"
  }else{
    console.log("you guessed a smaller Number")
     messageText.innerHTML = "you guessed a smaller Number"
  }
  count++;
}