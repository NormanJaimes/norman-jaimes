<?php

function clearString($string) {
	$string = trim($string);
	$string = stripslashes($string);
	$string = htmlspecialchars($string);
  $string = filter_var($string, FILTER_SANITIZE_STRING);

	return $string;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$error = '';
	$success = '';

	if (!empty($_POST['nombre_formulario']) && !empty($_POST['correo_formulario']) && !empty($_POST['mensaje_formulario'])) {
		$nombre = $_POST['nombre_formulario'];
		$correo = $_POST['correo_formulario'];
		$mensaje = $_POST['mensaje_formulario'];

		$nombre = clearString($nombre);
		$correo = clearString($correo);
		$mensaje = clearString($mensaje);

		$nombre = utf8_encode($nombre);
		$correo = utf8_encode($correo);
		$mensaje = utf8_encode($mensaje);

		if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
			$error .= 'Ingresa un correo válido';
		} else {
			$message = '';
			$message .= 'Nombre: <b>' . $nombre . '</b><br/>';
			$message .= 'Correo electrónico: <b>' . $correo . '</b><br/>';
			$message .= 'Mensaje: <b>' . $mensaje . '</b><br/>';

      mail("normane_@hotmail.com", "Desde un ejemplo :)", $message);
      // mail("tuCorreo@dominio.no_se", "Desde un ejemplo 🙂", $message);


			$success .= 'mensaje de que todo salió bien';
			header("location: gracias.html");
		}

	} else {
		$error .= 'Llena todos los campos.<br/>';
	}
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
	<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" >
		<input type="text" placeholder="nombre" name="nombre_formulario"/>
		<input type="text" placeholder="Correo" name="correo_formulario"/>
		<textarea placeholder="mensaje" name="mensaje_formulario"></textarea>
		
		<input type="submit" value="Enviar">

		<?php if (!empty($error)): ?>
			<p><?php echo $error; ?></p>
		<?php endif ?>

		<?php if (!empty($success)): ?>
			<p><?php echo $success; ?></p>
		<?php endif ?>
	</form>
</body>
</html>