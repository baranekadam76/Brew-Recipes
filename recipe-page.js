//Rate this Brew button that opens a hidden form on the same screen
function rateReview() {
	document.getElementById('rate-wrapper').style.visibility = 'visible';
	document.getElementById('recipe-main').style.opacity = '0.3';
	document.getElementById('recipe-wrapper').style.opacity = '0.3';
	document.getElementById('user-comments').style.opacity = '0.3';
}
let rateBut = document.getElementById('rateBrew');
rateBut.addEventListener('click', rateReview);

//Submit and Close buttons - Submit button downloads a CSV with the form data
function exitReview() {
	document.getElementById('rate-wrapper').style.visibility = 'hidden';
	document.getElementById('recipe-main').style.opacity = '1';
	document.getElementById('recipe-wrapper').style.opacity = '1';
	document.getElementById('user-comments').style.opacity = '1';
}
let exitBut = document.getElementById('exitBrew');
exitBut.addEventListener('click', exitReview);

function submitReview() {
	let userName = document.getElementById('user-name').value;
	let userRating = document.getElementById('rating1').value;
	let userComments = document.getElementById('comments').value;
	let brewName = document.getElementById('recipe-title').innerHTML;

	if (userRating >= 0 && userRating <= 10) {
		let csv = `Username,Brew,Rating,Comments
		${userName},${brewName},${userRating},${userComments}`;
		let data = new Blob([csv]);
		let submitForm = document.getElementById('x');
		submitForm.href = URL.createObjectURL(data);

		exitReview();
		document.getElementById('rateBrew').style.visibility = 'hidden';
	}
	else {
		document.getElementById('rateError').innerHTML = 'Please add a rating between 0 and 10!';
		document.getElementById('rating1').innerHTML = '';
	}
	
}
let submitForm2 = document.getElementById('x');
submitForm2.addEventListener('click', submitReview);
let ratingClear = document.getElementById('rating1');
ratingClear.addEventListener('click', ()=>{document.getElementById('rateError').innerHTML = '';
document.getElementById('rating1').value = '';})





//Print function - removes everything but Instructions and Recipe
//Home button is then added back to the page to navigate back to the home page
let goHome = document.getElementById('brew-home');
goHome.addEventListener('click', () => window.location = 'brew-recipes.html');
let x1 = document.getElementById('recipe-main'), x2 = document.getElementById('print'), x3 = document.getElementById('user-comments');

function printList() {
	x1.innerHTML = ''; x2.innerHTML = ''; x3.innerHTML = '';
	document.getElementById('recipe-wrapper').style.bottom = '5vh';
	document.getElementById('recipe-left').style.height = 'auto';
	document.getElementById('recipe-right').style.boxShadow = 'none';
	document.getElementById('recipe-right').style.border = 'none';
	window.print();
	document.getElementById('recipe-main').innerHTML = `
		<button id="brew-home" style="width:100vw;height:10vh;font-size:1.5em;">Home</button>
	`;
	let goHome = document.getElementById('brew-home');
	goHome.addEventListener('click', () => window.location = 'brew-recipes.html');
}
let printBut = document.getElementById('print');
printBut.addEventListener('click', printList);



