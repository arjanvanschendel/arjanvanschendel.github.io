var menu =  '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
                '<a class="navbar-brand" href="index.html">Av$</a>' +
                '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
                '<span class="navbar-toggler-icon"></span>' +
                '</button>' +
                '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
                '<ul class="navbar-nav mr-auto">' +
                    '<li class="nav-item active">' +
                        '<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>' +
                    '</li>' +
                    '<li class="nav-item dropdown">' +
                        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
                            'CS:GO' +
                        '</a>' +
                        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
                            '<a class="dropdown-item" href="bindgenerator.html">Bind generator</a>' +
                            '<a class="dropdown-item" href="stratroulette.html">StratRoulette</a>' +
                        '</div>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a class="nav-link" href="videos.html">Important video</a>' +
                    '</li>' +
                '</ul>' +
                '</div>' +
            '</nav>';

document.getElementById("mainMenu").innerHTML = menu;