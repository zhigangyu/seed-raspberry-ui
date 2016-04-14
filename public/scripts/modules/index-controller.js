define(['angular', './px-module'], function(angular, sampleModule) {
    'use strict';
    return sampleModule.controller('IndexCtrl', ['$scope','$http','$stateParams', function($scope,$http,$stateParams) {

		var el = document.querySelector('#rangepicker');
        el.addEventListener('range-changed', function(e) {
            console.log('from = ' + el.range.from);
            reGetProducts();
        });

        $scope.paginationConf = {
            currentPage: 1,
            totalItems: 10,
            itemsPerPage: 10
        };

        
        var reGetProducts = function(){
            var postData = JSON.stringify({
                page: $scope.paginationConf.currentPage,
                pageSize: $scope.paginationConf.itemsPerPage,
                from: el.range.from,
                to: el.range.to
            });
            console.log('currentPage = ' + $scope.paginationConf.currentPage);

            $http.post('/api/ms/pi/quality', postData).success(function(data){
                $scope.paginationConf.totalItems = data.total;
                $scope.items = data.items;
            });
        };
        $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', reGetProducts);
    }]);
});