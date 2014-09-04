<?php

$arr = [
    'val_1',
    'val_2',
    'val_3'
];
print_r($arr);

$arr = [
    'key_1' => 'val_1',
    'key_2' => 'val_2',
    'key_3' => 'val_3'
];
print_r($arr);

$arr = [
    'users' => [
        'paul' => [
            'eye' => 'brawn',
            'height' => 178,
            'email' => 'some@some,com',
            'phones' => [
                '555-5551',
                '555-5552',
                '555-5553'
            ]
        ],
        'alex' => [
            'eye' => 'green',
            'height' => 180,
            'email' => '',
            'phones' => [
                '555-5555'
            ]
        ],
        'petr' => [
            'eye' => 'blue',
            'height' => 175,
            'email' => null,
            'phones' => []
        ]
    ],

    'status' => 'success',
    'queryId' => 112656
];
print_r($arr);