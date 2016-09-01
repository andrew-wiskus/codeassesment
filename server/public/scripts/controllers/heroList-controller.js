heroTracker.controller('HeroListController', ['$scope', '$http', function($scope, $http) {

    //the current list of heroes
    $scope.heroes = [];
    getHeroes();

    //delete heroes
    $scope.removeHero = function(id) {
        $http.delete('/heroes/' + id)
            .then(function() {
                console.log('DELETE /heroes/', id);
                getHeroes();
                $scope.deleted = true;
            });
    };

    //grabs all heroes
    function getHeroes() {
        $http.get('/heroes')
            .then(function(response) {
                console.log('GET /heroes', response.data);

                var heroDataArray = response.data;

                $scope.heroes = heroDataArray;
            });
    }

}]);
