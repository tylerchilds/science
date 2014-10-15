/*
 *
 * Sum of Primes - Code Eval Challenge
 * Tyler Childs - 12/9/2013
 *
 * */

var sum = count = 0;
var i = 2

while (count < 1000){

	j = 2;

	while(j <= i){
		if(i == j){
			sum += i;
			count++;
			break;
		}
		
		if(i % j == 0)
			break;

		j++;
	}

	i++;
}

console.log(sum);