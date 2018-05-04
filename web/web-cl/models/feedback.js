'use strict';
spaApp_book.factory("services", ['$http','$location','$route',
    function($http,$location,$route) {
    var obj = {};
    obj.getFeedBacks = function(){
        return $http.get(serviceBase + 'feedbacks');
    }    
    obj.createFeedBacks = function (feedback) {
        return $http.post( serviceBase + 'feedbacks', feedback )
            .then( successHandler )
            .catch( errorHandler );
        function successHandler( result ) {
            $location.path('/feedback/index');            
        }
        function errorHandler( result ){
            alert("Error data")
            $location.path('/feedback/create')
        }
    };   
    obj.getFeedBack = function(feedbackID){
        return $http.get(serviceBase + 'feedbacks/' + feedbackID);
    }
    obj.updateFeedBacks = function (feedback) {
        return $http.put(serviceBase + 'feedbacks/' + feedback.id, feedback )
            .then( successHandler )
            .catch( errorHandler );
        function successHandler( result ) {
            $location.path('/web-cl/views/feedback/index');
        }
        function errorHandler( result ){
            alert("Error data");
            $location.path('/web-cl/views/feedback/index' + feedback.id);
        }    
    };
    obj.deleteFeedBacks = function (feedbackID) {
        return $http.delete(serviceBase + 'feedbacks/' + feedbackID)
            .then( successHandler )
            .catch( errorHandler );
        function successHandler( result ) {
            $route.reload();
        }
        function errorHandler( result ){
            alert("Error data")
            $route.reload();
        }    
    };    
    return obj;   
}]);