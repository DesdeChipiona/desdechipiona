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
	var nombredeimagen1 = parseInt(nombredeimagen) + 1;
	var nombrederutaimagenmedium = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
	var nombrederutaimagenhigh = "url" + "(" + "'" + "./images/1_chipiona_general/high/" + nombredeimagen1 + ".jpg'" + ")";
	var contenido = document.getElementById("contenido");

	if(nombredeimagen < 20) {
		if(contenido.style.width == "70%") {
					//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;
					//Dibujar background
		contenido.style.background = nombrederutaimagenmedium;
		contenido.style.backgroundSize = "contain";
		contenido.style.backgroundRepeat = "no-repeat";
		contenido.style.backgroundColor = "black";
		contenido.style.backgroundPosition = "50% 50%";
		} else {
					//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;
					//Dibujar background
		contenido.style.background = nombrederutaimagenhigh;
		contenido.style.backgroundSize = "contain";
		contenido.style.backgroundRepeat = "no-repeat";
		contenido.style.backgroundColor = "black";
		contenido.style.backgroundPosition = "50% 50%";
		}
	}
}

function anteriorimg() {
	var nombredeimagen = document.getElementById("nombredeimagenactual").textContent;
	var nombredeimagen1 = parseInt(nombredeimagen) - 1;
	var nombrederutaimagenmedium = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
	var nombrederutaimagenhigh = "url" + "(" + "'" + "./images/1_chipiona_general/high/" + nombredeimagen1 + ".jpg'" + ")";
	var contenido = document.getElementById("contenido");

	if(nombredeimagen > 1) {
		if(contenido.style.width == "70%") {
					//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;
					//Dibujar background
		contenido.style.background = nombrederutaimagenmedium;
		contenido.style.backgroundSize = "contain";
		contenido.style.backgroundRepeat = "no-repeat";
		contenido.style.backgroundColor = "black";
		contenido.style.backgroundPosition = "50% 50%";
		} else {
					//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;
					//Dibujar background
		contenido.style.background = nombrederutaimagenhigh;
		contenido.style.backgroundSize = "contain";
		contenido.style.backgroundRepeat = "no-repeat";
		contenido.style.backgroundColor = "black";
		contenido.style.backgroundPosition = "50% 50%";
		}
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
	contenido.style.marginLeft = "5%";
	contenido.style.zIndex = "30";
	contenido.style.width = "90%";
	contenido.style.height = "80%";
	ampliarcontenido.style.display = "none";
	noampliarcontenido.style.display = "block";

			//scroll hacia el final de la página para encuadrar imagen
	//document.body.scrollTop = document.body.offsetHeight;
}

	// Minimizar Imagen del Background en "contenido"
function noampliar() {
	var contenido = document.getElementById('contenido');
	var ampliarcontenido = document.getElementById('ampliarcontenido');
	var noampliarcontenido = document.getElementById('noampliarcontenido');
				//Establezco las propiedades CSS
	contenido.style.position = "relative";
	contenido.style.marginLeft = "auto";
	contenido.style.zIndex = "8";
	contenido.style.width = "70%";
	contenido.style.height = "420px";
	ampliarcontenido.style.display = "block";
	noampliarcontenido.style.display = "none";
}



// ---------------------------------------------------DESPLEGABLE IZQ----------------------------------------------

//Función para mostrar Descripción junto a las imágenes del menu desplegable a la izquierda siendo "n" el numero del desplegable
function descripcion(n) {
	x =  n + "desplegableletras";

				//Establezco las propiedades CSS
	document.getElementById(x).style.opacity = "1";
}

//Función para "mouseout" que cierra la descripción cuando pierde el foco
function nodescripcion() {
	document.getElementById(x).style.opacity = "0";
}

//----------------------------------------------------MENU DESPLEGABLE MENU SUPERIOR FIXED-------------------------
//Desplegable para menu superior que sea accionado con el over del ratón y termine al perder el foco volviendo a dejar display=none
function menusuperiordesplegable(id) {
	var nombredemenu = document.getElementById(id);

	nombredemenu.style.display = 	"block";

// Escribir enlaces dentro del menu superior "album"
	var albums = '<UL class="ulcomunlistas">';
	albums += '<LI class="lidesplegable"><A href="flora_general.html" class="linkmenusuperior">Flora</A></LI>';
	albums += '<LI class="lidesplegable"><A href="fauna_general.html" class="linkmenusuperior">Fauna</A></LI>';
	albums += '<LI class="lidesplegable"><A href="playas_general.html" class="linkmenusuperior">Playas</A></LI>';
	albums += '<LI class="lidesplegable"><A href="monumentos_general.html" class="linkmenusuperior">Monumentos</A></LI>';
	albums += '<LI class="lidesplegable"><A href="puestas_de_sol.html" class="linkmenusuperior">Puestas de sol</A></LI>';
	albums += '<LI class="lidesplegable"><A href="fiestas_general.html" class="linkmenusuperior">Fiestas y Eventos</A></LI>';
	albums += '</UL>';
	document.getElementById('albumcaja3').innerHTML = albums;

// Escribir enlaces dentro del menu superior "web amigas"
	var webamigas = '<UL class="ulcomunlistas">';
	webamigas += '<LI class="lidesplegable"><A href="http://www.laguialinux.es" class="linkmenusuperior">LaGuíaLinux</A></LI>';
	webamigas += '<LI class="lidesplegable"><A href="http://www.exateunasrisas.nzweb.org" class="linkmenusuperior">Exate unas risas</A></LI>';
	webamigas += '<LI class="lidesplegable"><A href="http://www.winkle.nzweb.org" class="linkmenusuperior">Asociación Winkle</A></LI>';
	webamigas += '<LI class="lidesplegable"><A href="http://www.nzweb.org" class="linkmenusuperior">NzWeb, mi gran proyecto</A></LI>';
	webamigas += '</UL>';
	document.getElementById('webamigascaja3').innerHTML = webamigas;

// Escribir enlaces dentro del menu superior "videos"
	var menuvideos= '<UL class="ulcomunlistas">';
	menuvideos += '<LI class="lidesplegable"><A href="https://www.youtube.com/channel/UCIoK1tt5RChTC_-zEcEfDoQ" class="linkmenusuperior">Canal de Youtube</A></LI>';
	menuvideos += '</UL>';
	document.getElementById('videoscaja3').innerHTML = menuvideos;
}

function menusuperiornodesplegable(id) {
	var nombredemenu = document.getElementById(id);

	nombredemenu.style.display = "none";
}

//-------------------------------------------------Menu dentro de smartphone-------------------------------------------------
//Desplegar menu al pulsar boton "menu" con id "botonmenusmartphone"
function iniciarmenu() {
	var menu = document.getElementById('cajamenusmartphone');

	if (menu.style.display == "") {
		menu.style.display = "block";
	} else if (menu.style.display == "none") {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}



