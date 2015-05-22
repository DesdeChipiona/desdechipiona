//Función para dibujar en el background "contenido" la imagen seleccionada según el nombre de la imagen
function muestra(nombre) {
				//Asigno variable nombre para la ruta del archivo
	var x = "url" + "(" + "'" + nombre + "'" + ")";
	var video = document.getElementById("videopresentacion");
	var contenido = document.getElementById("contenido");

					//Ocultar video y detenerlo al pulsar imagen
	video.style.opacity = 0;
	video.style.visibility = 0;
	video.zIndex = -10;
	video.pause();

		//Establezco las propiedades CSS
					//Dibujar background
	contenido.style.background = x;
	contenido.style.backgroundSize = "contain";
	contenido.style.backgroundRepeat = "no-repeat";
	contenido.style.backgroundColor = "black";
	contenido.style.backgroundPosition = "50% 50%";
}

//Funciones para los controles de imágenes

function proximaimg() {
	var imgactual = document.getElementById("contenido").style.backgroundImage;
	window.alert(imgactual);
}

function anteriorimg() {
	var imgactual = document.getElementById("contenido").style.backgroundImage;
	window.alert(imgactual);
}

//Función para pausar el video de presentación
function videoplay() {
	var video = document.getElementById("videopresentacion");
	var button = document.getElementById("play");
	var botonplay = document.getElementById("botonplay");

	if (video.paused) {
		video.style.opacity = 1;
		video.zIndex = 0;
		document.getElementById("contenido").style.background = "url('')" ;
		document.getElementById("contenido").style.backgroundColor = "black" ;
		video.play();
      //button.textContent = "||";
		botonplay.src = "./images/botonstop.png";
	} else {
		video.pause();
		//button.textContent = ">";
		botonplay.src = "./images/botonplay.png";
	}
}

//Función solo para silenciar el audio

