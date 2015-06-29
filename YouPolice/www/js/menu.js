$(".linkmenu").click(function(event){
    event.preventDefault();
            $("#loaddeding").show();
    $("#loaddingStaget").hide();
    var hreflink = $(this).attr("href");
     $("#loaddingStaget").load(hreflink+usId);
});

$(".linkLocatemenu").click(function(event){
    event.preventDefault();
    $("#loaddeding").show();
    $("#loaddingStaget").hide();
    var hreflink = $(this).attr("href");
     $("#loaddingStaget").load(hreflink);
});
        $("#loaddeding").hide();
    $("#loaddingStaget").show();

