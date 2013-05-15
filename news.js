// JavaScript Document
var qsParm = new Array();
var apptID;
var year, day, month, clinicID, uname, pword;
var id, uname, pword;
window.onload = function() {
	start();
}
function start() {

	$("#dialog-form-add").dialog({
		autoOpen : false,
		height : 300,
		width : 300,
		modal : true,
		buttons : {
			"Submit" : function() {
				$('#addClinicsForm').submit();
				$(this).dialog("close");
				var myNode = document.getElementById("top");
				myNode.innerHTML = '';
				getClinics();
			},
			Cancel : function() {
				$(this).dialog("close");
			}
		},
		close : function() {

		}
	});
	$("#dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 300,
		modal : true,
		buttons : {
			"Submit" : function() {
				$('#clinicsForm').submit();

				$(this).dialog("close");
				var myNode = document.getElementById("top");
				myNode.innerHTML = '';
				getNews();

			},

			Cancel : function() {
				$(this).dialog("close");
			}
		},
		close : function() {

		}
	});

}

function edit(clinic_id) {
	//alert(sched.toString() + " " + dat);
	oFormObject = document.forms['clinicsForm'];
	oFormObject.elements["clinic_id"].value = clinic_id;
	//apptID=id;
	//alert(id);
	$("#dialog-form").dialog("open");
	//

}

function add() {
	//alert(sched.toString() + " " + dat);
	$("#dialog-form-add").dialog("open");
	//apptID=id;

}

function getNews() {
	var events = '';
	//alert("Getting news");
	var myNode = document.getElementById("top");

	$.ajax({
		url : 'http://66.175.220.37/medicard/mcard/admin/getClinics.php', //+ encodeURI(qsParm['key']),
		type : 'GET',
		async : true,
		data : null,
		crossDomain : true,
		//dataType: 'json',
		contentType : "application/x-www-form-urlencoded; application/json",
		success : function(json) {
			//var myNode = document.getElementById("top");
			//myNode.innerHTML = '';
			var obj = jQuery.parseJSON(json);
			//alert(obj.appointment);
			//alert(obj);
			$.each(obj.cont, function(i, cont) {
				//alert(cont.news_id);
				events += "<h3>Clinic ID: " + cont.clinic_id + " | Clinic Name: " + cont.name + "</h3><div>Name: " + cont.name + "<br>Priority: " + cont.priority + "<br>Clinic Hours: " + cont.clinicHours + "<br>Latitude: " + cont.latitude + "<br>Longitude: " + cont.longitude + "<br>Landline: " + cont.landline + "<br>Address: " + cont.city + "<br><ul id='icons' class='ui-widget ui-helper-clearfix'><li class='ui-state-default ui-corner-all' title='edit'><span class='ui-icon ui-icon-pencil' onclick='edit(" + cont.clinic_id + ")')></span></li></ul></div>";

			});

			document.getElementById("top").innerHTML = "<div id='accordion'>" + events + "</div>";
			//$('#top').append("<div id='accordion'>"+events+"</div>");
			//myNode.innerHTML = events;
			$("#accordion").accordion();
			//$.jStorage.set(key, json.token)
			//$.mobile.changePage("html/main0101.html?"+json.token);

		},
		error : function(err) {
			//alert("Invalid username/password");

		}
	}, 'jsonp');

}

function login() {
	var clin = '';

	$.ajax({
		url : 'http://66.175.220.37/medicard/mcard/clinicview/loginClinic.php?uname=' + uname + '&pword=' + pword, //+ encodeURI(qsParm['key']),
		type : 'GET',
		async : false,
		data : null,
		crossDomain : true,
		//dataType: 'json',
		contentType : "application/x-www-form-urlencoded; application/json",
		success : function(json) {
			var obj = jQuery.parseJSON(json);

			$.each(obj.clinic, function(i, clinic) {
				//alert(clinic.fk_clinic_id);
				clinicID = clinic.fk_clinic_id;
				alert("Login successful!");

			});

			//$("#clinSelect").combobox();

			//$.jStorage.set(key, json.token)
			//$.mobile.changePage("html/main0101.html?"+json.token);

		},
		error : function(err) {
			//alert("Invalid username/password");
		}
	}, 'jsonp');

}

function changeClinic() {
	clinicID = document.getElementById("clinSelect").value;
	//alert(clinicID);
	getAllAppointments();
}

