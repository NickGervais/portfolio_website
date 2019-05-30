$("#landing").on('click', function(){
    console.log('hi');
    console.log($("#landing").hasClass("landing-action"));
    if($("#landing").hasClass("landing-action")){
        $("#landing").removeClass("landing-action");
        $("#title").removeClass("title-action");
        $("#my-name").removeClass("my-name-action");
        $("#me").removeClass("me-action");
        $("#about-me").removeClass("about-me-action");
    } else {
        $("#landing").addClass("landing-action");
        $("#title").addClass("title-action");
        $("#my-name").addClass("my-name-action");
        $("#me").addClass("me-action");
        $("#about-me").addClass("about-me-action");
    }
});