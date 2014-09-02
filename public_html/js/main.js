
function parse_text(text) {
    return text;
}

function work_on_input(form) {
    var text_area = $(form).find('#input-value');
    var source_text = text_area.val();

    // parsing text and get JSON
    var json_final = parse_text(source_text);

    // render functions
    var render_result = '';
    render_result += '<pre>' + show_json_color(json_final) + '</pre>';
    render_result += '<pre>' + show_rectangles(json_final) + '</pre>';

    // show result
    $('#render').html(render_result);
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