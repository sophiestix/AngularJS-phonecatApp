'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('phoneDetail').
    component('phoneDetail', {
        template: 'TBD: detail view for <span>{{ $ctrl.phoneID }}</span>',
        controller: ['$routeParams',
            function PhoneDetailController($routeParams) {
                this.phoneID = $routeParams.phoneID;
            }
        ]
    });
