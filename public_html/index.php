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

    <script src="./js/main.js"></script>
    <link rel="stylesheet" type="text/css" href="./css/main.css">
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
                    <ul class="dropdown-menu" role="menu">
                        <li><a href="#">Json</a></li>
                        <li><a href="#">PHP</a></li>
                        <li><a href="#">PHP -> var_dump</a></li>
                        <li><a href="#">Python</a></li>
                        <li><a href="#">Python -> pprint</a></li>
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
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>

<!-- main input code -->
<div class="container-fluid">
    <div class="col-md-offset-2 col-md-8">
        <form onsubmit="work_on_input(this); return false;" role="form">
<!--            <div class="form-group">-->
                <textarea id="input-value" class="form-control" cols="80" rows="20">
{
    "users" : {
        "paul" : {
            "eye" : "brawn",
            "height" : 178
        },
        "alex" : {
            "eye" : "green",
            "height" : 180
        },
        "petr" : {
            "eye" : "blue",
            "height":175
        }
    }
}
                </textarea>
<!--            </div>-->
            <button type="submit" id="render-button" class="glyphicon glyphicon-eye-open btn btn-primary btn-lg center-block">
                View
            </button>
        </form>
    </div>
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
