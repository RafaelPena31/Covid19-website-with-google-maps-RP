/* COPYRIGHT CONTENT - ALL DEVELOPER RIGHTS RESERVED TO @RAFAEL_AUGUSTO_PENA  */
/* THE SCRIPT CODE HAS YOUR RIGHTS RESERVED TO GOOGLE INC (RESPONSIBLE FOR THE USED API), THE TRACKCORONA.LIVE WEBSITE 
(FOR THE API THAT PROVIDES DATA UPDATE AND THE DEVELOPER @RAFAEL_AUGUSTO_PENA FOR CODE HANDLING */
/* Start init map */
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {

        zoom: 4,
        center: new google.maps.LatLng(-15.799771, -47.860789),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    /* End init map */
    var uga = new Array();
    var json;

    var select = document.getElementById("selectDash");


    axios.get('https://www.trackcorona.live/api/countries')
        .then(function (response) {
            json = response;
            json = json.data.data;
            for (var i = 0; i < json.length; i++) {
                var data = json[i];
                /* Start Map */
                latLng = new google.maps.LatLng(data.latitude, data.longitude);
                var local = json[i].location;
                var confirmed = json[i].confirmed;
                var dead = json[i].dead;
                var updated = json[i].updated;
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    icon: { url: 'img/imgMap/m3.png', scaledSize: new google.maps.Size(30, 30) },
                    title: 'Local: ' + local + ' - Confirmed: ' + confirmed + ' - Dead: ' + dead + ' - Updated: ' + updated,
                });
                uga.push(marker);
                console.log(uga[1]);
                var infowindow = new google.maps.InfoWindow();

                google.maps.event.addListener(uga[i], 'mouseover', function () {
                    infowindow.setContent('Local: ' + json[i].location + ' - Confirmed: ' + json[i].confirmed + ' - Dead: ' + json[i].dead + ' - Updated: ');
                    infowindow.open(map, uga[i]);
                });
                google.maps.event.addListener(uga[i], 'mouseout', function () {
                    infowindow.close()
                });
                console.log(i)
                /* End map */
                var option = document.createElement('option');
                attb = (i + 1);
                option.setAttribute('value', attb);
                select.appendChild(option);
                option.innerHTML = local;
            } 
        })
        .catch(function (error) {
            console.log(error)
        })
}