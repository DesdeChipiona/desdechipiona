/*
-----------------------------------------------
Pantalla de carga al entrar
-----------------------------------------------
*/

function preCarga () {
	var z = document.getElementById("CajaCargando");
	z.style.display = "none";

	alert('Construcción del sitio WEB Beta 0.3\nEstamos aún desarrollando la página por lo que puedes experimentar errores puntuales que iremos corrigiendo o lentitud en la visualización de imágenes.\n\nDisfrútala y vuelve a visitarnos pronto.\n\n\n')

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
		cargarBiblioteca = "carrusel_1_playas_general.php";
	} else if (x == "monumentos") {
		seleccion = "#2desplegableizq";
		cargarBiblioteca = "carrusel_2_monumentos.php";
	} else if (x == "flora") {
		seleccion = "#3desplegableizq";
		cargarBiblioteca = "carrusel_3_flora.php";
	} else if (x == "faunageneral") {
		seleccion = "#4desplegableizq";
		cargarBiblioteca = "carrusel_4_fauna_general.php";
	} else if (x == "fiestasyeventos") {
		seleccion = "#5desplegableizq";
		cargarBiblioteca = "carrusel_5_fiestas_y_eventos_general.php";
	} else if (x == "puestasdesol") {
		seleccion = "#6desplegableizq";
		cargarBiblioteca = "carrusel_6_puestasdesol.php";
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
