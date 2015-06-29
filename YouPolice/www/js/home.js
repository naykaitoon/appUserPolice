    $("#loaddeding").hide();
$("#loaddingStaget").load("menu.html");

$(".link").click(function(event){
    event.preventDefault();
        $("#loaddeding").show();
    $("#loaddingStaget").hide();
    var hreflink = $(this).attr("href");
     $("#loaddingStaget").load(hreflink+usId);
     $("#navbt").trigger("click");
});

$(".linkLocate").click(function(event){
    event.preventDefault();
        $("#loaddeding").show();
    $("#loaddingStaget").hide();
    var hreflink = $(this).attr("href");
     $("#loaddingStaget").load(hreflink);
    $("#navbt").trigger("click");
});

$(".nav li").click(function(event){
    event.preventDefault();
    $(".nav li").removeClass("active").addClass("uactive");
    $(this).addClass("active");
});
/////////////// ckeckLocationGPS  /////////////
function ckeckLocation(){

        navigator.geolocation.getCurrentPosition(function(position){
                }, function(error){
                    if(error.code == PositionError.PERMISSION_DENIED)
                    {
                        alert("ไม่สามารถใช้สิทธิ ในการใช้ GPS");
                    }
                    else if(error.code == PositionError.POSITION_UNAVAILABLE)
                    {
                        alert("ไม่พบอุปกรณ์ GPS");
                    }
                    else if(error.code == PositionError.TIMEOUT)
                    {
                        alert("การรองขอ ตำแหน่ง ใช้เวลานานเกินปกติ");
                    }
                    else
                    {
                        alert("error occured");
                    }
                }, { maximumAge: 1500, timeout: 8000, enableHighAccuracy: true });
          
}
/////////////// END ckeckLocationGPS  /////////////
function logout(){
    $.session.clear();
    window.location.href = "index.html";
}
/////////////// GetHTML javaScript  /////////////
   function httpGet(theUrl)
{

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send();
    return xmlHttp.responseText;
}

/////////////// END GetHTML javaScript  /////////////
 setInterval(function(){
                document.addEventListener("deviceready", function(){  
                    ckeckLocation();
                }, false);
     
},10000);

