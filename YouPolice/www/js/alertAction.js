//////////////////  alertSentSOS function  //////////////////////////
function alertSOS(){
             navigator.geolocation.getCurrentPosition(function(position){
                 $("#sosResult").load("http://police.cmhost.me/index.php/timelines/alertAction/"+position.coords.latitude+"/"+position.coords.longitude+"/"+usId+"");
                 $("#alertBt").css("display","none");
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

////////////////// END  alertSentSOS function  //////////////////////////
        $("#loaddeding").hide();
    $("#loaddingStaget").show();