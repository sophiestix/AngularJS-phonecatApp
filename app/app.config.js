'use strict';

angular.
    module('phonecatApp').
    config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/phones', {
                template: '<phone-list></phone-list>' //Determines the view that will be shown, when the URL hash fragment is /phones. 
                //According to the specified template, AngularJS will create an instance of the phoneList component to manage the view. 
                //Note that this is the same markup that we used to have in the index.html file.
            }).
            when('/phones/:phoneID', {
                template: '<phone-detail></phone-detail>' //Determines the view that will be shown, when the URL hash fragment matches /phones/<phoneId>, 
                // where <phoneId> is a variable part of the URL. 
                // In charge of the view will be the phoneDetail component.
                // All variables defined with the : prefix are extracted into the (injectable) $routeParams object.
            }).
            otherwise('/phones'); //Defines a fallback route to redirect to, when no route definition matches the current URL.
            // (Here it will redirect to /phones.)
        }
    ]);