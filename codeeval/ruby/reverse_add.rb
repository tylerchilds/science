#
#
# Reverse and Add - Code Eval Challenge
# Tyler Childs - 10/12/2013
#

class Integer

	def is_palindrome?
		s = self.to_s
		s == s.reverse
	end

	def reverse
		self.to_s.reverse.to_i
	end

end

# open file from command line
if ARGV[0].nil?
	puts "\nError: No file specified\n\n"
	exit 1
else
	file = File.read(ARGV[0])
end

def make_palindrome(num)
	(1..100).each do |index|
		num += num.reverse
		if num.is_palindrome?
			return "#{index} #{num}"
		end
	end

	false
end

# loop through file line by line
file.each_line do |line|

	puts make_palindrome(line.to_i)

end

exit 0