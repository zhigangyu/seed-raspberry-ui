define(['angular', './px-module'], function(angular, sampleModule) {
    'use strict';
    return sampleModule.controller('TemperatureCtrl', ['$scope','$http', function($scope,$http,$stateParams) {

    	var updateStatus = function(){
	    	$http.get('/api/ms/piv/temperature').success(function(data){
	    		console.log('data = ' + JSON.stringify(data));
				var barData = [];
	    		angular.forEach(data, function(obj,index,array){
					var item = [];
					item[0] = obj.time;
					item[1] = parseInt(obj.value);
					barData[index] = item;
					console.log(barData[index]);
				});
	    		
	    		$scope.data = barData;
	    		console.log($scope.data);
	         });
	    	$http.get('/api/ms/piv/humidity').success(function(data){
	    		console.log('data = ' + JSON.stringify(data));
				var barData = [];
	    		angular.forEach(data, function(obj,index,array){
					var item = [];
					item[0] = obj.time;
					item[1] = parseInt(obj.value);
					barData[index] = item;
					console.log(barData[index]);
				});
	    		
	    		$scope.hmddata = barData;
	    		console.log($scope.hmddata);
	         });
    	};
    	setInterval(function(){
            $scope.$apply(updateStatus);
        },360000);

        updateStatus();

    }]);
});