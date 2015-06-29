      var codeImg = random_string(13);
    $("#uploading").hide();

 function random_string(length) {
            if (!length) {
                length = 5;
            }

            var result = "";
            var pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < length; i++) {
                result += pool.charAt(Math.floor(Math.random() * pool.length));
            }

    return result;
        }   
     document.addEventListener("deviceready", function(){

                navigator.geolocation.getCurrentPosition(function(position){
                              document.getElementById("latitude").setAttribute("value",position.coords.latitude);
           						document.getElementById("longitude").setAttribute("value",position.coords.longitude);

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
            }, false);



        
       		document.getElementById("codeImgGen").setAttribute("value",codeImg);
         function captureCamera()
        {
            /*this function opens default camera app and captures a picture. It stores the captured image in application storage. Parameters:
            1. Quality 0-100
            2. Should stores the picture in photo library of phone also or not
            3. Image format png or jpg
            */
          
            intel.xdk.camera.takePicture(10,true,"jpg");
        }
        
        function importLibrary()
        {
            //this function opens default photo library of phone and imports a image into application storage.
            intel.xdk.camera.importPicture();
        }
            
        document.addEventListener("intel.xdk.camera.picture.add",function(event){
             $("#noimg").css("display","none");
   
            var btt = document.getElementById("takePhoto");
            btt.disabled = true;
            btt.innerHTML="กำลังอัพโหลด....";
             $("#uploading").show();
             $("#pictures").hide();
            var image = document.createElement("img");
            //picture name
            var name = event.filename;
            
            //absolute URL of the image
            var url = intel.xdk.camera.getPictureURL(name);
            
              image.src = url;
             image.id=name;
             image.setAttribute("class","img-thumbnail");

            document.getElementById("pictures").appendChild(image);
            
           var c = document.getElementById("codeImgGen").value;
        
                 document.getElementById("sendPic").setAttribute('disabled','true');
  
      intel.xdk.file.uploadToServer(url,"http://police.cmhost.me/index.php/upload/uploadImg/"+c+"", "image/jpg", "updateUploadProgress");
             
                     
  
        });
     function updateUploadProgress(bytesSent,totalBytes)
    {
  
 
    
    }

    document.addEventListener("intel.xdk.file.upload.busy",uploadBusy);
    document.addEventListener("intel.xdk.file.upload",uploadComplete);
    document.addEventListener("intel.xdk.file.upload.cancel",uploadCancelled);

            
 
            
    function uploadBusy(evt)
    {
       alert("Sorry, a file is already being uploaded");
    }

    function uploadComplete(evt)
    {
       if(evt.success==true)
       {
             var btt = document.getElementById("takePhoto");
            btt.removeAttribute("disabled");
            btt.innerHTML="ถ่ายเพิ่ม";
               document.getElementById("sendPic").removeAttribute('disabled');
              $("#uploading").hide();
             $("#pictures").show();
           
       
       }
       else {
          alert("อัพโหลดผิดพลาด "+evt.message);
       }
    }

    function uploadCancelled(evt)
    {
        alert("ไฟร์อัพโหลด ถูกยกเลิก "+evt.localURL);
    }
    function ceckFrom(){
       var lati = document.getElementById("latitude").getAttribute("value");
       var long =  document.getElementById("longitude").getAttribute("value");
       var reqTitles = document.getElementById("reqTitle").getAttribute("value");
        var reqLicensePlate =  document.getElementById("reqLicensePlate").getAttribute("value");
       var reqProvince =   document.getElementById("reqProvince").getAttribute("value");
        if(lati>0&&long>0){
            if(reqTitles.length>3&&reqLicensePlate.length>3&&reqProvince.length>3){
                return true;
            }else{
                
                alert("กรุณาระรุรายละเอียดให้ครบถ้วน");
                return false;
            }
        }else{
            alert("กรุณารอตำแหน่งที่แน่ชัดก่อนส่งข้อมูล");
            return false;
        }
    

    }
        $("#loaddeding").hide();
    $("#loaddingStaget").show();