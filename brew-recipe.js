let beerBrews = [];
let ciderBrews = [];
let brewRatings = {
	beer1: [],
	beer2: [],
	beer3: [],
	beer4: [],
	cider1: []
};
let userReviews = {
	beer1: [],
	beer2: [],
	beer3: [],
	beer4: [],
	cider1: []
};






//Internal site navigation links
let recommendLink = document.getElementById('recommend');
recommendLink.addEventListener('click', () => window.location='recommend.html');

let statsLink = document.getElementById('stats');
statsLink.addEventListener('click', () => window.location='brew-stats.html');

