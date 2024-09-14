<?php
// archivo: get_comments.php

header('Content-Type: application/json');

// Conectar a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuarios_panela";
$port = 3307;

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener los comentarios
$sql = "SELECT id, autor, comentario, fecha, likes FROM comentarios_panela ORDER BY fecha DESC";
$result = $conn->query($sql);

$comentarios = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $comentarios[] = $row;
    }
}

// Cerrar la conexión
$conn->close();

// Devolver los datos en formato JSON
echo json_encode($comentarios);
?>
