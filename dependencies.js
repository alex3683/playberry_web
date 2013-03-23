define( [
   'components/angular/angular',
   'partials/search_controller',
   'partials/queue_controller'
], function( angular, searchController, queueController ) {

   var module = angular.module( 'dependencies', [] );

   searchController.init( module );
   queueController.init( module );

   return module;

} );