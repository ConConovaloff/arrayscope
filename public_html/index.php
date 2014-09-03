<!DOCTYPE html>
<html>
<head>
    <title>Arrayscope</title>
    <meta charset="utf-8">

    <!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

    <!-- Bootstrap JS -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

    <!-- Bootstrap patch -->
    <link rel="stylesheet" href="./css/fix_submenu_shit.css">

    <!-- our code -->
    <script src="./js/main.js?<?php print time();?>"></script>
    <link rel="stylesheet" type="text/css" href="./css/main.css?<?php print time();?>">
</head>
<body>

<nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">

        <!-- brand -->
        <div class="col-md-offset-2 col-md-5">
            <a class="navbar-brand" href="#">Arrayscope</a>

            <!-- Left navigation buttons -->
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Examples<span class="caret"></span></a>
                    <ul class="dropdown-menu" onclick="show_example(this); return false" role="menu">

                        <!-- JS -->
                        <li class="dropdown-submenu"><a href="#">JavaScript</a>
                            <ul class="dropdown-menu">
                                <li><a href="#" id="js-pure">json</a></li>
                                <li><a href="#" id="js-var">with variable</a></li>
                            </ul>
                        </li>

                        <!-- PHP -->
                        <li class="dropdown-submenu"><a href="#">PHP</a>
                            <ul class="dropdown-menu">
                                <li><a href="#" id="php-pure">pure</a></li>
                                <li><a href="#" id="php-vardump">var_dump</a></li>
                                <li><a href="#" id="php-printr">print_r</a></li>
                            </ul>
                        </li>

                        <!-- Python -->
                        <li class="dropdown-submenu"><a href="#">Python</a>
                            <ul class="dropdown-menu">
                                <li><a href="#" id="py-pure">pure</a></li>
                                <li><a href="#" id="py-pprint">pprint</a></li>
                            </ul>
                        </li>

                    </ul>
                </li>
            </ul>
        </div>

        <div class="col-md-3">
            <!-- Right navigation buttons -->
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">MORE<span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Advanced use</a></li>
                        <li><a href="#">Comments</a></li>
                        <li><a href="#">Share</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="col-md-2">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dev<span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">For developers</a></li>
                        <!-- <li class="divider"></li> -->
                        <li><a onclick="all_random_color()">Random color</a></li>
                        <li><a onclick="all_set_border()" >Borders</a></li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</nav>

<!-- main input code -->
<div class="container-fluid">
    <div class="col-md-offset-2 col-md-8">
        <form onsubmit="work_on_input(this); return false;" role="form">
                <textarea id="input-value" class="form-control" cols="80" rows="20">
{"users":{"paul":{"eye":"brawn","height":178},"alex":{"eye":"green","height":180},"petr":{"eye":"blue","height":175}}}
                </textarea>
            <button type="submit" id="render-button" class="glyphicon glyphicon-eye-open btn btn-primary btn-lg center-block">
                View
            </button>
        </form>
    </div>
</div>


<!-- right absolute logger -->
<!--<div class="col-md-2 text-danger" id="logger">-->
<div id="logger">
</div>


<!-- there must be magic -->
<div class="container-fluid">
    <div class="col-md-offset-2 col-md-8">
        <div id="render">

        </div>
    </div>
</div>


<!-- git hub ribbon -->
<a href="https://github.com/ConConovaloff/arrayscope">
    <img id="github-me" src="./img/github_me_ribbon.png" alt="Fork me on GitHub">
</a>


</body>
</html>
