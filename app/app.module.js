'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
    'ngRoute',
    // ...which depens on the `core` module
    'core',
    // ...and the `phoneList` module
    'phoneList',
    // ...and the `phoneDetail` module
    'phoneDetail',
    
]);
