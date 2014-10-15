function Dice($scope) {

	$scope.trCoin = new TrueRandom(2);
	$scope.srCoin = new ShuffleRandom(2);
	$scope.brCoin = new BagRandom(2);

	$scope.trStat = new TrueRandom(20);
	$scope.srStat = new ShuffleRandom(20);
	$scope.brStat = new BagRandom(20);

	$scope.br4 = new BagRandom(4);
	$scope.br6 = new BagRandom(6);
	$scope.br8 = new BagRandom(8);
	$scope.br10 = new BagRandom(10);
	$scope.br12 = new BagRandom(12);
	$scope.br20 = new BagRandom(20);

	$scope.statTest = function(){
		if($scope.testLoop > 100000 || $scope.testLoop < 0){
			$scope.testError = "Enter a value between 0 and 100,000";
			return;
		}

		for (var i=0; i < $scope.testLoop; i++)
		{ 
			$scope.trStat.roll();
			$scope.srStat.roll();
			$scope.brStat.roll();
		}
	}

	$scope.resetTest = function(){
		$scope.trStat = new TrueRandom(20);
		$scope.srStat = new ShuffleRandom(20);
		$scope.brStat = new BagRandom(20);
	}

}