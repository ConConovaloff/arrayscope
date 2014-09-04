
function work_on_input(form) {
    var text_area = $(form).find('#input-value');
    var source_text = text_area.val();

    // parsing and get JSON from text
    try{
        var json_final = parse_text(source_text);
    } catch (error) {
        return;
    }

    // render functions
    var render_result = '';
    render_result += render_wrapper(show_json_color, json_final);
    render_result += render_wrapper(show_rectangles, json_final);

    // show result
    $('#render').html(render_result);
}

function parse_text(text_input) {
    try {
        JSON.parse(text_input);
    } catch (error) {
        log_error('Sorry, we are not able to parse it.\n' +
            'If you think we may it, then write to us\n' +
            '<a href="https://github.com/ConConovaloff/arrayscope/issues">' +
            'https://github.com/ConConovaloff/arrayscope/issues' +
            '</a>');
        console.log(error.stack);
        throw error;
    }
    return text_input;
}

function render_wrapper(render_callback, json_input) {
    try {
        var result_html_render = render_callback(json_input);
        return '<pre>' + result_html_render + '</pre>'
    } catch (error) {
        log_error(error.stack);
    }
    return '';
}

function log_error(text_input) {
    var text_html = $("<pre class='text-danger'><li>" + text_input + "</li></pre>");
    $("#logger").append(text_html);
    text_html.animate(
        {opacity:1},
        10000,
        'linear',
        function() {
            text_html.animate(
                {opacity:0},
                2000,
                'linear',
                function() {
                    text_html.remove();
                });
        });
}

////////////////////////////////////////////////////////////////////////////////
// visualise as json color


function show_json_color(json_input) {
    var obj_by_json = JSON.parse(json_input);
    var json_by_object = JSON.stringify(obj_by_json, null, 4);

    var json_clear = json_by_object.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json_clear.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

////////////////////////////////////////////////////////////////////////////////
// visualise as rectangle


function show_rectangles(json_input) {
    var obj_by_json = JSON.parse(json_input);
    return show_rectangles_recursive(obj_by_json);
}

function show_rectangles_recursive(object_input) {
    var html_result = '';

    for (var key in object_input) {
        if (object_input.hasOwnProperty(key)) {
            var value = object_input[key];

            switch(typeof value) {
                case 'object':

                    // null
                    if (value == null) {
                        html_result += '<div class="null">' + key + ': ' + value + '</div>';

                    // object
                    } else {
                        html_result += '<div class="object-name key">'+ key + ':</div>' + '<div class="object-values">';
                        html_result += show_rectangles_recursive(value);
                    }
                    break;
                case 'string':
                    html_result += '<div class="string">' + key + ': ' + value + '</div>';
                    break;
                case 'number':
                    html_result += '<div class="number">' + key + ': ' + value + '</div>';
                    break;
                case 'boolean':
                    html_result += '<div class="boolean">' + key + ': ' + value + '</div>';
                    break;
            }
        }
    }

    return html_result + '</div>';
}

////////////////////////////////////////////////////////////////////////////////
// For frontend

function show_example(elemenent) {
    var examples = {
        'js-pure': '{"users":{' +
            '"paul":{"eye":"brawn","height":178},' +
            '"alex":{"eye":"green","height":180},' +
            '"petr":{"eye":"blue","height":175}}}',
        'php-vardump': $('#template-php-vardump').html(),
        'php-printr': $('#template-php-printr').html(),
        'py-pprint': $('#template-python-pprintr').html()
    };

    if (event.target.id in examples) {
        $('#input-value').val(examples[event.target.id]);
    }
}

////////////////////////////////////////////////////////////////////////////////
// For dev

function all_random_color() {
    $("*").each(function(){
        var hue = 'rgb(' + (Math.floor((Math.random()*254)+1) + ',' + Math.floor((Math.random()*254)+1) + ',' + Math.floor((Math.random()*254)+1)) + ')';
        $(this).css("background-color", hue);
    });
}

function all_set_border() {
    $("*").each(function(){
        $(this).css("border", 'solid 1px');
    });

}