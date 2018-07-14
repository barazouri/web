
$(function() {
    $("#future_evacuation").submit(function() {
        var date = $("#date").val();
        var time = $("#time").val();
        var address = $("#address").val();
        var dataString = 'time=' + time + '&date=' + date + '&address=' + address;
        console.log(dataString);

        jQuery.support.cors = true;
        $.ajax({
            type: "POST",
            url: "server/action.php",
            data: dataString,
            cache: true,
            success: function(html){
                $("#future_evacuation").after(html);
                $('.delete').click(deletePark);
            }  
        });
        return false;
    });
        });

        function deletePark(){
            console.log("stuck");
            var parent= $(this).parent();
            var id=$(this).attr("id");
            jQuery.support.cors = true;
            $.ajax({
                type: "POST",
                url: "server/action.php",
                data: {id_park: id},
                cache: true,
                success: function(){
                    parent.remove();
                    $('.delete').click(deletePark);

                }  
            });

            }
     
        
