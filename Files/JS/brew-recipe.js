//Variables for rating and review storage
let brewRatings = {
	beer1: [9,4,6,7,7],
	beer2: [5,6,3,5,8,1,9,5],
	beer3: [9,4,6,7,7,2,6,8,4,3,5,8,9,5],
	beer4: [5,6,3,5,8,1,9,5,5,8,6,2,4,7,6,3,1,6,10],
	beer5: [5,6,3,5,8,1,9,5,10,10,10,9,8,7,3,10,5,4],
	cider1: [1,5,8,6,4,8,7,2,2,6],
	cider2: [8,10,9,6,4,10,8,2,6,10]
};
let finalRatings = {
	beer1: (brewRatings.beer1.reduce((tot, num)=>tot+num) / brewRatings.beer1.length).toFixed(2),
	beer2: (brewRatings.beer2.reduce((tot, num)=>tot+num) / brewRatings.beer2.length).toFixed(2),
	beer3: (brewRatings.beer3.reduce((tot, num)=>tot+num) / brewRatings.beer3.length).toFixed(2),
	beer4: (brewRatings.beer4.reduce((tot, num)=>tot+num) / brewRatings.beer4.length).toFixed(2),
	beer5: (brewRatings.beer5.reduce((tot, num)=>tot+num) / brewRatings.beer5.length).toFixed(2),
	cider1: (brewRatings.cider1.reduce((tot, num)=>tot+num) / brewRatings.cider1.length).toFixed(2),
	cider2: (brewRatings.cider2.reduce((tot, num)=>tot+num) / brewRatings.cider2.length).toFixed(2)
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
let beerLink1 = new Brewbuilder('Gluten Free Ale', 'Ale', '5%', finalRatings.beer1);
let beerLink2 = new Brewbuilder('Gluten Free Beer #2', 'IPA', '5.5%', finalRatings.beer2);
let beerLink3 = new Brewbuilder('Old Brown Dog', 'Brown Ale', '4.8%', finalRatings.beer3);
let beerLink4 = new Brewbuilder('Dark Knight', 'Black IPA', '6.2%', finalRatings.beer4);
let beerLink5 = new Brewbuilder('My First Pumpkin', 'Pumpkin', '5.8%', finalRatings.beer5);

let ciderLink1 = new Brewbuilder('Cider #1', 'Dry', '5%', finalRatings.cider1);
let ciderLink2 = new Brewbuilder('Cider #2', 'Very-Sweet', '5.7%', finalRatings.cider2);

//Variables for beer and cider object storage
let beerBrews = [beerLink1, beerLink2, beerLink3, beerLink4, beerLink5];
let ciderBrews = [ciderLink1, ciderLink2];





//Beer and Cider buttons for links to the recipes
function beerRecipes() {
	document.getElementById('main-content').innerHTML = '';
	document.getElementById('main-content').innerHTML = `
		<div class="beer-links-header2">
			<div id="beerCol1">Beer Name</div>
			<div id="beerCol2">Style</div>
			<div id="beerCol3">ABV</div>
			<div id="beerCol4">Rating</div>
		</div>
		`;
	document.getElementById('bg-right').innerHTML = `<div> <---
		Click on the headings to sort!</div>`;

	for (let i = 0; i < beerBrews.length; i++) {
		document.getElementById('main-content').innerHTML += `
		<div class="beer-links-header" id="${'beer-links-' + (i + 1)}">
			<div>${beerBrews[i].brewName}</div>
			<div>${beerBrews[i].brewStyle}</div>
			<div>${beerBrews[i].brewABV}</div>
			<div>${beerBrews[i].brewRating}</div>
		</div>
		`;
	}

	//Header Columns to press for sorting capabilities
	let beerCol1 = document.getElementById('beerCol1');
	beerCol1.addEventListener('click', () => {beerSort(0);});
	let beerCol2 = document.getElementById('beerCol2');
	beerCol2.addEventListener('click', () => {beerSort(1);});
	let beerCol3 = document.getElementById('beerCol3');
	beerCol3.addEventListener('click', () => {beerSort(2);});
	let beerCol4 = document.getElementById('beerCol4');
	beerCol4.addEventListener('click', () => {beerSort(3);});

	//Beer Links to navigate to recipe page for each beer
	let beerLinks1 = document.getElementById('beer-links-1');
	beerLinks1.addEventListener('click', () => window.location='GF-Ale.html');
	let beerLinks2 = document.getElementById('beer-links-2');
	beerLinks2.addEventListener('click', () => window.location='beer2.html');
	let beerLinks3 = document.getElementById('beer-links-3');
	beerLinks3.addEventListener('click', () => window.location='beer3.html');
	let beerLinks4 = document.getElementById('beer-links-4');
	beerLinks4.addEventListener('click', () => window.location='beer4.html');
	let beerLinks5 = document.getElementById('beer-links-5');
	beerLinks5.addEventListener('click', () => window.location='beer5.html');
}

function ciderRecipes() {
	document.getElementById('main-content').innerHTML = '';
	document.getElementById('main-content').innerHTML = `
		<div class="cider-links-header2">
			<div id="ciderCol1">Cider Name</div>
			<div id="ciderCol2">Style</div>
			<div id="ciderCol3">ABV</div>
			<div id="ciderCol4">Rating</div>
		</div>
		`;
	document.getElementById('bg-right').innerHTML = `<div> <---
		Click on the headings to sort!</div>`;

	for (let i = 0; i < ciderBrews.length; i++) {
		document.getElementById('main-content').innerHTML += `
		<div class="cider-links-header" id="${'cider-links-' + (i + 1)}">
			<div>${ciderBrews[i].brewName}</div>
			<div>${ciderBrews[i].brewStyle}</div>
			<div>${ciderBrews[i].brewABV}</div>
			<div>${ciderBrews[i].brewRating}</div>
		</div>
		`;
	}

	//Header Columns to press for sorting capabilities
	let ciderCol1 = document.getElementById('ciderCol1');
	ciderCol1.addEventListener('click', () => {ciderSort(0);});
	let ciderCol2 = document.getElementById('ciderCol2');
	ciderCol2.addEventListener('click', () => {ciderSort(1);});
	let ciderCol3 = document.getElementById('ciderCol3');
	ciderCol3.addEventListener('click', () => {ciderSort(2);});
	let ciderCol4 = document.getElementById('ciderCol4');
	ciderCol4.addEventListener('click', () => {ciderSort(3);});

	//Cider Links to navigate to recipe page for each cider
	let ciderLinks1 = document.getElementById('cider-links-1');
	ciderLinks1.addEventListener('click', () => window.location='cider1.html');
	let ciderLinks2 = document.getElementById('cider-links-2');
	ciderLinks2.addEventListener('click', () => window.location='cider2.html');
}





//Sort functionality for the Home page
let beerSwitch = [0,0,0,0];
let ciderSwitch = [0,0,0,0];


function beerSort(num) {
	if (beerSwitch[num] === 0 && num === 0) {
		beerBrews.sort((a,b)=>a.brewName<b.brewName?-1:a.brewName>b.brewName?1:0);
		beerRecipes();
		beerSwitch[num] = 1;
	}
	else if (beerSwitch[num] === 1 && num === 0) {
		beerBrews.sort((a,b)=>a.brewName<b.brewName?1:a.brewName>b.brewName?-1:0);
		beerRecipes();
		beerSwitch[num] = 0;
	}
	else if (beerSwitch[num] === 0 && num === 1) {
		beerBrews.sort((a,b)=>a.brewStyle<b.brewStyle?-1:a.brewStyle>b.brewStyle?1:0);
		beerRecipes();
		beerSwitch[num] = 1;
	}
	else if (beerSwitch[num] === 1 && num === 1) {
		beerBrews.sort((a,b)=>a.brewStyle<b.brewStyle?1:a.brewStyle>b.brewStyle?-1:0);
		beerRecipes();
		beerSwitch[num] = 0;
	}
	else if (beerSwitch[num] === 0 && num === 2) {
		beerBrews.sort((a,b)=>a.brewABV<b.brewABV?-1:a.brewABV>b.brewABV?1:0);
		beerRecipes();
		beerSwitch[num] = 1;
	}
	else if (beerSwitch[num] === 1 && num === 2) {
		beerBrews.sort((a,b)=>a.brewABV<b.brewABV?1:a.brewABV>b.brewABV?-1:0);
		beerRecipes();
		beerSwitch[num] = 0;
	}
	else if (beerSwitch[num] === 0 && num === 3) {
		beerBrews.sort((a,b)=>a.brewRating<b.brewRating?-1:a.brewRating>b.brewRating?1:0);
		beerRecipes();
		beerSwitch[num] = 1;
	}
	else if (beerSwitch[num] === 1 && num === 3) {
		beerBrews.sort((a,b)=>a.brewRating<b.brewRating?1:a.brewRating>b.brewRating?-1:0);
		beerRecipes();
		beerSwitch[num] = 0;
	}
}

function ciderSort(num) {
	if (ciderSwitch[num] === 0 && num === 0) {
		ciderBrews.sort((a,b)=>a.brewName<b.brewName?-1:a.brewName>b.brewName?1:0);
		ciderRecipes();
		ciderSwitch[num] = 1;
	}
	else if (ciderSwitch[num] === 1 && num === 0) {
		ciderBrews.sort((a,b)=>a.brewName<b.brewName?1:a.brewName>b.brewName?-1:0);
		ciderRecipes();
		ciderSwitch[num] = 0;
	}
	else if (ciderSwitch[num] === 0 && num === 1) {
		ciderBrews.sort((a,b)=>a.brewStyle<b.brewStyle?-1:a.brewStyle>b.brewStyle?1:0);
		ciderRecipes();
		ciderSwitch[num] = 1;
	}
	else if (ciderSwitch[num] === 1 && num === 1) {
		ciderBrews.sort((a,b)=>a.brewStyle<b.brewStyle?1:a.brewStyle>b.brewStyle?-1:0);
		ciderRecipes();
		ciderSwitch[num] = 0;
	}
	else if (ciderSwitch[num] === 0 && num === 2) {
		ciderBrews.sort((a,b)=>a.brewABV<b.brewABV?-1:a.brewABV>b.brewABV?1:0);
		ciderRecipes();
		ciderSwitch[num] = 1;
	}
	else if (ciderSwitch[num] === 1 && num === 2) {
		ciderBrews.sort((a,b)=>a.brewABV<b.brewABV?1:a.brewABV>b.brewABV?-1:0);
		ciderRecipes();
		ciderSwitch[num] = 0;
	}
	else if (ciderSwitch[num] === 0 && num === 3) {
		ciderBrews.sort((a,b)=>a.brewRating<b.brewRating?-1:a.brewRating>b.brewRating?1:0);
		ciderRecipes();
		ciderSwitch[num] = 1;
	}
	else if (ciderSwitch[num] === 1 && num === 3) {
		ciderBrews.sort((a,b)=>a.brewRating<b.brewRating?1:a.brewRating>b.brewRating?-1:0);
		ciderRecipes();
		ciderSwitch[num] = 0;
	}
}


