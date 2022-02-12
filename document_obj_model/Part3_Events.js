var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");

one.addEventListener("mouseover", function(){
    one.textContent = "Hovering on!";
    one.style.color = 'red';
    //set back by timeout
    setTimeout(function() {
      one.textContent = "Hover Over Me!";
      one.style.color = 'black';
    }, 1000);
})

two.addEventListener("click", function(){
    two.textContent = "Clicked on!";
    two.style.color = 'red';
})

three.addEventListener("dblclick", function(){
    three.textContent = "Double Clicked on!";
    three.style.color = 'red';
})
