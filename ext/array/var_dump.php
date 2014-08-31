<?php

$arr = [
    'val_1',
    'val_2',
    'val_3'
];
var_dump($arr);
var_dump(json_encode($arr));

$arr = [
    'key_1' => 'val_1',
    'key_2' => 'val_2',
    'key_3' => 'val_3'
];
var_dump($arr);
var_dump(json_encode($arr));

$arr = [
    'users' => [
        'paul' => [
            'eye' => 'brawn',
            'height' => 178
        ],
        'alex' => [
            'eye' => 'green',
            'height' => 180
        ],
        'petr' => [
            'eye' => 'blue',
            'height' => 175
        ]
    ]
];
var_dump($arr);
var_dump(json_encode($arr));
