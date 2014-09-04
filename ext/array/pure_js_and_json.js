
var arr = [
    'val_1',
    'val_2',
    'val_3'
];

var associative_arr = {
    'key_1': 'val_1',
    'key_2': 'val_2',
    'key_3': 'val_3'
};

var multiple_level_array = {
    users: {  // <-- JSON do not allow key without quotes. This is allow only in JS object.

        paul: {
            eye: "brawn",
            height: 178,
            email: "some@some.com",
            phones: [
                "555-5551",
                "555-5552",
                "555-5553"
            ]
        },

        'alex': {                // <-- key in apostrophe
            'eye': 'green',      // <-- type: string
            'height': 180,       // <-- type: int
            'email': '',         // <-- empty string
            'phones': [          // <-- type: array
                '555-5555'
            ]
        },

        "petr": {                // <-- key in quote quotation the quoted text
            "eye": "blue",
            "height": 175,
            "email": null,       // <-- type: null
            "phones": []         // <-- empty array
        }
    },

    status: 'success',
    queryId: 112656
};
