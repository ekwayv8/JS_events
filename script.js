/* 1st functionnality; Let count those clicks*/
let footer = document.getElementsByTagName('footer')[0];

let clicks = 0;

var clickFooter = function() {
  clicks += 1
  console.log(`click number ${clicks} 🦜`)
};

footer.addEventListener('click', clickFooter);

/* 2nd functionnality; Let make that ...... Hamburger Menu*/

console.log("Hamburger menu 🍔: clique sur le bouton menu et le menu apparaîtrera! 🥳");

let menuBtn = document.querySelector('.navbar-toggler');
let menu = document.querySelector('#navbarHeader');
	menuBtn.addEventListener('click', function collapse() {
	menu.classList.toggle("collapse");})

/* 3rd functionnality; Let change the color of the text for the first card*/
console.log("clique sur le bouton Edit de la 1ère card et change à tout jamais la couleur du texte associé à cette dernière 🧟😱");
let editBtn = document.getElementsByClassName('btn-outline-secondary')[0];

var clickEdit = function() {
  let cardText = document.getElementsByClassName('card-text')[0];
  cardText.style.color = 'red';
}

editBtn.addEventListener("click", clickEdit);

/* 4th functionnality; Let do something similar to the prévious functionnality but much more fun*/

console.log("clique sur le bouton Edit de la 2nde card et change la couleur mais de manière réversible🧠💡");

let editBtn2 = document.getElementsByClassName('btn-outline-secondary')[1];


editBtn2.addEventListener('click', function greenText() {
	let cardText2 = document.getElementsByClassName('card-text')[1];
	if (cardText2.style.color == ''){
	  cardText2.style.color = 'green';
	  }
	 else {
	 cardText2.style.color = '';}})