$("#message-form").submit(function(event){
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    let url = "https://hooks.slack.com/services/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"
    let payload={"channel": "#portfolio-page", "username": email , "text": name + ': ' + message, "icon_emoji": ":ghost:"};
    $.post(url,JSON.stringify(payload), function(data){
        console.log(data);
        $("#message-form").trigger("reset");
        $("#thank-you").addClass("ty");
        event.preventDefault();
    });
    event.preventDefault();
});

$("#clear-ty").on('click', function(){
    $("#thank-you").removeClass("ty");
});