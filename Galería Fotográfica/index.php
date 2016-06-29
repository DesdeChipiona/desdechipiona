
<!DOCTYPE html>
<HTML lang="es">
   <HEAD>
		<?php
			include 'html-head.php';
		?>
	</HEAD>

	<BODY onkeydown="return false" onLoad="preCarga()">
		<DIV id="CajaCargando">
			<DIV id="Cargando"></DIV>
			<DIV id="CargandoTitulo">
				Desde Chipiona
				<BR/>
				Cargando...
				<BR/>
				<P>La galería fotográfica estará cargada en unos instantes</P>
				<BR/>
				<IMG src="images/cargando.gif" alt="Cargando DesdeChipiona"/>
			</DIV>
		</DIV>
		<?php
			include 'menu-superior-fixed.php';
			include 'titulo-y-logo.php';
		?>

		<DIV id="carruselZ">
			<DIV id="cajaselectorimagenes">
			<?php
				include 'carrusel_chipiona_general.php';
				//include 'carrusel_1_playas_general.php';
				//include 'carrusel_2_monumentos.php';
				//include 'carrusel_3_flora.php';
				//include 'carrusel_4_fauna_general.php';
				//include 'carrusel_5_fiestas_y_eventos_general.php';
				//include 'carrusel_6_puestasdesol.php';
			?>
			</DIV>

			<?php
				include 'carrusel.php';
			?>
		</DIV>

		<?php
			include 'desplegable-izquierda.php';
		?>

		<DIV id="cajacontenido">
			<?php
				include 'contenido.php';

				include 'barra-derecha.php';
			?>
		</DIV>

		<?php
			include 'pie-de-pagina.php';
		?>
	</BODY>
</HTML>
