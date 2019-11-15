//Rate this Brew button that opens a hidden form on the same screen
//Just need a way to exit the form without hitting submit
function rateReview() {
	document.getElementById('rate-wrapper').style.visibility = 'visible';
	document.getElementById('recipe-main').style.opacity = '0.3';
	document.getElementById('recipe-wrapper').style.opacity = '0.3';
	document.getElementById('user-comments').style.opacity = '0.3';
}
let rateBut = document.getElementById('rateBrew');
rateBut.addEventListener('click', rateReview);





//Print function - removes everything but Instructions and Recipe
//Home button is then added back to the page to navigate back to the home page
function printList() {
	document.getElementById('recipe-main').innerHTML = '';
	document.getElementById('print').innerHTML = '';
	document.getElementById('user-comments').innerHTML = '';
	document.getElementById('recipe-wrapper').style.bottom = '10vh';
	window.print();
	document.getElementById('recipe-main').innerHTML = `
		<a href="brew-recipes.html"><button id="brew-home" style="
		width:100vw;height:10vh;font-size:1.5em;">Home</button></a>
	`;
}
let printBut = document.getElementById('print');
printBut.addEventListener('click', printList);


