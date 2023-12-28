let down = document.getElementById("down")

let left = document.getElementById("left")

let cite = document.getElementById("cite")

down.addEventListener("click",function(){
  down.classList.add("hide");
  left.classList.remove("hide");
  cite.classList.add("hide");
})

left.addEventListener("click",function(){
  down.classList.remove("hide");
  left.classList.add("hide");
  cite.classList.remove("hide");
})


