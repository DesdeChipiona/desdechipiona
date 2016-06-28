//----------------------------------------------Pintar Background de "id=contenido"---------------------
function cambiarbackgroundsmartphone(nombreimagen) {
var backgroundsmartphone = document.getElementById("contenido");
var videopresentacion = document.getElementById("videopresentacion");
var nombredeimagenactual = document.getElementById("nombredeimagenactual");
var nombregaleriaactual = document.getElementById("galeriaimagenesactual").innerHTML;

//Ocultar vídeo y detenerlo al pulsar una imagen de la galería
	videopresentacion.style.opacity = 0;
	videopresentacion.style.visibility = 0;
	videopresentacion.zIndex = -10;
	videopresentacion.pause();

//Guardar nombre de la imagen en "id=nombredeimagenactual"
	nombredeimagenactual.innerHTML = nombreimagen;

	//Variables con la ruta de cada galería de imagen a tamaño medio
	var principal = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombreimagen + ".jpg'" + ")";
   var playageneral = "url" + "(" + "'" + "./images/2_playas/1_general/medium/" + nombreimagen + ".jpg'" + ")";
   var playaderegla = "url" + "(" + "'" + "./images/2_playas/2_playa_de_regla/medium/" + nombreimagen + ".jpg'" + ")";
   var playacruzdelmar = "url" + "(" + "'" + "./images/2_playas/3_playa_cruz_del_mar/medium/" + nombreimagen + ".jpg'" + ")";
   var playadelmolino = "url" + "(" + "'" + "./images/2_playas/4_playa_del_molino/medium/" + nombreimagen + ".jpg'" + ")";
   var playalascanteras = "url" + "(" + "'" + "./images/2_playas/5_playa_las_canteras/medium/" + nombreimagen + ".jpg'" + ")";
   var monumentos = "url" + "(" + "'" + "./images/3_monumentos/medium/" + nombreimagen + ".jpg'" + ")";
   var flora = "url" + "(" + "'" + "./images/4_flora/medium/" + nombreimagen + ".jpg'" + ")";
   var faunageneral = "url" + "(" + "'" + "./images/5_fauna/1_general/medium/" + nombreimagen + ".jpg'" + ")";
   var faunacamaleones = "url" + "(" + "'" + "./images/5_fauna/2_camaleones/medium/" + nombreimagen + ".jpg'" + ")";
   var fiestasyeventos = "url" + "(" + "'" + "./images/6_fiestas_y_eventos/1_general/medium/" + nombreimagen + ".jpg'" + ")";
   var puestasdesol = "url" + "(" + "'" + "./images/7_puestas_de_sol/medium/" + nombreimagen + ".jpg'" + ")";

	function estilosbackground() {//Función para los estilos del background reduciendo codigo en la hoja
		backgroundsmartphone.style.backgroundSize = "contain";
		backgroundsmartphone.style.backgroundRepeat = "no-repeat";
		backgroundsmartphone.style.backgroundColor = "black";
		backgroundsmartphone.style.backgroundPosition = "50% 50%";
	}

	if (nombregaleriaactual == "Galería Principal") {
		backgroundsmartphone.style.background = principal;
		estilosbackground();

   } else if (nombregaleriaactual == "Playas") {
		backgroundsmartphone.style.background = playageneral;
		estilosbackground();

	} else if (nombregaleriaactual == "Playa de Regla") {
		backgroundsmartphone.style.background = playaderegla;
		estilosbackground();

	} else if (nombregaleriaactual == "Playa cruz del Mar") {
		backgroundsmartphone.style.background = playacruzdelmar;
		estilosbackground();

	} else if (nombregaleriaactual == "Playa del Molino") {
		backgroundsmartphone.style.background = playadelmolino;
		estilosbackground();

	} else if (nombregaleriaactual == "Playa de las Canteras") {
		backgroundsmartphone.style.background = playalascanteras;
		estilosbackground();

	} else if (nombregaleriaactual == "Monumentos") {
		backgroundsmartphone.style.background = monumentos;
		estilosbackground();

	} else if (nombregaleriaactual == "Flora General") {
		backgroundsmartphone.style.background = flora;
		estilosbackground();

	} else if (nombregaleriaactual == "Fauna General") {
		backgroundsmartphone.style.background = faunageneral;
		estilosbackground();

	} else if (nombregaleriaactual == "Fauna Camaleones") {
		backgroundsmartphone.style.background = faunacamaleones;
		estilosbackground();

	} else if (nombregaleriaactual == "Fiestas y Eventos") {
		backgroundsmartphone.style.background = fiestasyeventos;
		estilosbackground();

	} else if (nombregaleriaactual == "Puestas de Sol") {
		backgroundsmartphone.style.background = puestasdesol;
		estilosbackground();

	} else {
		alert("Ha ocurrido un error al cargar la galería, prueba a recargar de nuevo la página");
	}
}

//--------------------------------------------Función Próxima Imagen--------------------------
function proximaimg() {
	var nombredeimagen = document.getElementById("nombredeimagenactual").textContent;
	var nombredeimagen1 = parseInt(nombredeimagen) + 1;
	var backgroundsmartphone = document.getElementById("contenido");
	var nombregaleriaactual = document.getElementById("galeriaimagenesactual").innerHTML;

	//Leyendo el nombre de la imagen para el primer selector de la galería, id=selectorimagen1
   var primeraimagendelselector = document.getElementById('selectorimagen1').style.backgroundImage;

	//Leer galería actual de id=galeriaimagenesactual
	var galeriaactual;
	galeriaactual = document.getElementById('galeriaimagenesactual').innerHTML;
	document.getElementById('galeriaimagenesactual').innerHTML = galeriaactual;

	//Declarando variables con la ruta de imágenes tamaño: medium
	var principal = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playageneral = "url" + "(" + "'" + "./images/2_playas/1_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playaderegla = "url" + "(" + "'" + "./images/2_playas/2_playa_de_regla/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playacruzdelmar = "url" + "(" + "'" + "./images/2_playas/3_playa_cruz_del_mar/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playadelmolino = "url" + "(" + "'" + "./images/2_playas/4_playa_del_molino/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playalascanteras = "url" + "(" + "'" + "./images/2_playas/5_playa_las_canteras/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var monumentos = "url" + "(" + "'" + "./images/3_monumentos/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var flora = "url" + "(" + "'" + "./images/4_flora/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var faunageneral = "url" + "(" + "'" + "./images/5_fauna/1_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var faunacamaleones = "url" + "(" + "'" + "./images/5_fauna/2_camaleones/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var fiestasyeventos = "url" + "(" + "'" + "./images/6_fiestas_y_eventos/1_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var puestasdesol = "url" + "(" + "'" + "./images/7_puestas_de_sol/medium/" + nombredeimagen1 + ".jpg'" + ")";

	//Declarando variables con la ruta de imágenes tamaño: High
	var principal1 = "url" + "(" + "'" + "./images/1_chipiona_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playageneral1 = "url" + "(" + "'" + "./images/2_playas/1_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playaderegla1 = "url" + "(" + "'" + "./images/2_playas/2_playa_de_regla/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playacruzdelmar1 = "url" + "(" + "'" + "./images/2_playas/3_playa_cruz_del_mar/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playadelmolino1 = "url" + "(" + "'" + "./images/2_playas/4_playa_del_molino/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playalascanteras1 = "url" + "(" + "'" + "./images/2_playas/5_playa_las_canteras/high/" + nombredeimagen1 + ".jpg'" + ")";
   var monumentos1 = "url" + "(" + "'" + "./images/3_monumentos/high/" + nombredeimagen1 + ".jpg'" + ")";
   var flora1 = "url" + "(" + "'" + "./images/4_flora/high/" + nombredeimagen1 + ".jpg'" + ")";
   var faunageneral1 = "url" + "(" + "'" + "./images/5_fauna/1_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var faunacamaleones1 = "url" + "(" + "'" + "./images/5_fauna/2_camaleones/high/" + nombredeimagen1 + ".jpg'" + ")";
   var fiestasyeventos1 = "url" + "(" + "'" + "./images/6_fiestas_y_eventos/1_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var puestasdesol1 = "url" + "(" + "'" + "./images/7_puestas_de_sol/high/" + nombredeimagen1 + ".jpg'" + ")";

	function estilosbackground() {
		backgroundsmartphone.style.backgroundSize = "contain";
		backgroundsmartphone.style.backgroundRepeat = "no-repeat";
		backgroundsmartphone.style.backgroundColor = "black";
		backgroundsmartphone.style.backgroundPosition = "50% 50%";
	}

//Condiciones para pintar imagenes en calidad alta
	if(nombredeimagen < 20 && contenido.style.minWidth == "90%") {
		//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;

		if (nombregaleriaactual == "Galería Principal") {
			backgroundsmartphone.style.background = principal1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playas"){
			backgroundsmartphone.style.background = playageneral1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa cruz del Mar"){
			backgroundsmartphone.style.background = playacruzdelmar1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa de Regla"){
			backgroundsmartphone.style.background = playaderegla1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa del Molino"){
			backgroundsmartphone.style.background = playadelmolino1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa de las Canteras"){
			backgroundsmartphone.style.background = playalascanteras1;
			estilosbackground();

		} else if(nombregaleriaactual == "Monumentos"){
			backgroundsmartphone.style.background = monumentos1;
			estilosbackground();

		} else if(nombregaleriaactual == "Flora General"){
			backgroundsmartphone.style.background = flora1;
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna General"){
			backgroundsmartphone.style.background = faunageneral1;
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna Camaleones"){
			backgroundsmartphone.style.background = faunacamaleones1;
			estilosbackground();

		} else if(nombregaleriaactual == "Fiestas y Eventos"){
			backgroundsmartphone.style.background = fiestasyeventos1;
			estilosbackground();

		} else if(nombregaleriaactual == "Puestas de Sol"){
			backgroundsmartphone.style.background = puestasdesol1;
			estilosbackground();
		}

//Condiciones para pintar imagenes en calidad media
	} else if(nombredeimagen < 20 && contenido.style.minWidth != "90%") {
		//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;

		if (nombregaleriaactual == "Galería Principal") {
			backgroundsmartphone.style.background = principal;
			estilosbackground();

		} else if(nombregaleriaactual == "Playas"){
			backgroundsmartphone.style.background = playageneral;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa cruz del Mar"){
			backgroundsmartphone.style.background = playacruzdelmar;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa de Regla"){
			backgroundsmartphone.style.background = playaderegla;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa del Molino"){
			backgroundsmartphone.style.background = playadelmolino;
			estilosbackground();

		} else if(nombregaleriaactual == "playalascanteras"){
			backgroundsmartphone.style.background = playalascanteras;
			estilosbackground();

		} else if(nombregaleriaactual == "Monumentos"){
			backgroundsmartphone.style.background = monumentos;
			estilosbackground();

		} else if(nombregaleriaactual == "Flora General"){
			backgroundsmartphone.style.background = flora;
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna General"){
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna Camaleones"){
			backgroundsmartphone.style.background = faunacamaleones;
			estilosbackground();

		} else if(nombregaleriaactual == "Fiestas y Eventos"){
			backgroundsmartphone.style.background = fiestasyeventos;
			estilosbackground();

		} else if(nombregaleriaactual == "Puestas de Sol"){
			backgroundsmartphone.style.background = puestasdesol;
			estilosbackground();
		}
	}
}

//--------------------------------------------Función Anterior Imagen--------------------------
function anteriorimg() {
	var nombredeimagen = document.getElementById("nombredeimagenactual").textContent;
	var nombredeimagen1 = parseInt(nombredeimagen) - 1;
	var backgroundsmartphone = document.getElementById("contenido");
	var nombregaleriaactual = document.getElementById("galeriaimagenesactual").innerHTML;

	//Leer galería actual de id=galeriaimagenesactual
	var galeriaactual;
	galeriaactual = document.getElementById('galeriaimagenesactual').innerHTML;
	document.getElementById('galeriaimagenesactual').innerHTML = galeriaactual;

	//Declarando variables con la ruta de imágenes tamaño: medium
	var principal = "url" + "(" + "'" + "./images/1_chipiona_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playageneral = "url" + "(" + "'" + "./images/2_playas/1_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playaderegla = "url" + "(" + "'" + "./images/2_playas/2_playa_de_regla/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playacruzdelmar = "url" + "(" + "'" + "./images/2_playas/3_playa_cruz_del_mar/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playadelmolino = "url" + "(" + "'" + "./images/2_playas/4_playa_del_molino/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var playalascanteras = "url" + "(" + "'" + "./images/2_playas/5_playa_las_canteras/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var monumentos = "url" + "(" + "'" + "./images/3_monumentos/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var flora = "url" + "(" + "'" + "./images/4_flora/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var faunageneral = "url" + "(" + "'" + "./images/5_fauna/1_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var faunacamaleones = "url" + "(" + "'" + "./images/5_fauna/2_camaleones/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var fiestasyeventos = "url" + "(" + "'" + "./images/6_fiestas_y_eventos/1_general/medium/" + nombredeimagen1 + ".jpg'" + ")";
   var puestasdesol = "url" + "(" + "'" + "./images/7_puestas_de_sol/medium/" + nombredeimagen1 + ".jpg'" + ")";

	//Declarando variables con la ruta de imágenes tamaño: High
	var principal1 = "url" + "(" + "'" + "./images/1_chipiona_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playageneral1 = "url" + "(" + "'" + "./images/2_playas/1_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playaderegla1 = "url" + "(" + "'" + "./images/2_playas/2_playa_de_regla/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playacruzdelmar1 = "url" + "(" + "'" + "./images/2_playas/3_playa_cruz_del_mar/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playadelmolino1 = "url" + "(" + "'" + "./images/2_playas/4_playa_del_molino/high/" + nombredeimagen1 + ".jpg'" + ")";
   var playalascanteras1 = "url" + "(" + "'" + "./images/2_playas/5_playa_las_canteras/high/" + nombredeimagen1 + ".jpg'" + ")";
   var monumentos1 = "url" + "(" + "'" + "./images/3_monumentos/high/" + nombredeimagen1 + ".jpg'" + ")";
   var flora1 = "url" + "(" + "'" + "./images/4_flora/high/" + nombredeimagen1 + ".jpg'" + ")";
   var faunageneral1 = "url" + "(" + "'" + "./images/5_fauna/1_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var faunacamaleones1 = "url" + "(" + "'" + "./images/5_fauna/2_camaleones/high/" + nombredeimagen1 + ".jpg'" + ")";
   var fiestasyeventos1 = "url" + "(" + "'" + "./images/6_fiestas_y_eventos/1_general/high/" + nombredeimagen1 + ".jpg'" + ")";
   var puestasdesol1 = "url" + "(" + "'" + "./images/7_puestas_de_sol/high/" + nombredeimagen1 + ".jpg'" + ")";

	function estilosbackground() {
		backgroundsmartphone.style.backgroundSize = "contain";
		backgroundsmartphone.style.backgroundRepeat = "no-repeat";
		backgroundsmartphone.style.backgroundColor = "black";
		backgroundsmartphone.style.backgroundPosition = "50% 50%";
	}

//Condiciones para pintar imagenes en calidad alta
	if(nombredeimagen > 1 && contenido.style.minWidth == "90%") {
		//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;

		if (nombregaleriaactual == "Galería Principal") {
			backgroundsmartphone.style.background = principal1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playas"){
			backgroundsmartphone.style.background = playageneral1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa cruz del Mar"){
			backgroundsmartphone.style.background = playacruzdelmar1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa de Regla"){
			backgroundsmartphone.style.background = playaderegla1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa del Molino"){
			backgroundsmartphone.style.background = playadelmolino1;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa de las Canteras"){
			backgroundsmartphone.style.background = playalascanteras1;
			estilosbackground();

		} else if(nombregaleriaactual == "Monumentos"){
			backgroundsmartphone.style.background = monumentos1;
			estilosbackground();

		} else if(nombregaleriaactual == "Flora General"){
			backgroundsmartphone.style.background = flora1;
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna General"){
			backgroundsmartphone.style.background = faunageneral1;
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna Camaleones"){
			backgroundsmartphone.style.background = faunacamaleones1;
			estilosbackground();

		} else if(nombregaleriaactual == "Fiestas y Eventos"){
			backgroundsmartphone.style.background = fiestasyeventos1;
			estilosbackground();
		}

//Condiciones para pintar imagenes en calidad media
	} else if(nombredeimagen > 1 && contenido.style.minWidth != "90%") {
		//Guardar nombre de la imagen en "id=nombredeimagenactual"
		document.getElementById("nombredeimagenactual").innerHTML = nombredeimagen1;

		if (nombregaleriaactual == "Galería Principal") {
			backgroundsmartphone.style.background = principal;
			estilosbackground();

		} else if(nombregaleriaactual == "Playas"){
			backgroundsmartphone.style.background = playageneral;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa cruz del Mar"){
			backgroundsmartphone.style.background = playacruzdelmar;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa de Regla"){
			backgroundsmartphone.style.background = playaderegla;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa del Molino"){
			backgroundsmartphone.style.background = playadelmolino;
			estilosbackground();

		} else if(nombregaleriaactual == "Playa de las Canteras"){
			backgroundsmartphone.style.background = playalascanteras;
			estilosbackground();

		} else if(nombregaleriaactual == "Monumentos"){
			backgroundsmartphone.style.background = monumentos;
			estilosbackground();

		} else if(nombregaleriaactual == "Flora General"){
			backgroundsmartphone.style.background = flora;
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna General"){
			estilosbackground();

		} else if(nombregaleriaactual == "Fauna Camaleones"){
			backgroundsmartphone.style.background = faunacamaleones;
			estilosbackground();

		} else if(nombregaleriaactual == "Fiestas y Eventos"){
			backgroundsmartphone.style.background = fiestasyeventos;
			estilosbackground();

		} else if(nombregaleriaactual == "Puestas de Sol"){
			backgroundsmartphone.style.background = puestasdesol;
			estilosbackground();
		}
	}
}
//--------------------------------------------------VÍDEO PAUSAR O INICIAR-----------------------------------
function videoplay() {
	var videopresentacion = document.getElementById("videopresentacion");
	var button = document.getElementById("play");
	var botonplay = document.getElementById("botonplay");
	var backgroundsmartphone = document.getElementById("contenido");

	if (videopresentacion.paused) {
		videopresentacion.style.opacity = 1;
		videopresentacion.zIndex = 0;
		backgroundsmartphone.style.background = "" ;
		backgroundsmartphone.style.backgroundColor = "black" ;
		videopresentacion.play();
		botonplay.src = "./images/botones/botonstop.png";

	} else {
		videopresentacion.pause();
		botonplay.src = "./images/botones/botonplay.png";
	}
}

// --------------------------------------------------------AMPLIAR CONTENIDO--------------------------------------

// Ampliar Imagen del Background en "contenido"
function ampliarsmartphone() {
	var backgroundsmartphone = document.getElementById("contenido");
	var nombredeimagenactual = document.getElementById("nombredeimagenactual").innerHTML;
	var ampliarcontenido = document.getElementById('ampliarcontenido');
	var noampliarcontenido = document.getElementById('noampliarcontenido');
	var videopresentacion = document.getElementById("videopresentacion");
	var nombregaleriaactual = document.getElementById('galeriaimagenesactual').innerHTML;


//Declarando variables con la ruta de imágenes tamaño: High
	var principal1 = "url" + "(" + "'" + "./images/1_chipiona_general/high/" + nombredeimagenactual + ".jpg'" + ")";
   var playageneral1 = "url" + "(" + "'" + "./images/2_playas/1_general/high/" + nombredeimagenactual + ".jpg'" + ")";
   var playaderegla1 = "url" + "(" + "'" + "./images/2_playas/2_playa_de_regla/high/" + nombredeimagenactual + ".jpg'" + ")";
   var playacruzdelmar1 = "url" + "(" + "'" + "./images/2_playas/3_playa_cruz_del_mar/high/" + nombredeimagenactual + ".jpg'" + ")";
   var playadelmolino1 = "url" + "(" + "'" + "./images/2_playas/4_playa_del_molino/high/" + nombredeimagenactual + ".jpg'" + ")";
   var playalascanteras1 = "url" + "(" + "'" + "./images/2_playas/5_playa_las_canteras/high/" + nombredeimagenactual + ".jpg'" + ")";
   var monumentos1 = "url" + "(" + "'" + "./images/3_monumentos/high/" + nombredeimagenactual + ".jpg'" + ")";
   var flora1 = "url" + "(" + "'" + "./images/4_flora/high/" + nombredeimagenactual + ".jpg'" + ")";
   var faunageneral1 = "url" + "(" + "'" + "./images/5_fauna/1_general/high/" + nombredeimagenactual + ".jpg'" + ")";
   var faunacamaleones1 = "url" + "(" + "'" + "./images/5_fauna/2_camaleones/high/" + nombredeimagenactual + ".jpg'" + ")";
   var fiestasyeventos1 = "url" + "(" + "'" + "./images/6_fiestas_y_eventos/1_general/high/" + nombredeimagenactual + ".jpg'" + ")";
   var puestasdesol1 = "url" + "(" + "'" + "./images/7_puestas_de_sol/high/" + nombredeimagenactual + ".jpg'" + ")";

//Ocultar video y detenerlo al ampliar imagen
	videopresentacion.style.opacity = 0;
	videopresentacion.style.visibility = 0;
	videopresentacion.zIndex = -10;
	videopresentacion.pause();

//Cambio imagen por "high" para alta resolución al ampliar

	function estilosbackground(){
		backgroundsmartphone.style.backgroundSize = "contain";
		backgroundsmartphone.style.backgroundRepeat = "no-repeat";
		backgroundsmartphone.style.backgroundColor = "black";
		backgroundsmartphone.style.backgroundPosition = "50% 50%";
		backgroundsmartphone.style.position = "absolute";
		backgroundsmartphone.style.marginLeft = "5%";
		backgroundsmartphone.style.zIndex = "30";
		backgroundsmartphone.style.minWidth = "90%";
		backgroundsmartphone.style.maxWidth = "90%";
		backgroundsmartphone.style.minHeight = "70%";
		ampliarcontenido.style.display = "none";
		noampliarcontenido.style.display = "block";
	}

	if (nombregaleriaactual == "Galería Principal") {
		backgroundsmartphone.style.background = principal1;
		estilosbackground();

	} else if(nombregaleriaactual == "Playas"){
		backgroundsmartphone.style.background = playageneral1;
		estilosbackground();

	} else if(nombregaleriaactual == "Playa cruz del Mar"){
		backgroundsmartphone.style.background = playacruzdelmar1;
		estilosbackground();


	} else if(nombregaleriaactual == "Playa de Regla"){
		backgroundsmartphone.style.background = playaderegla1;
		estilosbackground();

	} else if(nombregaleriaactual == "Playa del Molino"){
		backgroundsmartphone.style.background = playadelmolino1;
		estilosbackground();

	} else if(nombregaleriaactual == "Playa de las Canteras"){
		backgroundsmartphone.style.background = playalascanteras1;
		estilosbackground();

	} else if(nombregaleriaactual == "Monumentos"){
		backgroundsmartphone.style.background = monumentos1;
		estilosbackground();

	} else if(nombregaleriaactual == "Flora General"){
		backgroundsmartphone.style.background = flora1;
		estilosbackground();

	} else if(nombregaleriaactual == "Fauna General"){
		backgroundsmartphone.style.background = faunageneral1;
		estilosbackground();

	} else if(nombregaleriaactual == "Fauna Camaleones"){
		backgroundsmartphone.style.background = faunacamaleones1;
		estilosbackground();

	} else if(nombregaleriaactual == "Fiestas y Eventos"){
		backgroundsmartphone.style.background = fiestasyeventos1;
		estilosbackground();

	} else if(nombregaleriaactual == "Puestas de Sol"){
		backgroundsmartphone.style.background = puestasdesol1;
		estilosbackground();
	}
}

//-------------------------------------------------
function noampliarsmartphone() {
	var backgroundsmartphone = document.getElementById('contenido');
	var ampliarcontenido = document.getElementById('ampliarcontenido');
	var noampliarcontenido = document.getElementById('noampliarcontenido');
				//Establezco las propiedades CSS
	backgroundsmartphone.style.position = "relative";
	backgroundsmartphone.style.marginLeft = "auto";
	backgroundsmartphone.style.zIndex = "8";
	backgroundsmartphone.style.minWidth = "400px";
	backgroundsmartphone.style.maxWidth = "560px";
	backgroundsmartphone.style.minHeight = "260px";
	backgroundsmartphone.style.maxHeight = "340px";
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
//Desplegable para menu superior que sea accionado con el hover del ratón y termine al perder el foco volviendo a dejar display=none
function menusuperiordesplegable(id) {
	var nombredemenu = document.getElementById(id);

	nombredemenu.style.display = 	"block";

// Escribir enlaces dentro del menu superior "album"
	var albums = '<UL class="ulcomunlistas">';
	albums += '<LI class="lidesplegable"><A href="#" class="linkmenusuperior">Flora</A></LI>';
	albums += '<LI class="lidesplegable"><A href="#" class="linkmenusuperior">Fauna</A></LI>';
	albums += '<LI class="lidesplegable"><A href="#" class="linkmenusuperior">Playas</A></LI>';
	albums += '<LI class="lidesplegable"><A href="#" class="linkmenusuperior">Monumentos</A></LI>';
	albums += '<LI class="lidesplegable"><A href="#" class="linkmenusuperior">Puestas de sol</A></LI>';
	albums += '<LI class="lidesplegable"><A href="#" class="linkmenusuperior">Fiestas y Eventos</A></LI>';
	albums += '</UL>';
	document.getElementById('albumcaja3').innerHTML = albums;
/*
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
*/
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


//----------------------------------------------Cambiar Galería de Imágenes-----------------------------------------
//Función para seleccionar todos las clases del selector de imágenes
function claseseleccion() {
   var claseselector = document.getElementsByClassName('selectorimagen');
      var x;

      for (x = 0; x < claseselector.length; x++) {
         claseselector[x].style.backgroundRepeat = "no-repeat";
         claseselector[x].style.backgroundSize = "auto";
         claseselector[x].style.backgroundPosition = "center";
      }
}

//Función para cargar las nuevas imágenes en el selector de imágenes
function rotargaleria(imagen) {
//Común
   var imagen;
   var fin = ".jpg'" + ")";

   var img1 = document.getElementById('selectorimagen1');
   var img2 = document.getElementById('selectorimagen2');
   var img3 = document.getElementById('selectorimagen3');
   var img4 = document.getElementById('selectorimagen4');
   var img5 = document.getElementById('selectorimagen5');
   var img6 = document.getElementById('selectorimagen6');
   var img7 = document.getElementById('selectorimagen7');
   var img8 = document.getElementById('selectorimagen8');
   var img9 = document.getElementById('selectorimagen9');
   var img10 = document.getElementById('selectorimagen10');
   var img11 = document.getElementById('selectorimagen11');
   var img12 = document.getElementById('selectorimagen12');
   var img13 = document.getElementById('selectorimagen13');
   var img14 = document.getElementById('selectorimagen14');
   var img15 = document.getElementById('selectorimagen15');
   var img16 = document.getElementById('selectorimagen16');
   var img17 = document.getElementById('selectorimagen17');
   var img18 = document.getElementById('selectorimagen18');
   var img19 = document.getElementById('selectorimagen19');
   var img20 = document.getElementById('selectorimagen20');

//Variables individuales
   var principal = "url" + "(" + "'" + "./images/1_chipiona_general/thumbnail/";
   var playageneral = "url" + "(" + "'" + "./images/2_playas/1_general/thumbnail/";
   var playaderegla = "url" + "(" + "'" + "./images/2_playas/2_playa_de_regla/thumbnail/";
   var playacruzdelmar = "url" + "(" + "'" + "./images/2_playas/3_playa_cruz_del_mar/thumbnail/";
   var playadelmolino = "url" + "(" + "'" + "./images/2_playas/4_playa_del_molino/thumbnail/";
   var playalascanteras = "url" + "(" + "'" + "./images/2_playas/5_playa_las_canteras/thumbnail/";
   var monumentos = "url" + "(" + "'" + "./images/3_monumentos/thumbnail/";
   var flora = "url" + "(" + "'" + "./images/4_flora/thumbnail/";
   var faunageneral = "url" + "(" + "'" + "./images/5_fauna/1_general/thumbnail/";
   var faunacamaleones = "url" + "(" + "'" + "./images/5_fauna/2_camaleones/thumbnail/";
   var fiestasyeventos = "url" + "(" + "'" + "./images/6_fiestas_y_eventos/1_general/thumbnail/";
   var puestasdesol = "url" + "(" + "'" + "./images/7_puestas_de_sol/thumbnail/";

//Guardar Selector de imagenes actual en id=galeriaimagenesactual
	var nombregaleriaactual = document.getElementById("galeriaimagenesactual");

   if (imagen == "principal") {
//Página principal
      img1.style.background = principal + "1" + fin;
      img2.style.background = principal + "2" + fin;
      img3.style.background = principal + "3" + fin;
      img4.style.background = principal + "4" + fin;
      img5.style.background = principal + "5" + fin;
      img6.style.background = principal + "6" + fin;
      img7.style.background = principal + "7" + fin;
      img8.style.background = principal + "8" + fin;
      img9.style.background = principal + "9" + fin;
      img10.style.background = principal + "10" + fin;
      img11.style.background = principal + "11" + fin;
      img12.style.background = principal + "12" + fin;
      img13.style.background = principal + "13" + fin;
      img14.style.background = principal + "14" + fin;
      img15.style.background = principal + "15" + fin;
      img16.style.background = principal + "16" + fin;
      img17.style.background = principal + "17" + fin;
      img18.style.background = principal + "18" + fin;
      img19.style.background = principal + "19" + fin;
      img20.style.background = principal + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Galería Principal";

   } else if (imagen == "playageneral"){
//Playa_general
      img1.style.background = playageneral + "1" + fin;
      img2.style.background = playageneral + "2" + fin;
      img3.style.background = playageneral + "3" + fin;
      img4.style.background = playageneral + "4" + fin;
      img5.style.background = playageneral + "5" + fin;
      img6.style.background = playageneral + "6" + fin;
      img7.style.background = playageneral + "7" + fin;
      img8.style.background = playageneral + "8" + fin;
      img9.style.background = playageneral + "9" + fin;
      img10.style.background = playageneral + "10" + fin;
      img11.style.background = playageneral + "11" + fin;
      img12.style.background = playageneral + "12" + fin;
      img13.style.background = playageneral + "13" + fin;
      img14.style.background = playageneral + "14" + fin;
      img15.style.background = playageneral + "15" + fin;
      img16.style.background = playageneral + "16" + fin;
      img17.style.background = playageneral + "17" + fin;
      img18.style.background = playageneral + "18" + fin;
      img19.style.background = playageneral + "19" + fin;
      img20.style.background = playageneral + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Playas";

   }  else if (imagen == "playaderegla") {
      img1.style.background = playaderegla + "1" + fin;
      img2.style.background = playaderegla + "2" + fin;
      img3.style.background = playaderegla + "3" + fin;
      img4.style.background = playaderegla + "4" + fin;
      img5.style.background = playaderegla + "5" + fin;
      img6.style.background = playaderegla + "6" + fin;
      img7.style.background = playaderegla + "7" + fin;
      img8.style.background = playaderegla + "8" + fin;
      img9.style.background = playaderegla + "9" + fin;
      img10.style.background = playaderegla + "10" + fin;
      img11.style.background = playaderegla + "11" + fin;
      img12.style.background = playaderegla + "12" + fin;
      img13.style.background = playaderegla + "13" + fin;
      img14.style.background = playaderegla + "14" + fin;
      img15.style.background = playaderegla + "15" + fin;
      img16.style.background = playaderegla + "16" + fin;
      img17.style.background = playaderegla + "17" + fin;
      img18.style.background = playaderegla + "18" + fin;
      img19.style.background = playaderegla + "19" + fin;
      img20.style.background = playaderegla + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Playa de Regla";

   }  else if (imagen == "playacruzdelmar") {
      img1.style.background = playacruzdelmar + "1" + fin;
      img2.style.background = playacruzdelmar + "2" + fin;
      img3.style.background = playacruzdelmar + "3" + fin;
      img4.style.background = playacruzdelmar + "4" + fin;
      img5.style.background = playacruzdelmar + "5" + fin;
      img6.style.background = playacruzdelmar + "6" + fin;
      img7.style.background = playacruzdelmar + "7" + fin;
      img8.style.background = playacruzdelmar + "8" + fin;
      img9.style.background = playacruzdelmar + "9" + fin;
      img10.style.background = playacruzdelmar + "10" + fin;
      img11.style.background = playacruzdelmar + "11" + fin;
      img12.style.background = playacruzdelmar + "12" + fin;
      img13.style.background = playacruzdelmar + "13" + fin;
      img14.style.background = playacruzdelmar + "14" + fin;
      img15.style.background = playacruzdelmar + "15" + fin;
      img16.style.background = playacruzdelmar + "16" + fin;
      img17.style.background = playacruzdelmar + "17" + fin;
      img18.style.background = playacruzdelmar + "18" + fin;
      img19.style.background = playacruzdelmar + "19" + fin;
      img20.style.background = playacruzdelmar + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Playa cruz del Mar";

   }  else if (imagen == "playadelmolino") {
      img1.style.background = playadelmolino + "1" + fin;
      img2.style.background = playadelmolino + "2" + fin;
      img3.style.background = playadelmolino + "3" + fin;
      img4.style.background = playadelmolino + "4" + fin;
      img5.style.background = playadelmolino + "5" + fin;
      img6.style.background = playadelmolino + "6" + fin;
      img7.style.background = playadelmolino + "7" + fin;
      img8.style.background = playadelmolino + "8" + fin;
      img9.style.background = playadelmolino + "9" + fin;
      img10.style.background = playadelmolino + "10" + fin;
      img11.style.background = playadelmolino + "11" + fin;
      img12.style.background = playadelmolino + "12" + fin;
      img13.style.background = playadelmolino + "13" + fin;
      img14.style.background = playadelmolino + "14" + fin;
      img15.style.background = playadelmolino + "15" + fin;
      img16.style.background = playadelmolino + "16" + fin;
      img17.style.background = playadelmolino + "17" + fin;
      img18.style.background = playadelmolino + "18" + fin;
      img19.style.background = playadelmolino + "19" + fin;
      img20.style.background = playadelmolino + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Playa del Molino";

   }  else if (imagen == "playalascanteras") {
      img1.style.background = playalascanteras + "1" + fin;
      img2.style.background = playalascanteras + "2" + fin;
      img3.style.background = playalascanteras + "3" + fin;
      img4.style.background = playalascanteras + "4" + fin;
      img5.style.background = playalascanteras + "5" + fin;
      img6.style.background = playalascanteras + "6" + fin;
      img7.style.background = playalascanteras + "7" + fin;
      img8.style.background = playalascanteras + "8" + fin;
      img9.style.background = playalascanteras + "9" + fin;
      img10.style.background = playalascanteras + "10" + fin;
      img11.style.background = playalascanteras + "11" + fin;
      img12.style.background = playalascanteras + "12" + fin;
      img13.style.background = playalascanteras + "13" + fin;
      img14.style.background = playalascanteras + "14" + fin;
      img15.style.background = playalascanteras + "15" + fin;
      img16.style.background = playalascanteras + "16" + fin;
      img17.style.background = playalascanteras + "17" + fin;
      img18.style.background = playalascanteras + "18" + fin;
      img19.style.background = playalascanteras + "19" + fin;
      img20.style.background = playalascanteras + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Playa de las Canteras";

   }  else if (imagen == "monumentos") {
      img1.style.background = monumentos + "1" + fin;
      img2.style.background = monumentos + "2" + fin;
      img3.style.background = monumentos + "3" + fin;
      img4.style.background = monumentos + "4" + fin;
      img5.style.background = monumentos + "5" + fin;
      img6.style.background = monumentos + "6" + fin;
      img7.style.background = monumentos + "7" + fin;
      img8.style.background = monumentos + "8" + fin;
      img9.style.background = monumentos + "9" + fin;
      img10.style.background = monumentos + "10" + fin;
      img11.style.background = monumentos + "11" + fin;
      img12.style.background = monumentos + "12" + fin;
      img13.style.background = monumentos + "13" + fin;
      img14.style.background = monumentos + "14" + fin;
      img15.style.background = monumentos + "15" + fin;
      img16.style.background = monumentos + "16" + fin;
      img17.style.background = monumentos + "17" + fin;
      img18.style.background = monumentos + "18" + fin;
      img19.style.background = monumentos + "19" + fin;
      img20.style.background = monumentos + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Monumentos";

   }  else if (imagen == "flora") {
      img1.style.background = flora + "1" + fin;
      img2.style.background = flora + "2" + fin;
      img3.style.background = flora + "3" + fin;
      img4.style.background = flora + "4" + fin;
      img5.style.background = flora + "5" + fin;
      img6.style.background = flora + "6" + fin;
      img7.style.background = flora + "7" + fin;
      img8.style.background = flora + "8" + fin;
      img9.style.background = flora + "9" + fin;
      img10.style.background = flora + "10" + fin;
      img11.style.background = flora + "11" + fin;
      img12.style.background = flora + "12" + fin;
      img13.style.background = flora + "13" + fin;
      img14.style.background = flora + "14" + fin;
      img15.style.background = flora + "15" + fin;
      img16.style.background = flora + "16" + fin;
      img17.style.background = flora + "17" + fin;
      img18.style.background = flora + "18" + fin;
      img19.style.background = flora + "19" + fin;
      img20.style.background = flora + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Flora General";

   }  else if (imagen == "faunageneral") {
      img1.style.background = faunageneral + "1" + fin;
      img2.style.background = faunageneral + "2" + fin;
      img3.style.background = faunageneral + "3" + fin;
      img4.style.background = faunageneral + "4" + fin;
      img5.style.background = faunageneral + "5" + fin;
      img6.style.background = faunageneral + "6" + fin;
      img7.style.background = faunageneral + "7" + fin;
      img8.style.background = faunageneral + "8" + fin;
      img9.style.background = faunageneral + "9" + fin;
      img10.style.background = faunageneral + "10" + fin;
      img11.style.background = faunageneral + "11" + fin;
      img12.style.background = faunageneral + "12" + fin;
      img13.style.background = faunageneral + "13" + fin;
      img14.style.background = faunageneral + "14" + fin;
      img15.style.background = faunageneral + "15" + fin;
      img16.style.background = faunageneral + "16" + fin;
      img17.style.background = faunageneral + "17" + fin;
      img18.style.background = faunageneral + "18" + fin;
      img19.style.background = faunageneral + "19" + fin;
      img20.style.background = faunageneral + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Fauna General";

   }  else if (imagen == "faunacamaleones") {
      img1.style.background = faunacamaleones + "1" + fin;
      img2.style.background = faunacamaleones + "2" + fin;
      img3.style.background = faunacamaleones + "3" + fin;
      img4.style.background = faunacamaleones + "4" + fin;
      img5.style.background = faunacamaleones + "5" + fin;
      img6.style.background = faunacamaleones + "6" + fin;
      img7.style.background = faunacamaleones + "7" + fin;
      img8.style.background = faunacamaleones + "8" + fin;
      img9.style.background = faunacamaleones + "9" + fin;
      img10.style.background = faunacamaleones + "10" + fin;
      img11.style.background = faunacamaleones + "11" + fin;
      img12.style.background = faunacamaleones + "12" + fin;
      img13.style.background = faunacamaleones + "13" + fin;
      img14.style.background = faunacamaleones + "14" + fin;
      img15.style.background = faunacamaleones + "15" + fin;
      img16.style.background = faunacamaleones + "16" + fin;
      img17.style.background = faunacamaleones + "17" + fin;
      img18.style.background = faunacamaleones + "18" + fin;
      img19.style.background = faunacamaleones + "19" + fin;
      img20.style.background = faunacamaleones + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Fauna Camaleones";

   }  else if (imagen == "fiestasyeventos") {
      img1.style.background = fiestasyeventos + "1" + fin;
      img2.style.background = fiestasyeventos + "2" + fin;
      img3.style.background = fiestasyeventos + "3" + fin;
      img4.style.background = fiestasyeventos + "4" + fin;
      img5.style.background = fiestasyeventos + "5" + fin;
      img6.style.background = fiestasyeventos + "6" + fin;
      img7.style.background = fiestasyeventos + "7" + fin;
      img8.style.background = fiestasyeventos + "8" + fin;
      img9.style.background = fiestasyeventos + "9" + fin;
      img10.style.background = fiestasyeventos + "10" + fin;
      img11.style.background = fiestasyeventos + "11" + fin;
      img12.style.background = fiestasyeventos + "12" + fin;
      img13.style.background = fiestasyeventos + "13" + fin;
      img14.style.background = fiestasyeventos + "14" + fin;
      img15.style.background = fiestasyeventos + "15" + fin;
      img16.style.background = fiestasyeventos + "16" + fin;
      img17.style.background = fiestasyeventos + "17" + fin;
      img18.style.background = fiestasyeventos + "18" + fin;
      img19.style.background = fiestasyeventos + "19" + fin;
      img20.style.background = fiestasyeventos + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Fiestas y Eventos";

   } else if (imagen == "puestasdesol") {
      img1.style.background = puestasdesol + "1" + fin;
      img2.style.background = puestasdesol + "2" + fin;
      img3.style.background = puestasdesol + "3" + fin;
      img4.style.background = puestasdesol + "4" + fin;
      img5.style.background = puestasdesol + "5" + fin;
      img6.style.background = puestasdesol + "6" + fin;
      img7.style.background = puestasdesol + "7" + fin;
      img8.style.background = puestasdesol + "8" + fin;
      img9.style.background = puestasdesol + "9" + fin;
      img10.style.background = puestasdesol + "10" + fin;
      img11.style.background = puestasdesol + "11" + fin;
      img12.style.background = puestasdesol + "12" + fin;
      img13.style.background = puestasdesol + "13" + fin;
      img14.style.background = puestasdesol + "14" + fin;
      img15.style.background = puestasdesol + "15" + fin;
      img16.style.background = puestasdesol + "16" + fin;
      img17.style.background = puestasdesol + "17" + fin;
      img18.style.background = puestasdesol + "18" + fin;
      img19.style.background = puestasdesol + "19" + fin;
      img20.style.background = puestasdesol + "20" + fin;
      claseseleccion();
		nombregaleriaactual.innerHTML = "Puestas de Sol";

   } else {
      alert("Hay un error y no se está cargando la galería correctamente");
   }
}
