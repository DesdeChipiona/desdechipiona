<DIV id="carruselZ">
	<DIV id="cajaselectorimagenes">
	<!--Selector de imágenes-->

		<UL id="ulselectorimagen"> <!--Con PHP traigo las imágenes por lotes del directorio y proceso con JS-->
			<?php
			//include 'carrusel_chipiona_general.php';
			//include 'carrusel_1_playas_general.php';
			//include 'carrusel_2_monumentos.php';
			//include 'carrusel_3_flora.php';
			//include 'carrusel_4_fauna_general.php';
			//include 'carrusel_5_fiestas_y_eventos_general.php';
			//include 'carrusel_6_puestasdesol.php';

			header('Content-Type: text/html; charset=UTF-8');
			$ArrayImagenes = array();
			$ArrayImagenesLongitud = "";
			$DirectorioImagenes = "images/1_chipiona_general/thumbnail/";
			$DirectorioImagenesHigh = "images/1_chipiona_general/high/";

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
	</DIV>

	<DIV id="cajacarrusel">
		<DIV id="carruselsuperior"></DIV>
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

		<IMG id="fondoimagen" src="images/fondoCarrusel.jpg" alt="carrusel"/>

		<DIV id="centrarimagenactual">
			<IMG id="imagenactual" src="images/presentacion.png" alt="presentación"/>
		</DIV>

		<DIV id="carruselinferior"></DIV>
	</DIV>
</DIV>
