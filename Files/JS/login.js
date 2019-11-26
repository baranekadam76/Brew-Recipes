function loginTest() {
	let userName = document.getElementById('username').value;
	let userPassword = document.getElementById('password').value;
	let userRegex = /abaranek/;
	let passRegex = /bEErpASs2365ab/;

	if (userRegex.test(userName) && passRegex.test(userPassword)) {
		window.location = 'brew-recipes.html';
	}
	else {
		document.getElementById('loginError').innerHTML = 'Username or Password is incorrect - Please try again.';
		let resetButton = document.getElementById('username');
		resetButton.addEventListener('click', () => document.getElementById('loginError').innerHTML = '');
		let resetButton2 = document.getElementById('password');
		resetButton2.addEventListener('click', () => document.getElementById('loginError').innerHTML = '');
	}
}

let loginButton = document.getElementById('login');
loginButton.addEventListener('click', loginTest);

