require( [
   'components/angular/angular',
   'dependencies'
], function( angular, dependencies ) {

   var module = angular.module( 'playberry', [ 'ng', 'dependencies' ] );

   var routes = [
      {
         path: '/search',
         title: 'Search',
         templateUrl: 'partials/search.html',
         controller: 'SearchController'
      },
      {
         path: '/queue',
         title: 'Queue',
         templateUrl: 'partials/queue.html',
         controller: 'QueueController'
      }
   ];

   module.config( [ '$routeProvider', function( $routeProvider ) {

      routes.forEach( function() {

      } );

      $routeProvider.when( '/search', {
         templateUrl: 'partials/search.html',
         controller: 'SearchController'
      } );

      $routeProvider.when( '/queue', {
         templateUrl: 'partials/queue.html',
         controller: 'QueueController'
      } );

      $routeProvider.otherwise( {
         redirectTo: '/queue'
      } );
   } ] );

   module.run( [ '$rootScope', '$location', function( $rootScope, $location ) {
      console.log( $location.hash() );

      $rootScope.routes = routes;
      $rootScope.$on( '$routeChangeSuccess', function( event, route, previous ) {
         console.log( $location.hash() );
      } );
   } ] );

   angular.bootstrap( document, [ 'playberry' ] );

} );