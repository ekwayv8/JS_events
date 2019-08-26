/* 1st functionnality; Let count those clicks*/
let footer = document.getElementsByTagName('footer')[0];

let clicks = 0;

var clickFooter = function() {
  clicks += 1
  console.log(`click number ${clicks} 🦜`)
};

footer.addEventListener('click', clickFooter);

/* 2nd functionnality; Let make that ...... Hamburger Menu*/

console.log("Hamburger menu 🍔: clique sur le bouton menu et le menu apparaîtrera! 🥳")


let menuBtn = document.querySelector('.navbar-toggler');
let menu = document.querySelector('#navbarHeader');
	menuBtn.addEventListener('click', function collapse() {
	menu.classList.toggle("collapse");})
