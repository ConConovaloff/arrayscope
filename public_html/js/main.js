

function work_on_input(form) {
    var textarea = $(form).find('textarea');
    var source_text = textarea.val();
    var obj_by_json = JSON.parse(source_text);
    var json_by_object = JSON.stringify(obj_by_json, null, 4);
    $('#render').html('<pre>'
        + json_by_object
        + '</pre><br><pre>'
        + json_syntax_highlight(json_by_object)
        + '</pre>');
}


function json_syntax_highlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
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

//var obj = {a:1, 'b':'foo', c:[false,'false',null, 'null', {d:{e:1.3e5,f:'1.3e5'}}]};
//var str = JSON.stringify(obj, undefined, 4);

//output(str);
//output(syntaxHighlight(str));


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