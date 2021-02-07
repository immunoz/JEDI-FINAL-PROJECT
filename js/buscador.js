var url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=';
var id = 'blue-eyes ultimate dragon';

function load() {
	axios.get(url+id)
	.then ( function (response) {
		data = response.data.data[0]
		document.getElementById("cartaImagen").innerHTML = '<img src="' + data.card_images[0].image_url + '" class="card-img-top" alt="Error al cargar">';
		document.getElementById("cartaDatos").innerHTML =
		'<h3>Nombre: ' + data.name + '</h3>'
            + '<hr>'
            + '<h3>Nivel: ' + data.level + '</h3>'
            + '<hr>'
            + '<h3>Ataque: ' + data.atk + ' Defensa: ' + data.def + '</h3>'
            + '<hr>'
            + '<h3>Descripción</h3>'
            + '<p>' + data.desc + '</p>'
	})
	.catch( 
		function (error) {
			alert("Lo sentimos, pero el nombre que buscas no existe en la base de datos :(. Recuerda que los nombres deben estar en Inglés")
		})
}

function carga() {
	id = document.getElementById("entradaNombre").value;
	load();
}

function cambiarLoginPos() {
	if (window.innerWidth <= 1300) {
			document.getElementById("twitterNews").innerHTML = "";
			document.getElementById("twitterNews").style.border ="0px solid white";
			document.getElementById("leftSide").className = "col-0";
			document.getElementById("rightSide").className = "col-0";
			document.getElementById("mainZone").className = "col-12 webContainer";
			document.getElementById("cartaImagen").className = "col-12";
			document.getElementById("cartaDatos").className = "col-12";
		} else {
			document.getElementById("leftSide").className = "col-2";
			document.getElementById("rightSide").className = "col-2";
			document.getElementById("mainZone").className = "col-8 webContainer";
			document.getElementById("cartaImagen").className = "col-6";
			document.getElementById("cartaDatos").className = "col-6";
		}
}

window.addEventListener('resize', f => {cambiarLoginPos()});

window.onload = function() {
	if (window.innerWidth <= 1300) cambiarLoginPos();
	document.getElementById("buscarBtn").addEventListener("click",f => {carga()});
	load();
}