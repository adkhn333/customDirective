app
.directive('f2uCity', function($timeout) {
    return {
        restrict: 'E',
        require: '^f2uCity',
        scope: {
            cities: '=',
            label: '@',
            model: '=',
            triggerZone: '&'
        },
        replace: true,
        controller: function($scope) {
            $scope.tempp = $scope.$parent;
        },
        link: function(scope, element, attribute, controller) {
            scope.selector = function() {
                console.log(scope.tempp);
                scope.triggerZone({selectedCity: scope.model});
            }
            if(attribute.color == 'dark') {
                scope.color = 'item-dark';
            }
            else {
                scope.color = 'item-light';
            }
        },
        templateUrl: 'js/directives/city.html'
    }
})
.directive('f2uZone', function() {
    return {
        restrict: 'E',
        scope: {
            label: '@',
            zones: '=',
            triggerLocation: '&',
            model: '='
        },
        controller: function() {
            
        },
        replace: true,
        link: function(scope, element, attribute) {
            if(attribute.color == 'dark') {
                scope.color = 'item-dark';
            }
            else {
                scope.color = 'item-light';
            }
        },
        templateUrl: 'js/directives/zone.html'
    }
})
.directive('f2uLocation', function() {
    return {
        restrict: 'E',
        scope: {
            label: '@',
            locations: '=',
            model: '=',
            triggerLocation: '&'
        },
        replace: true,
        link: function(scope, element, attribute) {
            if(attribute.color == 'dark') {
                scope.color = 'item-dark';
            }
            else {
                scope.color = 'item-light';
            }
        },
        templateUrl: 'js/directives/location.html'
    }
})

// .directive('withoutZone', function() {
//     return {
//         restrict: 'A',
//     }
// })

;