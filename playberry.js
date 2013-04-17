require( [
   'components/angular/angular',
   'dependencies'
], function( angular, dependencies ) {

   var module = angular.module( 'playberry', [ 'ng', 'dependencies' ] );

   var defaultPath = '/queue';
   var routes = [
      {
         path: '/queue',
         title: 'Queue',
         templateUrl: 'partials/queue.html',
         controller: 'QueueController'
      },
      {
         path: '/search',
         title: 'Search',
         templateUrl: 'partials/search.html',
         controller: 'SearchController'
      }
   ];

   module.config( [ '$routeProvider', function( $routeProvider ) {

      routes.forEach( function( route ) {
         $routeProvider.when( route.path, {
            templateUrl: route.templateUrl,
            controller: route.controller
         } );
      } );

      $routeProvider.otherwise( {
         redirectTo: defaultPath
      } );
   } ] );

   module.run( [ '$rootScope', '$location', function( $rootScope, $location ) {
      $rootScope.routes = routes;

      $rootScope.isActive = function( route ) {
         return $location.path() === route.path;
      }
   } ] );

   angular.bootstrap( document, [ 'playberry' ] );

} );