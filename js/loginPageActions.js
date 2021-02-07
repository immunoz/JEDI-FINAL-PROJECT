window.onload = function () {
	console.log("hola");
	document.getElementById("registerField").addEventListener("click",f => { 
		document.getElementById("formulariVerificacio").innerHTML = '<img src="../imagenes/ygoLogo.png" width="40%">'
			+ '<input type="text" name="userId" placeholder="Usuario" required>'
			+ '<input type="password" name="userId" placeholder="Contraseña" required>'
			+ '<input type="email" name="userId" placeholder="E-mail" required>'
			+ '<input type="submit" name="login" id="loginButton" value="iniciar sesión">';
		document.getElementById("registerField").innerHTML = "";
		console.log("hey");
	})
}