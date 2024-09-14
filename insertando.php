<?php
$servidor= "localhost";
$usuario= "root";
$clave= "";
$bd= "usuarios_panela";
$puerto= 3307;

$conexion= new mysqli($servidor, $usuario, $clave,$bd,$puerto);

if($conexion->connect_error){
    die("Conexión fallida". $conexion->connect_error);
}

$autor=$conexion->real_escape_string($_POST['autor']);
$comentario= $conexion->real_escape_string($_POST['comentario']);

$consulta= "INSERT INTO comentarios_panela(autor, comentario, fecha) VALUES ('$autor', '$comentario',NOW())";



if($conexion->query($consulta)===true){
    echo "comentario registrado exitosamente";

}else{
    echo "Hubo un error al procesar el comentario. ";
}
$conexion->close();

?>