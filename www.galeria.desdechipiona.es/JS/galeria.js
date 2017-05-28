function cambiarBackgroundHigh(ArrayLongitud, DirectorioImagenes, ImagenActual){
	var imagen = document.getElementById("imagenactual");
	if (ImagenActual <= 9) { //Comprueba número de imagen
		imagen.src = DirectorioImagenes + "00" + ImagenActual + ".jpg";
	} else if (ImagenActual <= 99){
		imagen.src = DirectorioImagenes + "0" + ImagenActual + ".jpg";
	} else {
		imagen.src = DirectorioImagenes + ImagenActual + ".jpg";
	}
}

/*
-----------------------------------------------
Menu desplegable IZQ
-----------------------------------------------
*/
//Mostrar Descripción junto a las imágenes siendo "n" el numero del desplegable
function descripcion(n) {
	x =  n + "desplegableletras";

				//Establezco las propiedades CSS
	document.getElementById(x).style.opacity = "1";
}

//Función para "mouseout" que cierra la descripción cuando pierde el foco
function nodescripcion() {
	document.getElementById(x).style.opacity = "0";
}

//Cambiar Galería actual
function rotargaleria(x) {
	var seleccion = "";
	var cargarBiblioteca = "";
	if (x == "playageneral") {
		seleccion = "#1desplegableizq";
		cargarBiblioteca = "galeria_1_playas_general.php";
	} else if (x == "monumentos") {
		seleccion = "#2desplegableizq";
		cargarBiblioteca = "galeria_2_monumentos.php";
	} else if (x == "flora") {
		seleccion = "#3desplegableizq";
		cargarBiblioteca = "galeria_3_flora_general.php";
	} else if (x == "faunageneral") {
		seleccion = "#4desplegableizq";
		cargarBiblioteca = "galeria_4_fauna_general.php";
	} else if (x == "fiestasyeventos") {
		seleccion = "#5desplegableizq";
		cargarBiblioteca = "galeria_5_fiestas_y_eventos_general.php";
	} else if (x == "puestasdesol") {
		seleccion = "#6desplegableizq";
		cargarBiblioteca = "galeria_6_puestasdesol.php";
	}

function rotar(seleccion, cargarBiblioteca) {
		$(document).ready(function() {
					$(seleccion).click(function(){
						$("#cajaselectorimagenes").load(cargarBiblioteca);
					});
			});
	}
	rotar(seleccion, cargarBiblioteca);
}
