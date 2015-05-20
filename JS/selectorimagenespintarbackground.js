//Función para dibujar en el background "contenido" la imagen seleccionada según el nombre de la imagen
function muestra(nombre)
         {
				//Asigno variable nombre para la ruta del archivo
            var x = 'url' + "(" + "'" + nombre + "'" + ")";

				var video = document.getElementById("videopresentacion")

				//Establezco las propiedades CSS

					//Ocultar video y detenerlo al pulsar imagen
						document.getElementById("videopresentacion").style.opacity = 0
						document.getElementById("videopresentacion").style.visibility = 0
						video.zIndex = -10;
						video.pause()

					//Dibujar background
						document.getElementById("contenido").style.background = x
						document.getElementById("contenido").style.backgroundSize = "contain"
						document.getElementById("contenido").style.backgroundRepeat = "no-repeat"
						document.getElementById("contenido").style.backgroundColor = "black"
						document.getElementById("contenido").style.backgroundPosition = "50% 50%"
            }

//Funciones para los controles de imágenes

function proximaimg() {
		var imgactual = document.getElementById("contenido").style.backgroundImage
		alert(imgactual)
	}

function anteriorimg() {
		var imgactual = document.getElementById("contenido").style.backgroundImage
		alert(imgactual)
	}

//Función para parar y silenciar vídeo
function videoplay() {
       var video = document.getElementById("videopresentacion");
       var button = document.getElementById("play");
       if (video.paused) {
          video.style.opacity = 1;
			 video.zIndex = 0;
			 document.getElementById("contenido").style.background = "url('')" ;
			 document.getElementById("contenido").style.backgroundColor = "black" ;
			 video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
    }
