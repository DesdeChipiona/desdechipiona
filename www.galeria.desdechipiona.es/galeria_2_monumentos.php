<!--Selector de imágenes-->
	<UL id="ulselectorimagen"> <!--Con PHP traigo las imágenes por lotes del directorio y proceso con JS-->
		<?php
		header('Content-Type: text/html; charset=UTF-8');
		$ArrayImagenes = array();
		$ArrayImagenesLongitud = "";
		$DirectorioImagenes = "images/3_monumentos/thumbnail/";
		$DirectorioImagenesHigh = "images/3_monumentos/high/";

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
</DIV><!--Este div cierra el bloque, leer más abajo el comentario-->

<DIV id="cajacarrusel">
	<DIV id="cajacontrolimagen">
		<DIV id="controlimagen">
			<DIV id="atras" class="todoslosefectos"></DIV>
			<DIV id="blancoynegro" class="todoslosefectos"></DIV>
			<DIV id="ampliar" class="todoslosefectos"></DIV>
			<DIV id="adelante" class="todoslosefectos"></DIV>
		</DIV>
	</DIV>
	<DIV id="cajaflechaizq" class="cajasflechas">
		<DIV id="flechaizq"></DIV>
	</DIV>

	<DIV id="cajaflechadrh" class="cajasflechas">
		<DIV id="flechadrh"></DIV>
	</DIV>

	<DIV id="centrarimagenactual">
		<IMG id="imagenactual" src="images/presentacion.png" alt="presentación"/>
	</DIV>
<!--El DIV que falta corresponde al de cierre en "galeria.php" para evitar error al importar con "include" ya que se encuentra el bloque para el id="cajaselectorimagenes" inclompleto si aquí lo colocase.
