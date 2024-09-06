<?php

session_start();
// Configuración de la base de datos
$servername = "localhost";
$username = "root"; // Usuario por defecto en WampServer
$password = ""; // Contraseña por defecto en WampServer (vacía si no se ha cambiado)
$port= 3307;
$dbname = "usuarios_panela";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recoger datos del formulario
$usuario = $_POST['usuario'];
$email = $_POST['email'];
$password = $_POST['password'];


//Verificando si existen registros con el mismo usuario:
$veriUs = $conn->prepare("SELECT COUNT(*) FROM lista_registro WHERE usuario= ?");
$veriUs->bind_param("s", $usuario);
$veriUs->execute();
$veriUs->bind_result($conteo);
$veriUs->fetch();

$veriUs->close();

//Verificando si existen registros con el mismo email:

    $veriEm = $conn->prepare("SELECT COUNT(*) FROM lista_registro WHERE email = ?");
    $veriEm->bind_param("s", $email);
    $veriEm->execute();
    $veriEm->bind_result($conteo1);
    $veriEm->fetch();
    
    $veriEm->close();

if($conteo==0 && $conteo1==0){ //sino se encontraron registros con el usuario o el correo.
    
    // Encriptar la contraseña
$password_hashed = password_hash($password, PASSWORD_DEFAULT);

// Preparar y ejecutar la consulta
$sql =$conn->prepare("INSERT INTO lista_registro (usuario, email, passw) VALUES (?,?,?)");
$sql->bind_param("sss", $usuario, $email,$password_hashed);

if ($sql->execute()) {

    echo json_encode(array("status" =>"success", "mensaje"=>"Bienvenido $usuario , el Registro ha sido exitoso."));
    
}else {

    echo json_encode(array("status" =>"error", "mensaje"=>"Lo sentimos. Hubo un error a realizar el registro. ")); 
    
}

}else {

    echo json_encode(array("status" =>"error", "mensaje"=>"Usuario y/o email no disponible. Intenta con otro Usuario/email")); 
    
}

// Cerrar conexión
$conn->close();
    


?>