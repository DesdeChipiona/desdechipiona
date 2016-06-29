<?php
$ArrayPlayas = array();
$ArrayPlayasLongitud = "";
$DirectorioImagenesPlayas = "images/2_playas/1_general/thumbnail/";

	function playas()
	{
		global $ArrayPlayas;
		global $ArrayPlayasLongitud;
		global $DirectorioImagenesPlayas;
		$DirectorioImagenes = dir($DirectorioImagenesPlayas);//Leer directorio y devolver array
		while (($archivo = $DirectorioImagenes->read()) !== false)
			{
				if (eregi("gif", $archivo) || eregi("jpg", $archivo) || eregi("png", $archivo)){//Filtro solo imágenes
					array_push($ArrayPlayas, $archivo);
				}
			}
		$DirectorioImagenes->close();
		sort($ArrayPlayas);//Ordenar array
		$ArrayPlayasLongitud = count($ArrayPlayas);
		print_r($ArrayPlayas);
		return $ArrayPlayas;//Devolver valor
	}

playas();
?>

<BR/><BR/><BR/><BR/><BR/>
<DIV>
	ARRAY: <BR/><BR/>
	<?php
		print_r($ArrayPlayas);
	?>
</DIV>

<BR/><BR/><BR/><BR/><BR/>
<DIV>
	Longitud:<BR/>
	<?php
		echo($ArrayPlayasLongitud);
	?>
</DIV>

<BR/><BR/><BR/><BR/><BR/>
<DIV>
	Calculando:<BR/>
	<?php
		$x = 0;
		while ($x < $ArrayPlayasLongitud)
			{
				echo "$x - $ArrayPlayas[$x] <BR>";
				$x = $x+1;

			}
	?>
</DIV>
