
$(function() {
    $("#future_evacuation").submit(function() {
        var date = $("#date").val();
        var time = $("#time").val();
        var address = $("#address").val();
        var dataString = 'time=' + time + '&date=' + date + '&address=' + address;//if desc is empty it will send empty string	
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
});