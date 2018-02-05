(function () {

'use strict';

angular
    .module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('truth', TruthFilter);

    MsgController.$inject = ['$scope', '$filter'];

    function MsgController($scope, $filter) {

        $scope.name = "Yaakov";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;
        $scope.btnText = "Feed Yaakov";

        $scope.sayMessage = function () {
            var msg = "Yaakov likes to eat healthy snacks at night!";
            var output = $filter('uppercase')(msg);
            return output;
        };

        $scope.sayTruthMessage = function () {
            var msg = "Yaakov likes to eat healthy snacks at night!";
            return msg;
        };

        $scope.feedYaakov = function () {
            if ($scope.stateOfBeing == "fed") {
                $scope.stateOfBeing = "hungry";
                $scope.btnText = "Feed Yaakov";
            }
            else {
                $scope.stateOfBeing = "fed";
                $scope.btnText = "Unfeed Yaakov";
            }
        };
    }

    function TruthFilter() {
        return function(input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

})();
