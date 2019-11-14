//Variables for rating and review storage
let brewRatings = {
	beer1: [9,4,6,7,7],
	beer2: [5,6,3,5,8,1,9,5],
	cider1: [1,5,8,6,4,8,7,2,2,6],
	cider2: [8,10,9,6,4,10,8,2,6,10]
};
let finalRatings = {
	beer1: brewRatings.beer1.reduce((tot, num)=>tot+num) / brewRatings.beer1.length,
	beer2: brewRatings.beer2.reduce((tot, num)=>tot+num) / brewRatings.beer2.length,
	cider1: brewRatings.cider1.reduce((tot, num)=>tot+num) / brewRatings.cider1.length,
	cider2: brewRatings.cider2.reduce((tot, num)=>tot+num) / brewRatings.cider2.length
};
let userReviews = {
	beer1: [],
	beer2: [],
	beer3: [],
	beer4: [],
	cider1: []
};

//Constructor function + object variables created from it - beer and cider objects
function Brewbuilder(name, style, abv, rating) {
	this.brewName = name;
	this.brewStyle = style;
	this.brewABV = abv;
	this.brewRating = rating;
}
let beerLink1 = new Brewbuilder('Gluten Free Beer #1', 'Pale Ale', '4.8%', finalRatings.beer1);
let beerLink2 = new Brewbuilder('Gluten Free Beer #2', 'IPA', '5.5%', finalRatings.beer2);
let ciderLink1 = new Brewbuilder('Cider #1', 'Dry', '5%', finalRatings.cider1);
let ciderLink2 = new Brewbuilder('Cider #2', 'Very-Sweet', '5.7%', finalRatings.cider2);

//Variables for beer and cider object storage
let beerBrews = [beerLink1, beerLink2];
let ciderBrews = [ciderLink1, ciderLink2];





//Internal site navigation links
let recommendLink = document.getElementById('recommend');
recommendLink.addEventListener('click', () => window.location='recommend.html');

let statsLink = document.getElementById('stats');
statsLink.addEventListener('click', () => window.location='brew-stats.html');

let beerLink = document.getElementById('beer');
beerLink.addEventListener('click', beerRecipes);

let ciderLink = document.getElementById('cider');
ciderLink.addEventListener('click', ciderRecipes);





//Beer and Cider buttons for links to the recipes
function beerRecipes() {
	document.getElementById('main-content').innerHTML = '';

	for (let i = 0; i < beerBrews.length; i++) {
		document.getElementById('main-content').innerHTML += `
		<div class="beer-links-header">
			<div id="${'beer-links-' + (i + 1)}">${beerBrews[i].brewName}</div>
			<div>${beerBrews[i].brewStyle}</div>
			<div>${beerBrews[i].brewABV}</div>
			<div>${beerBrews[i].brewRating}</div>
		</div>
		`;
	}

	//Beer Links to navigate to recipe page for each beer
	let beerLinks1 = document.getElementById('beer-links-1');
	beerLinks1.addEventListener('click', () => window.location='test-recipe.html');
	let beerLinks2 = document.getElementById('beer-links-2');
	beerLinks2.addEventListener('click', () => window.location='test-recipe.html');
}

function ciderRecipes() {
	document.getElementById('main-content').innerHTML = '';

	for (let i = 0; i < ciderBrews.length; i++) {
		document.getElementById('main-content').innerHTML += `
		<div class="cider-links-header">
			<div id="${'cider-links-' + (i + 1)}">${ciderBrews[i].brewName}</div>
			<div>${ciderBrews[i].brewStyle}</div>
			<div>${ciderBrews[i].brewABV}</div>
			<div>${ciderBrews[i].brewRating}</div>
		</div>
		`;
	}

	//Cider Links to navigate to recipe page for each cider
	let ciderLinks1 = document.getElementById('cider-links-1');
	ciderLinks1.addEventListener('click', () => window.location='test-recipe.html');
	let ciderLinks2 = document.getElementById('cider-links-2');
	ciderLinks2.addEventListener('click', () => window.location='test-recipe.html');
}





