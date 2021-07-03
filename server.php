<?php
//получение данных от jSON - декодирование из jSON

 $_POST = json_decode(file_get_contents("php://input"), true);

echo var_dump($_POST);