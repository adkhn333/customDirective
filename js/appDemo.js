var app = angular.module('app', []);

app
.controller('mainCtrl', function($scope, MainService, $timeout) {

    $scope.option = "";
    $scope.la = "asd";
    MainService.getValues().then(function(response) {
        $scope.value = response.city;
    });
    $scope.showValue = function(v) {
        // alert('value is: '+v);
        console.log('value is: '+v);
    }
    $timeout(function() {
        console.log($scope.la);
    }, 2000);
})

.service('MainService', function($q, $http) {
    var Obj = {};
    Obj = {
        getValues: function() {
            var defer = $q.defer();
            $http.get('data/data.json').success(function(response) {
                defer.resolve(response);
            });
            return defer.promise;
        }
    };
    return Obj;
})

.directive('demo', function($timeout) {
    return {
        restrict: 'E',
        scope: {
            label: '=',
        },
        replace: true,
        link: function(s,e,a) {
            $timeout(function(){
                s.label = "asdasd";
            },1000);
        },
        template: '<div><h1>{{label}}</h1></div>'
        // '<ul>'+
        //     '<li '+
        //         'ng-repeat="v in val" '+
        //         'ng-model="model" '+
        //         'ng-click="click()">'+
        //             '{{v.cityName}}'+
        //     '</li>'+
        // '</ul>'
    }
})

;