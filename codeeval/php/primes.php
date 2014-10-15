<?php

// Sum of Primes - Code Eval Challenge
// Tyler Childs - 12/9/2013


$sum = 0;
$i = 1;
$count = 0;

while($count < 1000){
	$prime = true;

	// check divisors
	for($j = 2; $j <= $i; $j++){
		if($i == $j){
			$sum += $i;
			$count += 1;
			break;
		}
		
		if($i % $j == 0){
			break;
		}	
	}

	$i++;
}

echo $sum . "\n";

?>