 function validateForm() {
        var un = document.loginform.username.value;
        var pw = document.loginform.password.value;
        var username = "username"; 
        var password = "password";
        if ((un == username) && (pw == password)) {
            return true;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
			return false;
		}
      }