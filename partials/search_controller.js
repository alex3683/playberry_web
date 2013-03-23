define( [], function() {
   'use strict';

   Controller.$inject = [ '$scope', '$http' ];

   function Controller( $scope, $http ) {
      $scope.searchKey = '';

      $scope.searchResult = null;

      $scope.search = function() {
         console.log( $scope.searchKey );
         $http.post( 'http://localhost:8666/search', { query: $scope.searchKey } )
            .then( function( result ) {
               console.log( result );
               $scope.searchResult = result.data;
            } );
      }
   }

   return {
      init: function( module ) {
         module.controller( 'SearchController', Controller );
      }
   }

} );