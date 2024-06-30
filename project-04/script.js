
const itemContainer = document.querySelector(".item-container");
let inp = document.querySelector(".inp")
const btn = document.querySelector(".btn")


const handlebtn = () => {
    let data = document.querySelector(".inp").value;
    if(data === "" || data === ' '){
        alert("please enter something first");
        return;
    }
    const div = document.createElement("div");
    div.classList.add("item")
    const li = document.createElement('li')
    li.innerHTML = data;
    const btn =document.createElement('button')
    btn.classList.add("del")
    btn.innerHTML="delet"
    div.appendChild(li)
    div.appendChild(btn)
    itemContainer.appendChild(div);
    document.querySelector(".inp").value="";
    document.querySelector(".message").style.display="none"
}

const handleDelBtn = (e) =>{
     if(e.target.classList[0] === 'del'){
        e.target.parentElement.remove();
     }
}

const handlebtn2 = (e) =>{
   if(e.key === "Enter"){
    handlebtn();
   }
}

btn.addEventListener("click",handlebtn);
inp.addEventListener("keypress",handlebtn2);
itemContainer.addEventListener("click",handleDelBtn);

