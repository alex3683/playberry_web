define( [], function() {
   'use strict';

   Controller.$inject = [ '$scope', '$http' ];

   function Controller( $scope, $http ) {
      $scope.queue = [];
   }

   return {
      init: function( module ) {
         module.controller( 'QueueController', Controller );
      }
   }

} );