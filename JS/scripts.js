var imagengeneral = document.getElementById('contenido').style.backgroundImage;
//----------------------------------------------Pintar Background de "id=contenido"---------------------

//Función para dibujar en el background "contenido" la imagen seleccionada según el nombre de la imagen
function muestrageneral(nombre) {
				//Asigno variable nombre para la ruta del archivo
	var rutadeimagen = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombre + ".jpg'" + ")";
	var video = document.getElementById("videopresentacion");
	var contenido = document.getElementById("contenido");

					//Ocultar video y detenerlo al pulsar imagen
	video.style.opacity = 0;
	video.style.visibility = 0;
	video.zIndex = -10;
	video.pause();

		//Establezco las propiedades CSS

					//Guardar nombre de la imagen en "id=nombredeimagenactual"
	document.getElementById("nombredeimagenactual").innerHTML = nombre;
					//Dibujar background
	contenido.style.background = rutadeimagen;
	contenido.style.backgroundSize = "contain";
	contenido.style.backgroundRepeat = "no-repeat";
	contenido.style.backgroundColor = "black";
	contenido.style.backgroundPosition = "50% 50%";
}

//------------------------------------------Funciones para los controles de imágenes-------------------
function proximaimg() {
	var nombredeimagen = document.getElementById("nombredeimagenactual").textContent;
	var nombredeimagen1 = parseInt(nombredeimagen) + 1
	var nombrederutaimagen = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
	var contenido = document.getElementById("contenido");

	if(nombredeimagen < 20) {
					//Guardar nombre de la imagen en "id=nombredeimagenactual"
	document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;
					//Dibujar background
	contenido.style.background = nombrederutaimagen;
	contenido.style.backgroundSize = "contain";
	contenido.style.backgroundRepeat = "no-repeat";
	contenido.style.backgroundColor = "black";
	contenido.style.backgroundPosition = "50% 50%";
	}
}

function anteriorimg() {
	var nombredeimagen = document.getElementById("nombredeimagenactual").textContent;
	var nombredeimagen1 = parseInt(nombredeimagen) - 1
	var nombrederutaimagen = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
	var contenido = document.getElementById("contenido");

	if(nombredeimagen > 1) {
					//Guardar nombre de la imagen en "id=nombredeimagenactual"
	document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;
					//Dibujar background
	contenido.style.background = nombrederutaimagen;
	contenido.style.backgroundSize = "contain";
	contenido.style.backgroundRepeat = "no-repeat";
	contenido.style.backgroundColor = "black";
	contenido.style.backgroundPosition = "50% 50%";
	}
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



// --------------------------------------------------------AMPLIAR CONTENIDO--------------------------------------

	// Ampliar Imagen del Background en "contenido"
function ampliar() {
	var contenido = document.getElementById('contenido');
	var ampliarcontenido = document.getElementById('ampliarcontenido');
	var noampliarcontenido = document.getElementById('noampliarcontenido');
	var nombredeimagen = document.getElementById("nombredeimagenactual").textContent;
	var nombrederutaimagen = "url" + "(" + "'" + "./images/1_chipiona_general/high/" + nombredeimagen + ".jpg'" + ")";
	var video = document.getElementById("videopresentacion");

					//Ocultar video y detenerlo al ampliar imagen
	video.style.opacity = 0;
	video.style.visibility = 0;
	video.zIndex = -10;
	video.pause();
				//Cambio imagen por "high" para alta resolución al ampliar
	contenido.style.background = nombrederutaimagen;
	contenido.style.backgroundSize = "contain";
	contenido.style.backgroundRepeat = "no-repeat";
	contenido.style.backgroundColor = "black";
	contenido.style.backgroundPosition = "50% 50%";
				//Establezco las propiedades CSS
	contenido.style.position = "absolute";
	contenido.style.zIndex = "30";
	contenido.style.width = "100%";
	contenido.style.height = "100%";
	ampliarcontenido.style.display = "none";
	noampliarcontenido.style.display = "block";
}

	// Minimizar Imagen del Background en "contenido"
function noampliar() {
	var contenido = document.getElementById('contenido');
	var ampliarcontenido = document.getElementById('ampliarcontenido');
	var noampliarcontenido = document.getElementById('noampliarcontenido');
				//Establezco las propiedades CSS
	contenido.style.position = "relative";
	contenido.style.zIndex = "8";
	contenido.style.width = "90%";
	contenido.style.height = "60%";
	ampliarcontenido.style.display = "block";
	noampliarcontenido.style.display = "none";
}



// ---------------------------------------------------DESPLEGABLE IZQ----------------------------------------------

//Función para mostrar Descripción junto a las imágenes del menu desplegable a la izquierda siendo "n" el numero del desplegable
function descripcion(n) {
	x =  n + "desplegableletras"

				//Establezco las propiedades CSS
	document.getElementById(x).style.opacity = "1"
}

//Función para "mouseout" que cierra la descripción cuando pierde el foco
function nodescripcion() {
	document.getElementById(x).style.opacity = "0"
}




