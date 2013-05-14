// JavaScript Document
var qsParm = new Array();
var apptID;
var year, day, month, clinicID, uname, pword;
var id, uname, pword;
window.onload = function() {
     start();
}

function start() {
    //alert("Submitted"); 
    //navigator.app.clearCache();
    //uname=prompt("Enter your username", "");
    //pword=prompt("Enter your password", "");
    //if(uname == "medicard" && pword == "admin") getNews();
    //else alert("Invalid username or password");
    uname=prompt("Please enter your username:","")
    pword=prompt("Please enter your password:","")
    if(uname=="medicard" && pword=="m0b33l1ty")
    getNews();
    else
    {
       alert("Username or password is invalid");
       document.location = "http://66.175.220.37/medicard/mcard/admin/news.html";
    }
    
    $( "#dialog-form-add" ).dialog({
      autoOpen: false,
      height: 300,
      width: 300,
      modal: true,
      buttons: {
        "Submit": function() 
        {
            $('#addNewsForm').submit();
            
        
            /*var val = 0;
            var x=document.getElementById("statSelect").selectedIndex;
            val = document.getElementsByTagName("option")[x].value;
            var ufile = document.getElementById('userfile').value;
            if(val=='') val = 0;
            //alert('appointment id:' + apptID);
            //alert('status:'+ val);
            //alert('remarks:'+ remarks);
            //alert('year:'+ year);
            //alert('month:'+ month);
            //alert('day:'+day);
            
          */
         $( this ).dialog( "close" );
         var myNode = document.getElementById("top");
         myNode.innerHTML = '';
         getNews();
         

        },
        
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        
      }
    });
    $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 300,
      width: 300,
      modal: true,
      buttons: {
        "Submit": function() 
        {
            $('#newsForm').submit();
            
        
            /*var val = 0;
            var x=document.getElementById("statSelect").selectedIndex;
            val = document.getElementsByTagName("option")[x].value;
            var ufile = document.getElementById('userfile').value;
            if(val=='') val = 0;
            //alert('appointment id:' + apptID);
            //alert('status:'+ val);
            //alert('remarks:'+ remarks);
            //alert('year:'+ year);
            //alert('month:'+ month);
            //alert('day:'+day);
            $.ajax(
            {
                url:            'http://66.175.220.37/medicard/mcard/admin/upload.php?file' + ufile,
                type:           'POST',
                async:          true,
                data:           null,
                crossDomain: true,
        
                contentType:    "application/x-www-form-urlencoded; application/json",
                success: function(json) 
                {
                    alert(json);
                   
                },
                error: function(err) 
                {
                    alert("news update failed");
            
                }
            }, 'jsonp');
          */
         $( this ).dialog( "close" );
         var myNode = document.getElementById("top");
         myNode.innerHTML = '';
         getNews();
         

        },
        
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        
      }
    });
		
    
         
    //getNews();
        
   
    //alert("Hello");
    //uname=prompt("Enter your username", "");
    //pword=prompt("Enter your password", "");
    //login();
    //alert(clinicID);
    //alert("Hello");
    
    //alert(currentDate.getFullYear());
    
    //getAllAppointments();
    
    
    //setInterval(function(){getNews()},3000);    
     
    
}



function edit(id){
    //alert(sched.toString() + " " + dat);
    oFormObject = document.forms['newsForm'];
    oFormObject.elements["ID"].value = id;
    //apptID=id;
    //alert(id);
    $( "#dialog-form" ).dialog( "open" );
    //
    
    
}

function add(){
    //alert(sched.toString() + " " + dat);
    $( "#dialog-form-add" ).dialog( "open" );
    //apptID=id;

}

function getNews(){
    var events = '';
    //alert("Getting news");
    var myNode = document.getElementById("top");
         
    $.ajax(
        {
        url:            'http://66.175.220.37/medicard/mcard/news/getNews.php',//+ encodeURI(qsParm['key']),
        type:           'GET',
        async:          true,
        data:           null,
        crossDomain: true,
        //dataType: 'json',
        contentType:    "application/x-www-form-urlencoded; application/json",
        success: function(json) 
        {
            //var myNode = document.getElementById("top");
            //myNode.innerHTML = '';
            var obj = jQuery.parseJSON(json);
            //alert(obj.appointment);
            //alert(obj);
            $.each(obj.cont, function(i, cont)
            {
                //alert(cont.news_id);
                events += "<h3>Date: " + cont.date + " | News ID: " + cont.news_id + " | Title: " + cont.title + "</h3><div> Body: " + cont.body + "<br> <img src='http://66.175.220.37/medicard/mcard/images/" + cont.image + "'/><br><ul id='icons' class='ui-widget ui-helper-clearfix'><li class='ui-state-default ui-corner-all' title='edit'><span class='ui-icon ui-icon-pencil' onclick='edit("+cont.news_id+")')></span></li></ul></div>";
                
                
            });
            
            document.getElementById("top").innerHTML= "<div id='accordion'>" + events + "</div>";
            //$('#top').append("<div id='accordion'>"+events+"</div>");
            //myNode.innerHTML = events;
            $( "#accordion" ).accordion();
            //$.jStorage.set(key, json.token)
            //$.mobile.changePage("html/main0101.html?"+json.token);
            
        },
        error: function(err) 
        {
            //alert("Invalid username/password");
            
        }
        }, 'jsonp');

}


function login(){
    var clin = '';
    
    $.ajax(
        {
        url:            'http://66.175.220.37/medicard/mcard/clinicview/loginClinic.php?uname='+uname+'&pword='+pword,//+ encodeURI(qsParm['key']),
        type:           'GET',
        async:          false,
        data:           null,
        crossDomain: true,
        //dataType: 'json',
        contentType:    "application/x-www-form-urlencoded; application/json",
        success: function(json) 
        {
            var obj = jQuery.parseJSON(json);
            
            $.each(obj.clinic, function(i, clinic)
            {
                //alert(clinic.fk_clinic_id);
                clinicID = clinic.fk_clinic_id;
                alert("Login successful!");
                
                
                
            });
            

            //$("#clinSelect").combobox();
            
            //$.jStorage.set(key, json.token)
            //$.mobile.changePage("html/main0101.html?"+json.token);
            
        },
        error: function(err) 
        {
            //alert("Invalid username/password");
        }
        }, 'jsonp');

}

function changeClinic() {
    clinicID = document.getElementById("clinSelect").value;
    //alert(clinicID);
    getAllAppointments();
}


 
		