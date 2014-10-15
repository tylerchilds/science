/*
 *
 * Multiplication Tables- Code Eval Challenge
 * Tyler Childs - 12/9/2013
 * 
 * compile: g++ multiplication.cpp -o multiplication
 * */

#include <iostream>
#include <iomanip>
 
int main()
{
	for(int i = 1; i <= 12; i++){
		for(int j = 1; j <= 12; j++)
			std::cout << std::setw(4) << i * j;
		std::cout << std::endl;
	}
		

	return 0;
}