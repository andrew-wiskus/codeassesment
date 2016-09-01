heroTracker.controller('HeroFormController', ['$scope', '$http', function($scope, $http) {

    $scope.heroPowers = ["Invisibility",
        "Flight",
        "Super Speed",
        "Heat Vision",
        "Super Strength",
        "Accelerated Healing",
        "Power Blast",
        "Animal Affinity"
    ];

    $scope.changePower = function(power){
      console.log("working");
      console.log(power);
    }

    //the new hero being inputed
    $scope.newHero = {};

    //submitting heroes
    $scope.submitHero = function() {
        var hero = $scope.newHero;
        console.log('posted: ', hero);
        $http.post('/heroes', hero)
            .then(function() {
                console.log('POST /heroes', hero);
            });
        $scope.newHero = {};
        getHeroes();

    };





}]);
