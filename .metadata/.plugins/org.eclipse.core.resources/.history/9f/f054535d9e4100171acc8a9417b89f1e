/**
 * fichier d'appel ajax pour la page home
 */

var ACTION  = 1;

$(document).ready(function() {
	$("#hashtag").hide();
});

function parse(){
	var $urlSend = $("#route").val();
	var sendData = {
		'path' : $("#fileName").val(),
		'hash' : $("#hashtag").val(),
		'action' : ACTION
	};
	$.ajax($urlSend,{
        dataType : "json",
        data: sendData,
        type: 'GET',
        success: function(result) {
        	if(1 == ACTION){
        		displayChart(result);
        	}else if(2 == ACTION){
        		displayMap(result);
        	}else if(3 == ACTION){
        		
        	}else if(4 == ACTION){
        		
        	}else if(5 == ACTION){
        		alert("DELETE ALL DATA DONE !");
        	}
         }, error: function(e) {
         }
     });
	return false;
}

/**
 * Affichage du graph
 * @returns
 */
function displayChart(result){
	$("#chart").html = "";
	var categories = [];
	var occurences = [];
	for(var hashtag in result.data){ 
		categories.push(hashtag);
		occurences.push(result.data[hashtag]);
	}
    var myChart = Highcharts.chart('chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Nombre d\'occurences des hashtags'
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            title: {
                text: 'Occurences'
            }
        },
        series: [{
            name: 'hashtags',
            data: occurences
        }]
    });
}

/**
 * Affichage de la map avec les markers
 * @returns
 */
function displayMap(result){
	var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 46.7867, lng: -71.2676},
        zoom: 6
    });
	for(var tweet in result.data){
		if(tweet.latitude != "NA" && tweet.latitude != "NA"){
			var position = {lat: parseInt(result.data[tweet].latitude), lng: parseInt(result.data[tweet].longitude)};
			var marker = new google.maps.Marker({
			    position: position,
			    map: map,
			    title: result.data[tweet].id
			});
		}
	}
}

/**
 * Choisir l'action à éxecuter
 * @param choix
 * @returns
 */
function changeAction(choix){
	ACTION = choix;
	if(ACTION == 2){
		$("#hashtag").slideDown("speed");
	}else{
		$("#hashtag").slideUp("speed");
	}
}

/**
 * suppression de la base
 */
function deleteBase(){
	ACTION = 5;
	parse();
}

/**
 * Changement d'un fichier
 */
function changeFile(){
	$('#file').click();
}

/**
 * Ajout d'un nouveau fichier
 */
function uploadFile(){
	var $urlSend = $("#route").val();
	var sendData = new FormData($("#formDoc")[0]);
	$.ajax($urlSend,{
		type : 'POST',
		dataType : "text",
		data: sendData,
		processData: false,
		contentType: false,
        success: function(result) {
        	alert("UPLOAD AND PARSING DONE !")
         }, error: function(e) {
         }
     });
	return false;
}

