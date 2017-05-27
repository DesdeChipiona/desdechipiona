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
