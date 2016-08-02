app.controller('mainCtrl', function($scope, Location, $timeout) {

    $scope.selectedCity = '';
    $scope.selectedZone = '';
    $scope.selectedlocation = '';

    Location.selectCity().then(function(response) {
        $scope.cities = response;
    });

    $scope.selectZone = function(cid) {
        $timeout(function() {
            console.log($scope.selectedCity);
        });
        console.log($scope.selectedCity);
        // $scope.selectedCity = cid;
        $scope.selectedZone = '';
        $scope.selectedLocation = '';
        // Fix For Location Clean Up When City Is Changed
        $scope.locations = [];
        Location.selectZoneByCity(cid).then(function(response) {
            $scope.zones = response;
            console.log($scope.zones);
        });
        if( $scope.selectedZone == null ||
            $scope.selectedZone == undefined ||
            $scope.selectedZone == ''   ) {
            Location.selectLocationByCity(cid).then(function(response) {
                $scope.locations = response;
                console.log(response);
            });
        }
    };

    $scope.selectLocationByZone = function(cid, zid) {
        $scope.selectedZone = zid;
        console.log($scope.selectedZone);
        Location.selectLocationByZone(cid, zid).then(function(response) {
            $scope.locations = response;
            console.log($scope.locations);
        });
    };

    $scope.selectLocation = function(lid) {
        $scope.selectedLocation = lid;
        console.log($scope.selectedLocation);
    }

    // Unattended Service To Select Location Directly By City Id
    // $scope.selectLocationByCity = function(cid) {
    //     Location.selectLocationByCity(cid).then(function(response) {
    //         $scope.locations = response;
    //         console.log(response);
    //     });
    // }
});