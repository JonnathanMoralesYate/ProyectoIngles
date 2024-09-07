<?php
session_start();
$conexion= new mysqli("localhost", "root", "", "usuarios_panela", 3307);

    $user=$_POST["user"];
    $passw=$_POST["passw"];

    if ($conexion->connect_error) {
        die("Conexión fallida: " . $conexion->connect_error);
    }
    $consulta= $conexion->prepare("SELECT passw, usuario from lista_registro where usuario=? or email=? ");
    $consulta->bind_param("ss", $user, $user);
    $consulta->execute();
    $consulta->bind_result($clave, $user1);




    if($consulta->fetch()){
     if (password_verify($passw, $clave)) {
         // La contraseña es correcta
         echo json_encode(array("status" =>"success", "message"=>"Bienvenido $user1, iniciaste sesión exitosamente.", "nombre"=>$user1));
     }else{
        echo json_encode(array("status" =>"error", "message"=>" Usuario o contrasena incorrectos"));      
 }
 } else {
     // La contraseña es incorrecta
     echo json_encode(array("status" =>"error", "message"=>" Usuario o contrasena incorrectos"));  
 }

$consulta->close();
 
 

 $conexion->close();  
 
?>
 
 
 
 
 
 
 
 
 
 
 
 
 
 