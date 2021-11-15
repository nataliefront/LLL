<?php

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$msg = $_POST['user_message'];

$token = "2065493540:AAG_lmV3RMugCJZBZhVgJv_9wOB2pU2Zoj8";
$chat_id = "-794604660";
$arr = array (
    'Імя: ' => $name,
    'Телефон: ' => $phone,
    'Повідомлення: ' => $msg
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
// $headers  = 'MIME-Version: 1.0' . "\r\n";
//     $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

if ($sendToTelegram) {
    header ('Location: Thanks.html');
} else {
    echo "Error";
}

?>