

//get the square element
//add event listener to the square, makes square listen for click
//write function that will add animation class

var crossbar = document.getElementById('middlen');
console.log(crossbar);
crossbar.addEventListener("mouseover", SquareAnimation);
function SquareAnimation() {
  //adding animation class to square
  crossbar.classList.add("animation");
}
crossbar.addEventListener("mouseup", RemoveAddClass);
function RemoveAddClass() {
  setTimeout(RemoveAnimation, 1000);

}
function RemoveAnimation (){
  crossbar.classList.remove("animation");
}

var can = document.getElementById('topc');
console.log(can);
can.addEventListener("mouseover", Canimation);
function Canimation() {
   can.classList.add("canimation");
}
can.addEventListener("mouseup", RemoveAddClass);
function RemoveAddClass () {
  setTimeout(RemoveAnimation, 1000);

}
function RemoveAnimation() {
  can.classList.remove("canimation");
}

var hanimation = document.getElementById('middleh');
console.log(hanimation);
hanimation.addEventListener("mouseover",Jump)
function Jump() {
  hanimation.classList.add("banimation");

}
hanimation.addEventListener("mouseup", RemoveAddClass)
function RemoveAddClass () {
  setTimeout(RemoveAnimation, 1000);
}
function RemoveAnimation() {
  hanimation.classList.remove("banimation");
}
