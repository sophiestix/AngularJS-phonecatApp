'use strict';

angular.
    module('core.phone').
    factory('Phone', ['$resource',
        function ($resource) {
            return $resource('phones/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: {phoneId: 'phones'},
                    isArray: true // there is a problem, the `phones.json` is an array, so this is true,
                    // but for the detail view, the separate `json` files are objects, so this should be false
                }
            });
        }
    ]);