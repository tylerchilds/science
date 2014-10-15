#
#
# Prime Palindrome - Code Eval Challenge
# Tyler Childs - 10/12/2014
#

class Integer

	def is_palindrome?
		s = self.to_s

		s == s.reverse
	end

	def is_prime?
		(2..self - 1).each do |divisor|
			return false if self % divisor == 0
		end

		true
	end

end

largest_prime_palindrome = 0

(1..1000).each do |number|

	if number.is_palindrome? && number.is_prime?
		largest_prime_palindrome = number
	end

end

puts largest_prime_palindrome