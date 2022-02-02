<?php

$message = [
    'api_token' => 'skZ7MaKw79RyU61ggJC0ORXZCuJ5P6SqEesbnz3KVoaUgvIMUenx05wt9VhP', //'api_ключ, указан здесь https://stickcrm.by/settings/integrations',
    'order' => [
        'phone' => $_POST['i_phone'], //Телефон
        'name' => $_POST['i_name'], //ФИО


        'source_id' => 255, //Источник, указать id источника в StickCRM
        'manager_id' => 749, //Менеджер, указать id менеджера в StickCRM

        'products' => [
            //Товар 1
            [
                'offer_id' => 15181, //id товара в StickCRM
                'price' => 39.60, //цена товара в заказе
                'quantity' => 1, //кол-во товара в заказе
                //'comment' => '' //комментарий к товару
            ],
        ],
    ],
];

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://stickcrm.by/api/orders');
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($message));
$result = json_decode(curl_exec($curl), true);


if(isset($result['order']['number'])){
    $orderNumber = $result['order']['number'];
    $string =  "Ваш заказ № $orderNumber успешно создан!<br>Менеджер свяжется с вами в течении 15 минут";
}else{
    $string = "Произошла ошибка";
}?>

<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="utf-8">
        <title>Демо для StickCrm.by</title>
        <link href="style.css" rel="stylesheet">
    </head>
    <body id="page-top">
    <header>
        <h1><?php echo $string;?></h1>
        <a href="/"><h2>Вернуться назад</h2></a>
    </header>
    </body>
</html>


