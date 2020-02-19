$(document).ready(function(){



    $(".myBoxcolor").click(function(){

        var getColor = $(this).attr("id");


        $(".change").attr("style" , 'background: ' + getColor + '!important; color:white;');
        
        $(".text").attr("style" , 'color:white');



    });


});