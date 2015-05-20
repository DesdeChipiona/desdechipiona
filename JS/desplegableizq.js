//Función para mostrar Descripción junto a las imágenes del menu desplegable a la izquierda siendo "n" el numero del desplegable
function descripcion(n)
         {
            x =  n + "desplegableletras"

				//Establezco las propiedades CSS
            document.getElementById(x).style.opacity = "1"
         }

//Función para "mouseout" que cierra la descripción cuando pierde el foco
function nodescripcion()
			{
				document.getElementById(x).style.opacity = "0"
			}



