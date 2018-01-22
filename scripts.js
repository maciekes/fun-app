function playSound(e) {

var cat = document.querySelector(".cat");
var cow = document.querySelector(".cow");
var dog = document.querySelector(".dog");
var elephant = document.querySelector(".elephant");
var lion = document.querySelector(".lion");
var owl = document.querySelector(".owl");
var pig = document.querySelector(".pig");

var catAudio = new Audio("sounds/cat.mp3"); 
var cowAudio = new Audio("sounds/cow.mp3"); 
var dogAudio = new Audio("sounds/dog.mp3"); 
var elephantAudio = new Audio("sounds/elephant.mp3"); 
var lionAudio = new Audio("sounds/lion.mp3"); 
var owlAudio = new Audio("sounds/owl.mp3"); 
var pigAudio = new Audio("sounds/pig.mp3"); 



cat.addEventListener("click", function() {
	catAudio.play();
	this.classList.add("playing");
}, false);

cat.addEventListener("transitionend", function() {
	catAudio.play();
	this.classList.remove("playing");
}, false);


cow.addEventListener("click", function() {
	cowAudio.play();
	this.classList.add("playing");
}, false);

cow.addEventListener("transitionend", function() {
	this.classList.remove("playing");
}, false);

dog.addEventListener("click", function() {
	dogAudio.play();
	this.classList.add("playing");
}, false);

dog.addEventListener("transitionend", function() {
	this.classList.remove("playing");
}, false);

elephant.addEventListener("click", function() {
	elephantAudio.play();
	this.classList.add("playing");
}, false);

elephant.addEventListener("transitionend", function() {
	this.classList.remove("playing");
}, false);

lion.addEventListener("click", function() {
	lionAudio.play();
	this.classList.add("playing");
}, false);

lion.addEventListener("transitionend", function() {
	this.classList.remove("playing");
}, false);

owl.addEventListener("click", function() {
	owlAudio.play();
	this.classList.add("playing");
}, false);

owl.addEventListener("transitionend", function() {
	this.classList.remove("playing");
}, false);

pig.addEventListener("click", function() {
	pigAudio.play();
	this.classList.add("playing");
}, false);

pig.addEventListener("transitionend", function() {
	this.classList.remove("playing");
}, false);

};

window.addEventListener("click", playSound, false);

