function loginFun() {
	let userName = document.getElementById('username').value;
	let userPassword = document.getElementById('password').value;
//	let userRegex = /abaranek/;
//	let passRegex = /bEErpASs2365ab/;
	let userRegex = /a/;
	let passRegex = /b/;

	if (userName == 'a') {
		//window.location = 'brew-recipes.html';
		console.log(userName + ' ' + userPassword);
	}
	else {
		document.getElementById('loginError').innerHTML = 'Username or Password is incorrect - Please try again.';
	}

	
}

let loginButton = document.getElementById('login');
loginButton.addEventListener('click', loginFun);


//function is not working for some reason.
//it will run, and then quickly revert anything it did. 