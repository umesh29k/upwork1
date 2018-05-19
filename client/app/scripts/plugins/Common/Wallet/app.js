/*globals $:false */
'use strict';
/**
 * @ngdoc overview
 * @name getlancerApp
 * @description
 * # getlancerApp
 *
 * Main module of the application.
 */
angular.module('getlancerApp.Common.Wallet', [
    'ngResource',
    'ngSanitize',
    'satellizer',
    'ngAnimate',
    'ui.bootstrap',
    'ui.bootstrap.datetimepicker',
    'ui.router',
    'angular-growl',
    'google.places',
    'angular.filter',
    'ngCookies',
    'angular-md5',
    'ui.select2',
    'ui.select',
    'http-auth-interceptor',
    'vcRecaptcha',
    'angulartics',
    'pascalprecht.translate',
    'angulartics.google.analytics',
    'tmh.dynamicLocale',
    'ngMap',
    'chieffancypants.loadingBar',
    'payment',
    'builder',
    'builder.components',
    'validator.rules',
    'angularMoment',
    'ngFileUpload',
    'oitozero.ngSweetAlert',
    '720kb.socialshare',
    'slugifier'
])
    .config(function($stateProvider, $urlRouterProvider) {
        var getToken = {
            'TokenServiceData': function(TokenService, $q) {
                return $q.all({
                    AuthServiceData: TokenService.promise,
                    SettingServiceData: TokenService.promiseSettings
                });
            }
        };
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('wallets', {
            url: '/wallets',
            templateUrl: 'scripts/plugins/Common/Wallet/views/default/wallet.html',
            resolve: getToken
        });
    });