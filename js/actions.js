
function cambiarLoginPos() {
	if (window.innerWidth <= 1300) {
			document.getElementById("twitterNews").innerHTML = "";
			document.getElementById("twitterNews").style.border ="0px solid white";
			document.getElementById("leftSide").className = "col-0";
			document.getElementById("rightSide").className = "col-0";
			document.getElementById("mainZone").className = "col-12 webContainer";
		} else {
			/*document.getElementById("twitterNews").innerHTML = '<a class="twitter-timeline twBox" data-width="300" data-height="400" href="https://twitter.com/YGO_DL_Official">Tweets by TwitterDev</a>' +
					'<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';*/
			//aquí intentaba que el widget de twitter se habilite otra vez per por algun motivo no carga cuando se vuelve a habilitar. Prefirí desactivarlo.
			//document.getElementById("twitterNews").style.border ="border: 2px solid rgb(66, 66, 66);";
			document.getElementById("leftSide").className = "col-2";
			document.getElementById("rightSide").className = "col-2";
			document.getElementById("mainZone").className = "col-8 webContainer";
		}
}

window.addEventListener('resize', f => {cambiarLoginPos()});

//localStorage.setItem('nomCarregat', 'false');

window.onload = function () {
	if (window.innerWidth <= 1300) cambiarLoginPos();
}
