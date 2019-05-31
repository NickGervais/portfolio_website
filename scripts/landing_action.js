let landing_action = function(){
    if($("#landing").hasClass("landing-action")){
        $("#landing").removeClass("landing-action");
        $("#title").removeClass("title-action");
        $("#my-name").removeClass("my-name-action");
        $("#me").removeClass("me-action");
        $("#about-me").removeClass("about-me-action");
        $("#landing-cta span").text("more about me");
    } else {
        $("#landing").addClass("landing-action");
        $("#title").addClass("title-action");
        $("#my-name").addClass("my-name-action");
        $("#me").addClass("me-action");
        $("#about-me").addClass("about-me-action");
        $("#landing-cta span").text("less about me");
    }

};
$("#landing-cta span").on('click', function(){
    landing_action();
});
