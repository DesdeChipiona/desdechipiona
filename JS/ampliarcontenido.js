function ampliar()
         {

				//Establezco las propiedades CSS
            document.getElementById("contenido").style.position = "absolute"
            document.getElementById("contenido").style.zIndex = "30"
            document.getElementById("contenido").style.width = "100%"
            document.getElementById("contenido").style.height = "100%"
				document.getElementById("ampliarcontenido").style.display = "none"
				document.getElementById("noampliarcontenido").style.display = "block"
            }

function noampliar()
			{
				document.getElementById("contenido").style.position = "relative"
            document.getElementById("contenido").style.zIndex = "8"
            document.getElementById("contenido").style.width = "90%"
            document.getElementById("contenido").style.height = "60%"
				document.getElementById("ampliarcontenido").style.display = "block"
				document.getElementById("noampliarcontenido").style.display = "none"
			}
