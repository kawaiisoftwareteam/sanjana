<?php
// Same-origin HTTPS -> HTTP proxy for the Django backend on 169.58.202.250:8090
$path = isset($_GET['path']) ? $_GET['path'] : '/';
if (!is_string($path) || $path === '' || $path[0] !== '/') {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode(['detail' => 'Invalid path']);
    exit;
}

$target = 'http://169.58.202.250/sanjana-api' . $path;
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$body = file_get_contents('php://input');

$ch = curl_init($target);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($ch, CURLOPT_TIMEOUT, 20);
$headers = ['Accept: application/json'];
if (!empty($_SERVER['CONTENT_TYPE'])) {
    $headers[] = 'Content-Type: ' . $_SERVER['CONTENT_TYPE'];
}
if ($method === 'POST' || $method === 'PUT' || $method === 'PATCH') {
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$resp = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);
curl_close($ch);

if ($resp === false) {
    http_response_code(502);
    header('Content-Type: application/json');
    echo json_encode(['detail' => 'Backend unreachable', 'error' => $err]);
    exit;
}

http_response_code($code ?: 200);
header('Content-Type: application/json');
echo $resp;
