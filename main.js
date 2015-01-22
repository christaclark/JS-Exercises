//Just for debugging purposes. Don't actually copy this line! 
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    <!-- Bootstrap core JavaScript
        ================================================== -->
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

  //  <script type="javascript" src="/main.js"></script> 




 // Set up the initial function with nothing in it and initialize jQuery 
    $(function() {
        
        console.log("yes, jQuery loaded");

        function showicon(id) {
            $('#' + id).addClass
        }

        function jsonReader() {
            $.getJSON('data.json', function(obj) {

                $.each(obj.data, function(key, value) {

                    //console.log(value.numericalvalue);

                    $('#items').append('<li class="list-group-item">' + value.display + '<span id="' + value.id + '"></span></li>');

                    if (value.showicon == true) {
                        showicon(value.id);
                    }
            
                });
            });
        }

        jsonReader();

    });
