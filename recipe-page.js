



//Print function - removes everything but Instructions and Recipe
//Home button is then added back to the page to navigate back to the home page
function printList() {
	document.getElementById('recipe-main').innerHTML = '';
	document.getElementById('print').innerHTML = '';
	document.getElementById('user-comments').innerHTML = '';
	window.print();
	document.getElementById('recipe-main').innerHTML = `
		<a href="brew-recipes.html"><button id="brew-home">Home</button></a>
	`;
}
let printBut = document.getElementById('print');
printBut.addEventListener('click', printList);


