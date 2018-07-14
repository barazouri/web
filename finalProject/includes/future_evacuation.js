
$(function() {
    $("#future_evacuation").submit(function() {
        var date = $("#date").val();
        var time = $("#time").val();
        var address = $("#address").val();
        var dataString = 'time=' + time + '&date=' + date + '&address=' + address;
        console.log(dataString);

        $("#loader").show();
        $("#loader").fadeIn(300).html('<span class="loading">Loading..</span>');
        jQuery.support.cors = true;
        $.ajax({
            type: "POST",
            url: "server/action.php",
            data: dataString,
            cache: true,
            success: function(html){
                $("#loader").after(html);
                $("#loader").hide();
            }  
        });
        return false;
    });
       

        $('li').click(function(e){
            console.log("stuck");
            var id=(parent.attr('id').replace('id_park_',''));
            var data = 'id_park=' + id;
            var parent= $(this).parent();
            jQuery.support.cors = true;
            $.ajax({
                type: "POST",
                url: "server/action.php",
                data: data,
                cache: true,
                success: function(){
                    parent.remove();
                }  
            });

            });
     
     });

