app
.service('Location', function($q, $http) {
    var obj = {};
    obj = {
        selectCity: function() {
            var defer = $q.defer();
            // var cityData = firebase.database().ref('city');
            // cityData.on('value', function(data) {
            //     defer.resolve(data.val());
            // });
            $http.get('data/address.json').success(function(response) {
                defer.resolve(response.city);
            });
            return defer.promise;
        },
        selectZoneByCity: function(cityId) {
            var defer = $q.defer();
            // var zoneData = firebase.database().ref('zone/' + cityId);
            // zoneData.on('value', function(data) {
            //     defer.resolve(data.val());
            // });
            $http.get('data/address.json').success(function(response) {
                defer.resolve(response.zone[cityId]);
            });
            return defer.promise;
        },
        selectLocationByZone: function(cityId, zoneId) {
            var defer = $q.defer();
            // var locationData = firebase.database().ref('location/' + cityId + '/' + zoneId);
            // locationData.on('value', function(data) {
            //     defer.resolve(data.val());
            // });
            $http.get('data/address.json').success(function(response) {
                defer.resolve(response.location[cityId][zoneId]);
            });
            return defer.promise;
        },
        selectLocationByCity: function(cityId) {
            var defer = $q.defer();
            // var locationData = firebase.database().ref('location/' + cityId);
            // locationData.on('value', function(data) {
            //     console.log(data.val());
            //     defer.resolve(data.val());
            // });
            $http.get('data/address.json').success(function(response) {
                var temp = [];
                console.log(response.location);
                angular.forEach(response.location[cityId], function(data) {
                    angular.forEach(data, function(obj) {
                        temp.push(obj);
                    });
                });
                defer.resolve(temp);                
            });
            return defer.promise;
        }
    };
    return obj;
});