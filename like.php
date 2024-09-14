<?php
// Incrementa el número de likes para un comentario dado

// Establecer la conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuarios_panela";
$port= 3307;

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname, $port);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos JSON enviados en la solicitud
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$liker=$data['name'];

$consulta="INSERT INTO dando_like (id_comentario, liker, fecha) values ('$id','$liker',NOW())";

// Incrementar el número de likes
$sql = "UPDATE comentarios_panela SET likes = likes + 1 WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();

// Verificar si la actualización fue exitosa
if ($stmt->affected_rows > 0) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}

// Cerrar la conexión
$stmt->close();
$conn->close();
?>
