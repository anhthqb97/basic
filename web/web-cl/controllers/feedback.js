'use strict';
spaApp_book.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/feedback/index', {
        templateUrl: 'web-cl/views/feedback/index.html',
        controller: 'index'
    })
    .when('/feedback/create', {
        templateUrl: 'web-cl/views/feedback/create.html',
        controller: 'create',
       
    })
    .when('/feedback/update/:feedbackID', {
        templateUrl: 'web-cl/views/feedback/update.html',
        controller: 'update',
    })
    .when('/feedback/delete/:feedbackID', {
        templateUrl: 'web-cl/views/feedback/index.html',
        controller: 'delete',
    })
    .otherwise({
        redirectTo: '/feedback/index'
    });
}]);

spaApp_book.controller('index', ['$scope', '$http', 'services', 
    function($scope,$http,services) {
    $scope.message = 'Everyone come and see how good I look!';
    $http.get(serviceBase + "feedbacks").then(function(data){
        $scope.feedbacks = data.data;
    });    
    $scope.deleteFeedBacks = function(feedbackID) {
        if(confirm("Are you sure to delete book number: " + feedbackID)==true && feedbackID>0){
            services.deleteFeedBacks(feedbackID);    
            $route.reload();
        }
    };
}])
.controller('create', ['$scope', '$http', 'services','$location',
    function($scope,$http,services,$location) {
    $scope.message = 'Look! I am an about page.';
    $scope.createFeedBacks = function(feedback) {
        var results = services.createFeedBacks(feedback);
    }  
}])
// .controller('update', ['$scope', '$http', '$routeParams', 'services','$location', 
//     function($scope,$http,$routeParams,services,$location,feedback) {
//     $scope.message = 'Contact us! JK. This is just a demo.';
//     var original = feedback.data;
//     $scope.feedback = angular.copy(original);
//     $scope.isClean = function() {
//         return angular.equals(original, $scope.feedback);
//     }
//     $scope.updateFeedBacks = function(feedback) {    
//         var results = services.updateFeedBacks(feedback);
//     } 
// }]);
.controller('update', ['$scope', '$http', '$routeParams', 'services','$location','feedback', 
    function($scope,$http,$routeParams,services,$location,feedback) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    var original = feedback.data;
    $scope.feedback = angular.copy(original);
    $scope.isClean = function() {
        return angular.equals(original, $scope.feedback);
    }
    $scope.updateFeedBacks = function(feedback) {    
        var results = services.updateFeedBacks(feedback);
    } 
}]);