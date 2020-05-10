function matchingFunc()
{
	// var nameConfirm = document.getElementById("name").value;
	// var secondNameConfirm = document.getElementById("secondName").value;
	// var loginConfirm = document.getElementById("login").value;
	var passwordMain = document.getElementById("password").value;
	var passwordConfirm = document.getElementById("confirmPassword").value;
	// var sexConfirm = document.getElementById("sex").value;
	// var emailConfirm = document.getElementById("email").value;

	if(passwordMain===passwordConfirm)
	{
		alert("Password is typed correctly");
	}
	else
	{
		alert("Please, type the password once again");
	}
}
