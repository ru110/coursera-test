(function() {

    'use strict';

    angular.module('common')

        .service('UserService', UserService);

    UserService.$inject = ['$http', 'APIBasePath'];



    function UserService($http, APIBasePath) {

        var service = this;

        var userData = new Array();

        service.getUserFavMenu = function(favMenuShortName) {

            return $http.get(APIBasePath + '/menu_items/' + favMenuShortName + '.json')

                .then(function success(response) {

                    return response.data;

                }, function error(response) {

                    throw new Error("Failed to fetch the desired result!");

                });

        };

        service.setUserData = function(userDetails) {

            userData = [];

            userData.push(userDetails);

        };

        service.getUserData = function() {

            return userData;

        };



    }

})();