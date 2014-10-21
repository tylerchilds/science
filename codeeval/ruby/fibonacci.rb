#
#
# Fibonacci - Code Eval Challenge
# Tyler Childs - 10/12/2014
#

# open file from command line
if ARGV[0].nil?
	puts "\nError: No file specified\n\n"
	exit 1
else
	file = File.read(ARGV[0])
end

def fib_find(pos)
	return 0 if pos == 0

	older = old = current = 1

	(1..pos).each do |index|
		next if index < 3

		current = fibonacci(older, old)

		older = old
		old = current

	end

	current
end

def fibonacci(older, old)
	older + old
end

# loop through file line by line
file.each_line do |line|

	puts fib_find(line.to_i)

end

exit 0