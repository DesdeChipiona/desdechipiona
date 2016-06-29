//Desplegar REDES
var estadoRedes = "false";

function activarRedes() {
	var redes = document.getElementById("redesDesplegado");
	redes.style.display = "block";
}
function desactivarRedes() {
	var redes = document.getElementById("redesDesplegado");
	redes.style.display = "none";
}

function EventoRedes() {
	if (estadoRedes == "false") {
		activarRedes();
		estadoRedes = "true";
	} else if (estadoRedes == "true") {
		desactivarRedes();
		estadoRedes = "false";
	}
}

//Desplegar MENÚ
var estadoMenu = "false";

function activarMenu() {
	var menu = document.getElementById("menuDesplegado");
	menu.style.display = "block";
}
function desactivarMenu() {
	var menu = document.getElementById("menuDesplegado");
	menu.style.display = "none";
}

function EventoMenu() {
	if (estadoMenu == "false") {
		activarMenu();
		estadoMenu = "true";
	} else if (estadoMenu == "true") {
		desactivarMenu();
		estadoMenu = "false";
	}
}

//Desplegar Menú central
