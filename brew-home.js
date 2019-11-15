//Internal site navigation links
let recommendLink = document.getElementById('recommend');
recommendLink.addEventListener('click', () => window.location='recommend.html');

let statsLink = document.getElementById('stats');
statsLink.addEventListener('click', () => window.location='brew-stats.html');

let beerLink = document.getElementById('beer');
beerLink.addEventListener('click', beerRecipes);

let ciderLink = document.getElementById('cider');
ciderLink.addEventListener('click', ciderRecipes);