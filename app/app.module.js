'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
    'ngRoute',
    'ngAnimate',
    // ...which depens on the `core` module
    'core',
    // ...and the `phoneList` module
    'phoneList',
    // ...and the `phoneDetail` module
    'phoneDetail',
]);
