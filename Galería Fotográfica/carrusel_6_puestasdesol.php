<!--Selector de imágenes-->
	<UL id="ulselectorimagen"> <!--Con PHP traigo las imágenes por lotes del directorio y proceso con JS-->
		<?php
		header('Content-Type: text/html; charset=UTF-8');
		$ArrayImagenes = array();
		$ArrayImagenesLongitud = "";
		$DirectorioImagenes = "images/7_puestas_de_sol/thumbnail/";
		$DirectorioImagenesHigh = "images/7_puestas_de_sol/high/";

			function playas()
			{
				global $ArrayImagenes;
				global $ArrayImagenesLongitud;
				global $DirectorioImagenes;
				global $DirectorioImagenesHigh;
				$DirectorioActual = dir($DirectorioImagenes);//Leer directorio y devolver array

				while (($archivo = $DirectorioActual->read()) !== false)//Bucle que crea array
					{
						if (eregi("gif", $archivo) || eregi("jpg", $archivo) || eregi("png", $archivo)){//Filtro solo imágenes
							array_push($ArrayImagenes, $archivo);
						}
					}
				$DirectorioActual->close();
				sort($ArrayImagenes);//Ordenar array
				$ArrayImagenesLongitud = count($ArrayImagenes);

				$x = 0;
				while ($x < $ArrayImagenesLongitud) //Bucle que pinta el array
					{
						echo '<LI><IMG class="selectorimagen" onclick="cambiarBackgroundHigh('."$ArrayImagenesLongitud, '$DirectorioImagenesHigh', '$x'".')" src="'.$DirectorioImagenes.$ArrayImagenes[$x].'"></LI>'."\n";
						$x++;
					}
				return $ArrayImagenes;//Devolver valor
			}

		playas();
	?>
	</UL>
