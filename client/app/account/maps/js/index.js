var google = require('angular2-google-maps');
var app = angular.module('myApp', []);
var info ;
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';


app.service('Map', function($q) {
    
        this.cargarPuntos = function(){

        var myLatLng = {lat: 43.36866139999999, lng: -8.402187000000026};
          this.marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng,
            animation: google.maps.Animation.DROP,
	    title: "Ando aqui"	
        });
         this.map.setCenter(myLatLng);
        
    //    
     var myLatLng = {lat: 43.36772939999999, lng: -8.407792299999983};
          this.marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng,
            animation: google.maps.Animation.DROP,
               icon: iconBase + 'info-i_maps.png',

	    title: "Punto con mas salidas de bicis. 5 bicis disponibles"	
        });
         this.map.setCenter(myLatLng);
        
            
        var myLatLng = {lat: 43.36867480000001, lng:-8.419831799999997};
          this.marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng,
            animation: google.maps.Animation.DROP,
	     title: "Pavimento en mal estado"	
        });
         this.map.setCenter(myLatLng);
        
            
       /* var myLatLng = {lat: 43.36866139999999, lng: -8.402187000000026};
          this.marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng,
            animation: google.maps.Animation.DROP,
	    title: "Ando aqui"	
        });
         this.map.setCenter(myLatLng);
        
            
        var myLatLng = {lat: 43.36866139999999, lng: -8.402187000000026};
          this.marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng,
            animation: google.maps.Animation.DROP,
	    title: "Ando aqui"	
        });
         this.map.setCenter(myLatLng);
        
            
        var myLatLng = {lat: 43.36866139999999, lng: -8.402187000000026};
          this.marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng,
            animation: google.maps.Animation.DROP,
	    title: "Ando aqui"	
        });
         this.map.setCenter(myLatLng);*/
        

	}	
    
 this.cargarLoc = function(str1, str2){

        var myLatLng = {lat: str1, lng: str2};
          this.marker = new google.maps.Marker({
            map: this.map,
            position: myLatLng,
            animation: google.maps.Animation.DROP,
	    title: "Pavimentor en mmal estado"	
        });
         this.map.setCenter(myLatLng);
        

	}	        
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(43.363217, -8.426390999999967),
            zoom: 80,
            disableDefaulUI: false    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
	    this.cargarPuntos();
        this.map.setZoom(20);
      //  this.cargarLoc(43.363217, -8.426390999999967);
    }
    
    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    this.addMarker = function(res) {
      //  if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP,
	    title: this.info	
        });
        this.map.setCenter(res.geometry.location);
    }
	

    
});

app.controller('newPlaceCtrl', function($scope, Map) {
    
    $scope.place = {};
    
    $scope.search = function() {
        $scope.apiError = false;
        Map.search($scope.searchPlace)
        .then(
            function(res) { // success
                Map.addMarker(res);
                $scope.place.name = res.name;
                $scope.place.info = res.info;
                $scope.place.lat = res.geometry.location.lat();
                $scope.place.lng = res.geometry.location.lng();
               
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }
    
    $scope.send = function() {
      //  alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng + ','+ $scope.place.info);    
      
    }
    
    Map.init();
});

export default app.name;
